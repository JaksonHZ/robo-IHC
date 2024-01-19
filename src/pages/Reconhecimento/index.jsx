
import { useEffect, useRef } from "react";
import { useExternalScript } from "../../utils/ai-sdk/externalScriptsLoader";
import { getAiSdkControls } from "../../utils/ai-sdk/loader";

import FaceTrackerComponent from "../../components/FaceTrackerComponent";

export default function Reconhecimento(){

  const mphToolsState = useExternalScript("https://sdk.morphcast.com/mphtools/v1.0/mphtools.js");
  const aiSdkState = useExternalScript("https://ai-sdk.morphcast.com/v1.16/ai-sdk.js");
  const videoEl = useRef(undefined)

  useEffect(() => {
    videoEl.current = document.getElementById("videoEl");
    async function getAiSdk (){
      if(aiSdkState === "ready" && mphToolsState === "ready"){
        const { source, start } = await getAiSdkControls();
      await source.useCamera({
        toVideoElement: document.getElementById("videoEl"),
      });
        await start();
        
      }
     
    }
    getAiSdk();
  }, [aiSdkState, mphToolsState]);

  useEffect(() => {
    bindEvents();
  }, []);

  function bindEvents(){
    window.addEventListener("CY_FACE_EMOTION_RESULT", (evt) => {
      console.log(evt.detail.output.dominantEmotion || "") ;
    });
  }

  return(
    <>
    <h1>Reconhecimento</h1>
    <div style={{width:"640px", height: "480px", position:"relative"}}>
      <video id="videoEl"></video>
      <FaceTrackerComponent videoEl={videoEl}></FaceTrackerComponent>
    </div>
    </>
  )
}