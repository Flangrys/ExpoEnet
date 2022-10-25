import CommonFooter from "./common/footer";
import CommonNavbar from "./common/navbar";

function HomeComponent() {
    return (
        <>
            <div className="container">
                <CommonNavbar/>

                <div className="container bx-bg-1">
                    <h1>Algo</h1>
                </div>

                <CommonFooter/>
            </div>
        </>
    )
}

export default HomeComponent