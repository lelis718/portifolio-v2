import { Route, Routes } from "react-router";
import { Footer } from "./components/Footer";
import { SiteNavigation } from "./components/SiteNavigation";
import { AboutMe } from "./pages/AboutMe";
import { Home } from "./pages/Home";
import { Lab } from "./pages/Lab";
import { Skills } from "./pages/Skills";
import { Work } from "./pages/Work";


export function App() {


  return (
    <>
      <SiteNavigation />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about-me" Component={AboutMe}></Route>
        <Route path="/work" Component={Work}></Route>
        <Route path="/skills" Component={Skills}></Route>
        <Route path="/lab" Component={Lab}></Route>
      </Routes>
      <Footer />
    </>
  );
}
