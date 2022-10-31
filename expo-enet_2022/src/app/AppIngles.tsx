import { motion } from "framer-motion"
import { Outlet } from "react-router-dom"
import CommonFooter from "../components/common/Footer"
import CommonNavbar from "../components/common/Navbar"

function AppIngles() {
    return (
        <>
            <div className="container">

                <CommonNavbar elementActive={1} />

                <h1 className="text-center tx-gradient-v1">Departamento de Ingles</h1>
                
                <Outlet />

                <CommonFooter />

            </div>
        </>
    )
}

export default AppIngles