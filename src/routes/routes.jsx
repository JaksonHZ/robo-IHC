import { Routes, Route } from "react-router-dom";
import Reconhecimento from "../pages/Reconhecimento";
import Respiracao from "../pages/Respiracao";
import Home from "../pages/Home";
import FeedbackReconhecimento from "../pages/FeedbackReconhecimento";
import RespostasProntas from "../pages/RespostasProntas";
import ProblemasNosEstudos from "../pages/ProblemasNosEstudos";

const AppRouter = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/reconhecimento" element={<Reconhecimento />}/>
        <Route path="/respiracao" element={<Respiracao />}/>
        <Route path="/reconhecimento/feedback" element={<FeedbackReconhecimento />}/>
        <Route path="/respostas_prontas" element={<RespostasProntas />}/>
        <Route path="/problemas_nos_estudos" element={<ProblemasNosEstudos />}/>
      </Routes> 
    </>
  )
}

export default AppRouter;


