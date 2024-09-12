import React from "react";
import { Link } from "react-router-dom";
import { useAppStates } from "../global.context";
import Swal from "sweetalert2";


const Card = ({ dentista }) => {

  const {id, name, username} = dentista
  const { state, dispatch } = useAppStates();
  const isFav = state.favs.find((fav) => fav.id == dentista.id);
  const addFav = () => {
    dispatch({ type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: dentista });
    setTimeout(() => {
      if(!isFav){
        Swal.fire({
          icon: "success",
          title: "Operacion exitosa",
          text: "Agregado correctamente a favoritos",
        })
      }else{
        Swal.fire({
          icon: "success",
          title: "Operacion exitosa",
          text: "Eliminado de favoritos",
        })
      }
    }, 200)
  };

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src={"/images/doctor.jpg"} width={200}  />
        <Link to={"/detail/"+id}>
          <h3 style={{textAlign: "center"}}>{id}: {name}</h3>
        </Link>
        <h4>{username}</h4>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav}>{isFav ? "❌" : "⭐"}</button>
    </div>
  );
};

export default Card;
