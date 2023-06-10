import { useState } from "react";



const CheckoutForm = ({onConfirm}) => {

    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const handleChange = (e) => {
        setUserData(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const handleConfirm = (e) => {
        e.preventDefault();
        onConfirm(userData)
    }

  return (
    <div
      className="position-absolute top-50 start-50 translate-middle bg-secondary d-flex justify-content-center align-items-center rounded-3"
      style={{ width: "500px", height: "400px" }}
    >
      <form className="w-50" onSubmit={handleConfirm}>
     
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="correo" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control "
            id="correo"
            aria-describedby="emailHelp"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3 d-flex flex-column">
          <label htmlFor="tel" className="form-label">
            Telefono
          </label>
          <input type="number" className="form-control" id="tel"  name="phone"
            value={userData.phone}
            onChange={handleChange}/>
        </div>
        <div
          className="d-flex justify-content-center "
          style={{ width: "100%" }}
        >
          <button type="submit" className="btn btn-primary w-50">
            Crear orden
          </button>
        </div>
      </form>
    </div>
  );
};

export { CheckoutForm };
