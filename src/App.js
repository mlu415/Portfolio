import "./App.scss";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
