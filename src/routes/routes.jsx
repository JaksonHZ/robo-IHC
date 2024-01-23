import { Routes, Route } from "react-router-dom";
import Reconhecimento from "../pages/Reconhecimento";
import Respiracao from "../pages/Respiracao";
const AppRouter = () => {
  return(
    <>
      <Routes>
        <Route path="/reconhecimento" element={<Reconhecimento />}/>
        <Route path="/respiracao" element={<Respiracao />}/>
      </Routes> 
    </>
  )
}

export default AppRouter;


