import { Routes, Route } from "react-router-dom";
import Reconhecimento from "../pages/Reconhecimento";
import Respiracao from "../pages/Respiracao";
import Home from "../pages/Home";
import FeedbackReconhecimento from "../pages/FeedbackReconhecimento";

const AppRouter = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/reconhecimento" element={<Reconhecimento />}/>
        <Route path="/respiracao" element={<Respiracao />}/>
        <Route path="/reconhecimento/feedback" element={<FeedbackReconhecimento />}/>
      </Routes> 
    </>
  )
}

export default AppRouter;


