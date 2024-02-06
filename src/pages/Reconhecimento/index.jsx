import { useEffect, useRef, useContext, useState } from "react";
import styles from "./styles.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import { useExternalScript } from "../../utils/ai-sdk/externalScriptsLoader";
import { getAiSdkControls } from "../../utils/ai-sdk/loader";
import FaceTrackerComponent from "../../components/FaceTrackerComponent";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "primereact/progressbar";
import ConfigButton from "../../components/ConfigButton/ConfigButton"

export default function Reconhecimento(){
  const { fontSize } = useContext(FontSizeContext);
  const mphToolsState = useExternalScript("https://sdk.morphcast.com/mphtools/v1.0/mphtools.js");
  const aiSdkState = useExternalScript("https://ai-sdk.morphcast.com/v1.16/ai-sdk.js");
  const videoEl = useRef(null);
  const [lastEmotion, setLastEmotion] = useState('');
  const [emotionCount, setEmotionCount] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  useEffect(() => {
    videoEl.current = document.getElementById("videoEl");
    async function getAiSdk (){
      if(aiSdkState === "ready" && mphToolsState === "ready"){
        const { source, start } = await getAiSdkControls();
        await source.useCamera({
          toVideoElement: videoEl.current,
        });
        await start();
      }
    }
    getAiSdk();
  }, [aiSdkState, mphToolsState]);

  useEffect(() => {
    setEmotionCount(0);
  },[])

  useEffect(() => {
    async function handleEmotion(evt) {
      const dominantEmotion = evt.detail.output.dominantEmotion || "";
      const { stop } = await getAiSdkControls();
      console.log(dominantEmotion);
      

      if (dominantEmotion === lastEmotion) {
        setEmotionCount(emotionCount + 1);

        if (emotionCount + 1 === 20) {
          console.log(`Enviando emoção dominante: ${dominantEmotion}`);
          await stop();
          setEmotionCount(0);
          setLastEmotion('');
          navigate("/reconhecimento/feedback", {state: {emotion: dominantEmotion}});
        }
      } else {
        setLastEmotion(dominantEmotion);
        setEmotionCount(1);
      }
    }

    window.addEventListener("CY_FACE_EMOTION_RESULT", handleEmotion);

    return () => {
      window.removeEventListener("CY_FACE_EMOTION_RESULT", handleEmotion);
    };
  }, [lastEmotion, emotionCount]);

  return(
    <div className={styles.body}>
      <ConfigButton />
      <CustomFontSize />
      <h1 style={{ fontSize: `${fontSize}px` }}>Enquadre seu rosto abaixo
          para que eu possa detectar 
          o que você está sentindo. </h1>
      <div className={styles.containerVideo}>
        <video id="videoEl" ref={videoEl} autoPlay playsInline></video>
        <FaceTrackerComponent videoEl={videoEl}></FaceTrackerComponent>
      </div>
      <ProgressBar
          value={Math.round((emotionCount / 30) * 100)}
          pt={{
              value: { style: { background: 'linear-gradient(to right, #8e2de2, #4a00e0)'} }
          }}
          className={styles.progress}
      ></ProgressBar>
    </div>
  )
}
