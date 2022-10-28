import Jumbotron from "./Jumbotron"


const jumboImg = {
    source: "/undraw_learning_re_32qv.svg",
    alt: "APP_LEARNING_UNDRAW"
}

function HomeComponent() {
    return (
        <>
            <Jumbotron contentTitle="Expo Enet 2022" contentBody="Dia de la educacion tecnica" img={jumboImg}/>
        </>
    )
}

export default HomeComponent