import { motion } from "framer-motion"
import CommonFooter from "./common/Footer"
import CommonNavbar from "./common/Navbar"
import Jumbotron from "./Jumbotron"

function AppEconomia() {
    return (
        <>
            <div className="container">

                <CommonNavbar />

                {/* <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="p-3 mb-4 rounded-5 bx-transition-bg-1"
                >

                    <div className="container py-5">
                        <div className="row">

                            <div className="col-md-8">
                                <h1 className="display-5 fw-bold pb-2">¿Que es el IPC?</h1>
                                <p className="col-lg-10 fs-4 pb-2">Todos los días empleamos palabras que hasta hace
                                    unos años sólo utilizaban los especialistas en
                                    economía. Muchos términos técnicos se fueron
                                    incorporando en los medios de comunicación y en
                                    ¿Qué es el Índice de Precios al Consumidor?
                                    nuestra manera de hablar, entre ellos inflación, IPC
                                    y costo de vida. Incluso se utilizan como si fueran
                                    sinónimos, pero en realidad no lo son.
                                </p>
                            </div>

                            <img className="col-md-4" src="/undraw_server_cluster_jwwq.svg" alt="APP_DEFINITION_SVG"/>

                        </div>
                    </div>

                </motion.div> */}

                <Jumbotron contentTitle="Algo" contentBody="otracosa" imgSource="/favicon.png" imgAlt="ALGO"/>

                <CommonFooter />

            </div>
        </>
    )
}

export default AppEconomia