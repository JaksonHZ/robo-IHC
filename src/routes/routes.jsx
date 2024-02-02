import { Routes, Route } from "react-router-dom";
import Reconhecimento from "../pages/Reconhecimento";
import Respiracao from "../pages/Respiracao";
import Home from "../pages/Home";
import FeedbackReconhecimento from "../pages/FeedbackReconhecimento";
import RespostasProntas from "../pages/RespostasProntas";
import ProblemasNosEstudos from "../pages/ProblemasNosEstudos";
import TermosDeUso from "../pages/TermosDeUso";
import ConfigGeral from "../pages/ConfigGeral";
import SobreNos from "../pages/SobreNos";
import Meditacao from "../pages/Meditacao";
import PositivaReconhecimentoNivel from "../pages/PositivaReconhecimentoNivel";
import SentindoSo from "../pages/sentindo_so";
import Sentimentos from "../pages/Sentimentos";
import MorarSo from "../pages/moroSo";
import MorarFamilia from "../pages/moroFamilia";
import MorarRep from "../pages/moroAmigos";
import Ansiedade from "../pages/Ansiedade";
import SemInfo from "../pages/nseiinformar";
import FeedbackRotina from "../pages/FeedbackRotina";
import Agradecimento from "../pages/Agradecimentos";

const AppRouter = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/reconhecimento" element={<Reconhecimento />}/>
        <Route path="/reconhecimento/positivanivel" element={<PositivaReconhecimentoNivel />}/>
        <Route path="/respiracao" element={<Respiracao />}/>
        <Route path="/reconhecimento/feedback" element={<FeedbackReconhecimento />}/>
        <Route path="/reconhecimento/feedback/rotina" element={<FeedbackRotina />}/>
        <Route path="/respostas_prontas" element={<RespostasProntas />}/>
        <Route path="/problemas_nos_estudos" element={<ProblemasNosEstudos />}/>
        <Route path="/termos_de_uso" element={<TermosDeUso />}/>
        <Route path="/ConfigGeral" element={<ConfigGeral />}/>
        <Route path="/SobreNos" element={<SobreNos />}/>
        <Route path="/meditacao" element={<Meditacao />}/>
        <Route path="/sentimentos" element={<Sentimentos />}/>
        <Route path="/sentindo_so" element={<SentindoSo />}/>
        <Route path="/moroSo" element={<MorarSo />}/>
        <Route path="/morar_com_familiares" element={<MorarFamilia />}/>
        <Route path="/morar_com_amigos" element={<MorarRep />}/>
        <Route path="/ansiedade" element={<Ansiedade />}/>
        <Route path="/semInfo" element={<SemInfo />}/>
        <Route path="/agradecimentos" element={<Agradecimento />}/>
      </Routes> 
    </>
  )
}

export default AppRouter;


