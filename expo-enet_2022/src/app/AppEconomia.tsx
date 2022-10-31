import { motion } from "framer-motion"
import CommonFooter from "../components/common/Footer"
import CommonNavbar from "../components/common/Navbar"
import Jumbotron from "../components/Jumbotron"

export default function AppEconomia() {

    document.title = "Economia y gestion de la produccion"

    return (
        <>
            <div className="container">

                <CommonNavbar elementActive={0} />

                <h1>App Economia</h1>

                <CommonFooter />

            </div>
        </>
    )
}
