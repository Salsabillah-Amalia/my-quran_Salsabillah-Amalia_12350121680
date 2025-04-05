// import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/content";
import { HashRouter, Route, Routes } from "react-router-dom"; 
import Dashboard from "./Pages/Dashboard";
import DetailSurat from "./Pages/DetailSurat";

function App() {
  return (
    <>
      <div className="d-flex row">
        {/*Ganti menggunakan HashRouter Karena akan di-deploy di github pages*/}
        <HashRouter>
          <div className=" col-3">
            <Navbar />
          </div>
          <div className=" col-9">
            <content>
              <routes>
                <route path="/" element={<Dashboard />}></route>
                <route path="/surat/:id" element={<DetailSurat />}></route>
              </routes>
            </content>
          </div>
        </HashRouter>
         
      </div>
    </>
  );
}

export default App;