import { Routes, Route } from "react-router-dom";
import Reconhecimento from "../pages/Reconhecimento";
const AppRouter = () => {
  return(
    <>
      <Routes>
        <Route path="/reconhecimento" element={<Reconhecimento />}/>
      </Routes> 
    </>
  )
}

export default AppRouter;


