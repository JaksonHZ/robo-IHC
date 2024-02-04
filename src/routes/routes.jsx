import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TermosDeUso from "../pages/TermosDeUso";
import ConfigGeral from "../pages/ConfigGeral";
import SobreNos from "../pages/SobreNos";
import Reconhecimento from "../pages/Reconhecimento";
import FeedbackReconhecimento from "../pages/FeedbackReconhecimento";
import Sentimentos from "../pages/Sentimentos";
import PositivaReconhecimentoNivel from "../pages/PositivaReconhecimentoNivel";
import Respiracao from "../pages/Respiracao";
import Meditacao from "../pages/Meditacao";
import RespostasProntas from "../pages/RespostasProntas";
import ProblemasNosEstudos from "../pages/ProblemasNosEstudos";
import SentindoSo from "../pages/sentindo_so";
import MorarRep from "../pages/moroAmigos";
import MorarFamilia from "../pages/moroFamilia";
import MorarSo from "../pages/moroSo";
import Ansiedade from "../pages/Ansiedade";
import SemInfo from "../pages/nseiinformar";
import FeedbackRotina from "../pages/FeedbackRotina";
import Satisfacao from "../pages/satisfacao";
import Agradecimento from "../pages/Agradecimentos";

const AppRouter = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/termos_de_uso" element={<TermosDeUso />}/>
        <Route path="/ConfigGeral" element={<ConfigGeral />}/>
        <Route path="/SobreNos" element={<SobreNos />}/>
        <Route path="/reconhecimento" element={<Reconhecimento />}/>
        <Route path="/reconhecimento/feedback" element={<FeedbackReconhecimento />}/>
        <Route path="/sentimentos" element={<Sentimentos />}/>
        <Route path="/reconhecimento/positivanivel" element={<PositivaReconhecimentoNivel />}/>
        <Route path="/respiracao" element={<Respiracao />}/>
        <Route path="/meditacao" element={<Meditacao />}/>
        <Route path="/respostas_prontas" element={<RespostasProntas />}/>
        <Route path="/problemas_nos_estudos" element={<ProblemasNosEstudos />}/>
        <Route path="/sentindo_so" element={<SentindoSo />}/>
        <Route path="/morar_com_amigos" element={<MorarRep />}/>
        <Route path="/morar_com_familiares" element={<MorarFamilia />}/>
        <Route path="/moroSo" element={<MorarSo />}/>
        <Route path="/ansiedade" element={<Ansiedade />}/>
        <Route path="/semInfo" element={<SemInfo />}/>
        <Route path="/reconhecimento/feedback/rotina" element={<FeedbackRotina />}/>
        <Route path="/satisfacao" element={<Satisfacao />}/>
        <Route path="/agradecimentos" element={<Agradecimento />}/>
      </Routes> 
    </>
  )
}

export default AppRouter;


