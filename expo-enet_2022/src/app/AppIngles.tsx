import { motion } from "framer-motion"
import CommonFooter from "../components/common/Footer"
import CommonNavbar from "../components/common/Navbar"

function AppIngles() {
    return (
        <>
            <div className="container">

                <CommonNavbar elementActive={1} />

                <CommonFooter />

            </div>
        </>
    )
}

export default AppIngles