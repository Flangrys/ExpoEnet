import CommonFooter from "../components/common/Footer";
import CommonNavbar from "../components/common/Navbar";
import HomeComponent from "../components/HomeComp";

export default function HomeView() {
    return (
        <>
            <div className="container">
                <CommonNavbar elementActive={1}/>

                <HomeComponent/>

                <CommonFooter/>
            </div>
        </>
    )
}