import axios from 'axios'
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { reducerDoctors } from './reducers/reducerDoctors'

const appStates = createContext()

const lsFavs = JSON.parse(localStorage.getItem("favs")) || []

const initialStates = {
  dentistas: [],
  favs: lsFavs,
  theme: true
}

const Context = ({children}) => {

  const [state, dispatch] = useReducer(reducerDoctors, initialStates)

  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    axios(url)
    .then(res => {
      dispatch({type: "GET_DOCTORS", payload: res.data})
    })
  }, [])

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs))
  }, [state.favs])

  return (
    <appStates.Provider value={{state, dispatch}}>
        {children}
    </appStates.Provider>
  )
}

export default Context

export const useAppStates = () => useContext(appStates)
