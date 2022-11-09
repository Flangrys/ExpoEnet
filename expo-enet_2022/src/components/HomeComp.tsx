import Jumbotron from "./common/Jumbotron"


const ExpoJumboSvg = { source: "/svg/undraw_learning_re_32qv.svg", alt: "EXPO_SVG_JUMBOTRON_IMAGE" }

function HomeComponent() {
    return (
        <>
            <Jumbotron header="Expo Enet 2022" body="Dia de la educacion tecnica" img={ExpoJumboSvg} btn={{
                callback: function (): any {
                    console.log(`[+] Button pressed.`)
                },
                label: "Algo"
            }} />
        </>
    )
}

export default HomeComponent