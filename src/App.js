import SideBar from "./Components/SideBar";
import {Button} from "semantic-ui-react"
import { BrowserRouter } from "react-router-dom";
import MenuBar from "./Components/MenuBar";


function App() {
  return (

    <BrowserRouter>
    <MenuBar/>
    <SideBar/>
    </BrowserRouter>
 
  );
}

export default App;
