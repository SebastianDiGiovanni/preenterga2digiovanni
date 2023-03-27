import CartWidget from "./CartWidget";
import { Link , NavLink } from "react-router-dom";
import logo from "./images/anime_store.png";


const NavBar = () => {
    return (
        <div className="container" >
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}>
                                <img src={logo} alt="Anime Para Todos Los Gustos" width={"120"} />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item" id="menu">
                                        <NavLink className="nav-link" activeClassName={"active"} to={"/"}>
                                            HOME
                                        </NavLink>
                                    </li>
                                    <li className="nav-item" id="menu">
                                        <NavLink className="nav-link" activeClassName={"active"} to={"/category/figuras"}>
                                            FIGURAS
                                        </NavLink>
                                    </li>
                                    <li className="nav-item" id="menu">
                                        <NavLink className="nav-link" activeClassName={"active"} to={"/category/mangas"}>
                                            MANGAS
                                        </NavLink>
                                    </li>
                                    <li className="nav-item" id="menu">
                                        <NavLink className="nav-link" activeClassName={"active"} to={"/category/ropa y accesorios"}>
                                            ROPA Y ACCESORIOS
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col d-flex align-item-center justify-content-end">
                            <CartWidget />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
