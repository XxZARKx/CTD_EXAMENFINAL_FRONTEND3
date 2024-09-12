import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import { useAppStates } from '../global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useAppStates()
  
  const changeTheme = () => {
    dispatch({type: "TOOGLE_THEME"})
  }

  return (
    <nav className={state.theme? "navColor1" : "navColor2"}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={routes.home}><h4 className='links'>Home</h4></Link>
      <Link to={routes.favs}><h4 className='links'>Favorites</h4></Link>
      <Link to={routes.contact}><h4 className='links'>Contact</h4></Link>
      <button className='changeTheme' onClick={changeTheme}>{!state.theme? "☀️" : "🌙"}</button>
    </nav>
  )
}

export default Navbar