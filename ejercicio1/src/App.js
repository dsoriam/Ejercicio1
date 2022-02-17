
import './App.css';
import Home from './components/Home';
import Navv from './components/Navv';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Route path="/" element={<Home />}>
    <Route path="/Navv" element={<Navv />}>
    {/* <Route path="invoices" element={<Invoices />}>
    <Route path=":invoice" element={<Invoice />} />
    </Route> */}
    </Route>
    </Route>

    {/* <Navv />
    <Home /> */}
    </>
  );
}

export default App;
