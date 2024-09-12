
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Components/utils/routes";
import Home from './Routes/Home'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import { useAppStates } from "./global.context";


function App() {

  const {state} = useAppStates()

  return (
      <div style={{minHeight: "100vh"}} className={state.theme? "colors1" : "colors2"}>
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.detail} element={<Detail/>}/>
            <Route path={routes.error} element={<h1>Error 404 - Page Not Found</h1>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
