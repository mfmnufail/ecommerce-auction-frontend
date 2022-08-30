import SideBar from "./Components/SideBar";
import {Button} from "semantic-ui-react"
import { BrowserRouter } from "react-router-dom";
import MenuBar from "./Components/MenuBar";
import AppRoute from './Routes/index'


function App() {
  return (

    <BrowserRouter>
    <MenuBar/>
    <SideBar/>
    <AppRoute/>
    </BrowserRouter>
 
  );
}

export default App;
