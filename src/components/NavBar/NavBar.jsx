import logoEcommerce from "../../assets/logoEcommerce.jpg"
import { CartWidget } from "../CartWidget/CartWidget";




export const NavBar = () => {
    return (

            <nav className="navbar navbar-expand-md border-2 border-bottom border-primary border-opacity-25">

                    <div className="container-fluid  ">

                        <div className="d-flex navbar-brand">
                                <img src={logoEcommerce} alt="logo de la pagina" style={{height: "60px"}}/>
                                <h1 className="ms-2"> SPORTS</h1>
                        </div>

                        <div className="navbar-nav-md  w-50 d-flex justify-content-evenly me-5">

                            <button className="btn btn-outline-primary w-25"> Remeras </button>
                            <button className="btn btn-outline-primary w-25"> Botines </button>
                            <button className="btn btn-outline-primary w-25"> Pelotas </button>

                        </div>

                
                            <CartWidget/>
                            
                    </div>

            </nav>

    );
}






