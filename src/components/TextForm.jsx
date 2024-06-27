import React, { useState } from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("Input Your Text");
    // setText("Enter Your Text");

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const hanldeupchange = () => {
        // console.log("Btn click");
        let newText = (text.toUpperCase());
        setText(newText);
    }
    const hanldeInchange = () => {
        // console.log("Btn click");
        let newText = (text.toLowerCase());
        setText(newText);
    }

    const handleSpeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
    }

    const hanldeClear = () => {
        // console.log("Btn click");
        let newText = ("");
        setText(newText);
    }

    const handleCopy = () => {
        var newText = document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const handleRemoveSpace = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
    }
    return (
        <div>
            <div className='container my-5'>
                <h1>{props.heading}</h1>
                <textarea className={`form-control bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'}`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className='btn btn-outline-success my-3' disabled={text.length === 0} onClick={hanldeupchange}>convert to upper case</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-info my-3' disabled={text.length === 0} onClick={hanldeInchange}>convert to Lower case</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-primary my-3' disabled={text.length === 0} onClick={handleSpeak}>Speak</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-danger my-3' disabled={text.length === 0} onClick={hanldeClear}>clear</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type='btn' className='btn btn-outline-dark' disabled={text.length === 0} onClick={handleCopy}>Copy</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button type='btn' className='btn btn-outline-dark' disabled={text.length === 0} onClick={handleRemoveSpace}>Remove Extra Space</button>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className='container my-3'>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length}&nbsp;&nbsp;Words</p>
                <p>{text.length}&nbsp;&nbsp;Characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length}).length}&nbsp;&nbsp;Reading Time</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>

    )
}
