import { NavLink } from 'react-router-dom';

export default function Header() {

    return (

        <>

            <header >
                <nav className="navbar navbar-expand-sm navbar-light nav_bar shadow-sm " >
                    <div className="container ">
                        <NavLink className="navbar-brand p-0 logo_container" to="/"><img className='img_logo' src="/BooRoad_logo.png" alt="" /></NavLink>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse z-3 menu_tendina p-3 " id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link " to="/" aria-current="page">
                                        Home
                                        <span className="visually-hidden">(current)</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

            </header>
        </>

    )
}