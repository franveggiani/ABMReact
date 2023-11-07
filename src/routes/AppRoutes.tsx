import { Routes, Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import Componentes from "../pages/Componentes"
import Administracion from "../pages/Administracion"

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/componentes" element={<Componentes />} />
        <Route path="/administracion" element={<Administracion />} />
    </Routes>
  )
}