import React, { useState } from "react";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// root component (wraps other components)
function App() {
  const [page, setPage] = useState("About me");

  const [categories] = useState([
    { name: "About" },
    { name: "Portfolio" },
    {
      name: "Contact",
    },
    {
      name: "Resume",
    },
  ]);

  const currentPage = () => {
    switch (page) {
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };


  return (
    <div>
      <Header 
      categories={categories}
      page={page}
      setPage={setPage}
      ></Header>
      <main>
        <div>{currentPage(page)}</div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;