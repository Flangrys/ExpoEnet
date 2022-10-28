import { motion } from "framer-motion"
import CommonFooter from "../components/common/Footer"
import CommonNavbar from "../components/common/Navbar"
import Jumbotron from "../components/Jumbotron"

export default function AppEconomia() {

    document.title = "Economia y gestion de la produccion"

    return (
        <>
            <div className="container">

                <CommonNavbar />

                <main>
                    <Jumbotron contentTitle="Algo" contentBody="algomas" imgSource="/undraw_learning_re_32qv.svg" imgAlt="algomas"></Jumbotron>
                </main>

                <CommonFooter />

            </div>
        </>
    )
}
