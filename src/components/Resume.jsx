import React from 'react';
import PDF from '../assets/Katherine_Alex_Bensley_Resume.pdf';

function Resume() {
    const onPDFButtonClick = () => {
        window.open(PDF);
    };
    const onDocxButtonClick = () => {
        const docxUrl = "../assets/Katherine_Alex_Bensley_Resume.docx";
        const link = document.createElement("a");
        link.href = docxUrl;
        link.download = "Katherine_Alex_Bensley_Resume.docx"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <center>
                <h1>Welcome to Geeks for Geeks</h1>
                <button onClick={onPDFButtonClick}>
                    Download PDF
                </button>
            </center>
            <center>
                <h1>Welcome to Geeks for Geeks</h1>
                <button onClick={onDocxButtonClick}>
                    Download Docx
                </button>
            </center>
        </>
    )
}

export default Resume;