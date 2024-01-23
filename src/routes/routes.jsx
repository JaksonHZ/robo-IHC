import { Routes, Route } from "react-router-dom";
import Reconhecimento from "../pages/Reconhecimento";
import Home from "../pages/Home";
const AppRouter = () => {
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/reconhecimento" element={<Reconhecimento />}/>
      </Routes> 
    </>
  )
}

export default AppRouter;


