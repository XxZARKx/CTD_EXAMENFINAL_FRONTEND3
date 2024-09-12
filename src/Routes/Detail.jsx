import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [info, setInfo] = useState({})
  const [loader, setLoader] = useState(true)
  const {id} = useParams()

  const url = `https://jsonplaceholder.typicode.com/users/${id}`

  useEffect(() => {
    Swal.fire({
      title: 'Cargando informacion',
      text: 'Porfavor, espere unos momentos',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    axios(url)
      .then(res => {
        setInfo(res.data);
        setLoader(false);

        Swal.close();
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Algo salio mal',
          text: 'Intentelo denuevo mas tarde',
        });
      });
  }, []);
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column", padding: "20px 40px"}}>
      {!loader && <>
        <h1>Detail Dentist {info.id} </h1>
        <img src='/images/doctor.jpg' width={200}/>
        <table style={{marginTop: "20px"}}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Website</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{info.name}</td>
              <td>{info.email}</td>
              <td>{info.phone}</td>
              <td>{info.website}</td>
            </tr>
          </tbody>
        </table>
      </>}
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail