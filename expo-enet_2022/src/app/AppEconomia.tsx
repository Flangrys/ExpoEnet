import CommonFooter from "../components/common/Footer"
import CommonNavbar from "../components/common/Navbar"
import UtilitySpacer from "../components/common/Spacer"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { motion } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend);

var data = {
    labels: [
        "Alimentos y bebidas",
        "Indumentaria",
        "Vivienda y servicios basicos",
        "Equipamiento y mantenimiento del hogar",
        "Atencion medica y gastos para la salud",
        "Transporte y comunicaciones",
        "Esparcimiento",
        "Educacion",
        "Bienes y servicios varios"
    ],
    datasets: [
        {
            label: '# of Votes',
            data: [42, 5, 6, 5, 7, 8, 9, 13, 14],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(97, 218, 251, .2)',
                'rgba(117, 54, 211, .2)',
                'rgba(241, 180, 91, .2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(97, 218, 251, .79)',
                'rgba(117, 54, 211, .79)',
                'rgba(241, 180, 91, .79)',
            ],
            borderWidth: 2,
            hoverOffset: 5,
        },
    ],
};

export default function AppEconomia() {

    document.title = "Economia y gestion de la produccion"

    return (
        <>
            <div className="container py-2">
                <CommonNavbar elementActive={0} />

                <div className="p-5 mb-4 rounded-3">

                    <main className="container-fluid py-5">

                        <article>

                            <section>

                                <motion.div
                                    className="container-fluid row py-5"
                                    style={{ x: -100 }}
                                    animate={{ x: 0 }}
                                    transition={{ duration: 2 }}
                                >
                                    <div className="col-md-8">
                                        <h1 className="display-3 fw-bold">¿Que es el IPC?</h1>
                                        <p className="fs-4">
                                            El <abbr title="IPC">Indice de Precios al Consumidor</abbr> es un indicador que mide la evolucion promedio de los precios de un conjunto de bienes y servicios representativos del gasto de los hogares.
                                        </p>
                                    </div>
                                    <div className="col-md-4">
                                        <img src="\svg\undraw_statistic_chart_re_w0pk.svg" alt="EXPO_SVG_CHART_PERCENTAGE" height="100%" width="100%" />
                                    </div>
                                </motion.div>

                            </section>

                            <section>

                                <motion.div
                                    className="container-fluid py-5"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.5,
                                        ease: [0, 0.71, 0.2, 1.01]
                                    }}
                                >

                                    <div className="row align-items-md-stretch">

                                        <div className="col-md-6    ">
                                            <div className="h-100 p-5 text-bg-dark rounded-3 position-relative">

                                                <h2><span className="item-li-btn">1</span> Ecuesta a los hogares</h2>
                                                <p>El INDEC realiza una encuesta a un grupo representativo de hogares para conocer sus consumos.</p>
                                                <img className="card rounded-pill" src="/img/undraw_Customer_survey_re_v9cj.png" alt="EXPO_SVG_SURVEY_CPI" height="50%" width="50%" />

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="h-100 p-5 bg-light border rounded-3">

                                                <h2><span className="item-li-btn">2</span> Canasta de bienes y servicios</h2>
                                                <p>Con la informacion recolectada en las encuestas se confecciona una lista de bienes y servicios que forman la denominada <abbr title="Canasta del IPC">Canasta del IPC</abbr>.</p>
                                                <img className="card rounded-pill" src="/img/undraw_shopping_app_flsj.png" alt="EXPO_SVG_BASKET_CPI" height="40%" width="40%" />

                                            </div>
                                        </div>

                                    </div>

                                    <div className="row row-rev align-items-md-stretch py-4">

                                        <div className="col-md-6">
                                            <div className="h-100 p-5 text-bg-dark rounded-3">

                                                <h2><span className="item-li-btn">3</span> Relevameinto de precios</h2>
                                                <p>Se envia mensualmente a un grupo de encuestadores a los comercios en busca de los precios de los bienes y servicios de la canasta.</p>
                                                <img className="card rounded-pill" src="/img/undraw_split_testing_l1uw.png" alt="EXPO_SVG_ANALIZING_CPI" height="50%" width="50%" />

                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="h-100 p-5 bg-light border rounded-3">

                                                <h2><span className="item-li-btn">4</span> Seguimiento y comparacion</h2>
                                                <p>Se compara mensualmente los precios para calcular su variacion en el tiempo.</p>
                                                <img className="card rounded-pill" src="/img/undraw_Growth_analytics_re_pyxf.png" alt="EXPO_SVG_COMPARING_CPI" height="50%" width="50%" />

                                            </div>
                                        </div>

                                    </div>

                                </motion.div>

                            </section>

                            <section>
                                <h1>¿Todas las canastas son iguales?</h1>
                                <p>
                                    Cuando hablamos de canasta en nuestra vida diaria, pensamos en el grupo de articulos que un hogar compra habitualmente.
                                    Pero, como cada hogar no compra exactamente los mismos articulos en la mismas cantidades, seria imposible medir la canasta de cada hogar para estudiar el gasto de todos estos.
                                    Asi, por ejemplo, aquel hogar que tenga miembros en edad escolar tendran mas gasots relacionados con la educacion, mientras que otros cuyos miembros sean todos adultos trabajadores trndran gastos diferentes.
                                </p>
                            </section>

                            <section>

                                <h1>Representacion de los gastos de los hogares</h1>
                                <p>Si los diferentes tipos de hogares consumen de acuerdo a su composision, entonces ¿como llegamos a definir una canasta donde esten representados los consumos de todos los hogares?</p>

                                <div className="container bg-light border rounded-3 d-flex justify-content-center">
                                    <Doughnut className="m-3 w-75 h-75" data={data} />
                                </div>
                            </section>

                            <section>
                                <h1>Canasta IPC</h1>
                                <p>Asi se llega a definir la <abbr title="Canasta del IPC">canasta del IPC</abbr>, que contiene aquellos productos y servicios mas representativos del gasto conjunto de los hogares.</p>
                                
                            </section>

                        </article>

                    </main>

                </div>

                <CommonFooter />
            </div>
        </>
    )
}
