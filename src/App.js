// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import About from "./Components/About.js";
import TextForm from './Components/TextForm.js'
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [alert, setAlert] = useState(null);
    const [theme, setTheme] = useState({
        text: "black",
        nav: "light",
        body: "white",
        textar: "white",
        btn: "primary",
    });

    let showAlert = (message, type) => {
        setAlert({ msg: message, type: type });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    const toggleTheme = (mode) => {
        if (mode === "purple") {
            setTheme({
                text: "#e7e7e7",
                nav: "dark",
                textar: "#141524",
                btn: "primary",
            });
            document.body.style.background = "#05001c";
        } else if (mode === "red") {
            setTheme({
                text: "#e7e7e7",
                nav: "dark",
                textar: "#241414",
                btn: "danger",
            });
            document.body.style.background = "#400202";
        } else if (mode === "green") {
            setTheme({
                text: "#e7e7e7",
                nav: "dark",
                textar: "#142f29",
                btn: "success",
            });
            document.body.style.background = "#024033";
        } else if (mode === "black") {
            setTheme({
                text: "#e7e7e7",
                nav: "dark",
                textar: "#0f0f12",
                btn: "dark",
            });
            document.body.style.background = "#161618";
        } else if (mode === "white") {
            setTheme({
                text: "black",
                nav: "light",
                textar: "white",
                btn: "primary",
            });
            document.body.style.background = "white";
        }
    };

    return (
        <>
          <Router>
            <Navbar
                title="TextUtils"
                about="About"
                theme={theme}
                toggleTheme={toggleTheme}
                showAlert={showAlert}
            />

            <div className="container">
              <Routes>
                  <Route path='about' element={<About theme={theme}/>}/>
                  <Route path="/" element={<TextForm
                    heading="Enter your text to analyze"
                    theme={theme}
                    showAlert={showAlert}
                  />}/>
              </Routes>
            </div>
          </Router>
            <footer>
                <Alert alert={alert} />
            </footer>
        </>
    );
}

export default App;
