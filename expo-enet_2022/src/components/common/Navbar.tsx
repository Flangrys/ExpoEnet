// TODO: Añadir un state que permita identificar cual link esta activo, es decir, segun la ruta donde este
// colocar la clase al elemento hijo de `nav-link`, `active`.

import { Component, ReactNode } from "react"

type NavbarProp = {
    elementActive: number
}

// !REF: type NavbarState = ...


class CommonNavbar extends Component<NavbarProp, {/*State*/}> {

    constructor(props: NavbarProp) {
        super(props)
    }

    render(): ReactNode {
        return (
            <>
                <nav className="navbar navbar-expand-lg border-bottom mb-4">
                    <div className="container-fluid">

                        <a href="/" className="navbar-brand">
                            <img src="/favicon.png" alt="APP_BRAND_LOGO" className="d-inline-block" width="30" height="45" />
                            <span className="void-space"></span>
                            Expo 2022
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav text-center align-items-center">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
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

                    </div>
                </nav>
            </>
        )
    }
}

export default CommonNavbar