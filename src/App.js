import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbars from "./components/Navbars";
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";
import SingleUser from "./screen/SingleUser";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LoginScreen />}>
            {" "}
          </Route>
          <Route path="/" element={<HomeScreen />}>
            {" "}
          </Route>
          <Route
            path="/single/:id"    
            element={<SingleUser/>}>
            {" "}
          </Route>
        </Routes>
     
      </BrowserRouter>
      </div>
  );
}

export default App;
