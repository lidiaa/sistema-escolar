import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CadastrarAlunos from "./pages/CadastrarAlunos";
import Alunos from './pages/Alunos';
import Biblioteca from './pages/Biblioteca';
import Dashboard from './pages/Dashboard';
import CadastrarLivros from './pages/CadastrarLivros'; //desafio 3
import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
      <BrowserRouter basename="/lidiaa">

        <Header />

        <main className={darkMode ? "dark" : "light"}>
          <Routes>
            <Route path='/' element={<Home darkMode={darkMode} setDarkMode={setDarkMode}/>} />
            <Route path='/cadastarAlunos' element={<CadastrarAlunos darkMode={darkMode} setDarkMode={setDarkMode}/>} />
            <Route path='/Alunos' element={<Alunos darkMode={darkMode} setDarkMode={setDarkMode}/>} />
            <Route path='/Biblioteca' element={<Biblioteca darkMode={darkMode} setDarkMode={setDarkMode}/>} />
            <Route path='/Dashboard' element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode}/>} />
            <Route path='/cadastrarLivros' element={<CadastrarLivros darkMode={darkMode} setDarkMode={setDarkMode}/>} />
          </Routes>
        </main>

        <Footer/>

      </BrowserRouter>
  );
}

export default App;
