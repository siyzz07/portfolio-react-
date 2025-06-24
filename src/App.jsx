import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import ProjectData from './components/ProjectData'
import { useContext } from "react";
import { projectDataContext } from "./ContextApi/ProjectSample";

function App() {
  const {data,setData}=useContext(projectDataContext)
  return (
    <div className="dark:bg-gray-900">
      {data.popup && <ProjectData/>}
      <NavBar/>
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App