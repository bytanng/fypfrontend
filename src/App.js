import Navbar from "./components/General/NavBar/navbar";
import Footer from "./components/General/Footer/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import User from "./pages/User";
import UserList from "./pages/UserList";
import ProjectList from "./pages/ProjectList";
import MyProjects from "./pages/MyProjects";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/about' exact Component={About}/>
        <Route path='/project' exact Component={Project}/>
        <Route path='/user' exact Component={User}/>
        <Route path='/userlist' exact Component={UserList}/>
        <Route path='/projectlist' exact Component={ProjectList}/>
        <Route path='/myprojects' exact Component={MyProjects}/>
        <Route path='/login' exact Component={Login}/>
        <Route path='/signup' exact Component={SignUp}/>
        <Route path='/contact' exact Component={Contact}/>
        <Route path='/faq' exact Component={FAQ}/>
      </Routes>
      <Footer/>
    </Router>

      {/* <Intro/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/> */}
    </div>
  );
}

export default App;
