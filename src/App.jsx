import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditData from "./Components/EditData";
import CreateData from "./Components/CreateData";
import DashBoard from "./Components/DashBoard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/create" element={<CreateData/>} />
        <Route path="/" element={<DashBoard/>} />
        <Route path="/edit/:id" element={<EditData/>}/>
      </Routes>
    </>
  );
}

export default App;
