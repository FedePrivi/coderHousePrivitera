import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer styles={"text-success text-center mt-5"} greeting={"Bienvenido a la tienda"}/>
    </>
  );
}

export default App;
