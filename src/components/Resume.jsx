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
        <div class="flex justify-around">
        <div class="relative inline-flex group">
            <div
                class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <button onClick={onPDFButtonClick} title="Get quote now"
                class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button">Download PDF
            </button>
        </div>

        <div class="relative inline-flex  group">
            <div
                class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <button onClick={onDocxButtonClick} title="Get quote now"
                class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button">Download<br /> Document
            </button>
        </div>
    </div>
    <div class="flex justify-around">
        <div class="relative inline-flex group">
            <div
                class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <button onClick={onPDFButtonClick} title="Get quote now"
                class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button">View Resume
            </button>
        </div>
    </div>
</>
    )
}
export default Resume;