import React, { useState } from "react";
import PropTypes from "prop-types";
// import {link} from 'react-router-dom';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    
    const handleUpClick = () => {
        // console.log("uppercase button was clicked");/
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper Case", 'primary')
    };
    const handleDownClick = () => {
        // console.log("uppercase button was clicked");/
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower Case", 'primary')

    };
    const handleClearClick = () => {
        // console.log("uppercase button was clicked");/
        setText("");
        props.showAlert("Cleared the textarea.", 'primary')

    };

    const handleChallegneClick = () => {
        setText("");
        let i = 0;
        let str =
            "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3][4] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[5][6][7]\n  React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[8][9]";
        let newText = "";
        let interval_ct = setInterval(() => {
            newText = newText + str[i];
            setText(newText);
            if (i === str.length - 1) {
                clearInterval(interval_ct);
            } else {
                i++;
            }
        }, 40);
    };

    const handle_text_onclick = () => {
        if (count === 0) {
            setCount(1);
            setText("");
        }
    };

    const handleOnChange = (event) => {
        // console.log("onchange")
        setText(event.target.value);
    };

    const handleCopyClick = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard", 'success')
    }

    return (
        <>
            <div className="container" style ={{ color: props.theme.text}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea style ={{ color: props.theme.text,
                                        background: props.theme.textar}}
                        className="form-control"
                        id="myBox"
                        rows="8"
                        onChange={handleOnChange}
                        onClick={handle_text_onclick}
                        value={text}
                    ></textarea>
                </div>
                <button className={`btn btn-${props.theme.btn}`} onClick={handleUpClick}>
                    Convert to uppercase
                </button>
                <button
                    className={`btn btn-${props.theme.btn} mx-3`}
                    onClick={handleDownClick}
                >
                    Convert to lowercase
                </button>
                <button className={`btn btn-${props.theme.btn}`} onClick={handleClearClick}>
                    Clear all
                </button>
                <button
                    className={`btn btn-${props.theme.btn} mx-3`}
                    onClick={handleCopyClick}
                >
                    Copy to clipboard
                </button>
                <button
                    className={`btn btn-${props.theme.btn} `}
                    onClick={handleChallegneClick}
                >
                    What is React?
                </button>
            </div>
            <hr style = {{color: props.theme.nav === 'light'? 'black':'white'}} />
            <div className="container " style ={{ color: props.theme.text}}>
                <h2>Your Text Summary</h2>
                <p>
                    Words:{" "}
                    {text.split(" ").toString() === ""
                        ? 0
                        : text.split(" ").length}
                    , Characters: {text.length}
                </p>
                <p>
                    {0.008 *
                        (text.split(" ").toString() === ""
                            ? 0
                            : text.split(" ").length)}{" "}
                    minutes required to read the words
                </p>
                <h2>Preview</h2>
                <p>{text === ''? 'Write something above to see preview..': text}</p>
            </div>
            
        </>
    );
}

TextForm.propTypes = { heading: PropTypes.string };

TextForm.defaultProps = { heading: "Enter the text here" };
