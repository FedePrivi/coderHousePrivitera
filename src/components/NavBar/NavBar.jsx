import { Link, NavLink } from "react-router-dom";
import logoEcommerce from "../../assets/logoEcommerce.jpg"
import { CartWidget } from "../CartWidget/CartWidget";




export const NavBar = () => {
    return (

            <nav className="navbar navbar-expand-md border-2 border-bottom border-primary border-opacity-25">

                    <div className="container-fluid  ">

                        <div className="d-flex navbar-brand">
                                <Link to={"/"}>
                                <img src={logoEcommerce} alt="logo de la pagina" style={{height: "60px"}}/>
                                {/* <h1 className="ms-2"> SPORTS</h1> */}
                                </Link>
                        </div>

                        <div className="navbar-nav-md  w-50 d-flex justify-content-evenly me-5">

                            <NavLink to={`category/remeras`} className="btn btn-outline-primary w-25"> Remeras </NavLink>
                            <NavLink to={`category/botines`} className="btn btn-outline-primary w-25"> Botines </NavLink>
                            <NavLink to={`category/pelotas`} className="btn btn-outline-primary w-25"> Pelotas </NavLink>

                        </div>

                
                            <CartWidget/>
                            
                    </div>

            </nav>

    );
}






