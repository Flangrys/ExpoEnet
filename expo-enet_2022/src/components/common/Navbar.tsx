function CommonNavbar() {
    return (
        <>
            
            <nav className="navbar navbar-expand-lg border-bottom mb-4">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand box-primary">
                        <img src="/favicon.png" alt="APP_BRAND_LOGO" className="d-inline-block" width="30" height="45" />
                        <span className="void-space"></span>
                        Expo 2022
                    </a>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-center align-items-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/economia">Economia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ingles">Ingles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Programacion</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default CommonNavbar