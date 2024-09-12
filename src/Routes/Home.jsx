import React from 'react'
import Card from '../Components/Card'
import { useAppStates } from '../global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {


  const {state} = useAppStates()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.dentistas.map(dentista => {
          return <Card key={dentista.id} dentista={dentista}/>
        })}
      </div>
    </main>
  )
}

export default Home