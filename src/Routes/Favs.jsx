import React from "react";
import Card from "../Components/Card";
import { useAppStates } from "../global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useAppStates()

  return (
    <div style={{minHeight: "100vh"}}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {state.favs.map((dentista) => {
          return <Card key={dentista.id} dentista={dentista}/>
        })}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
