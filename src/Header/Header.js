import React from "react";
import ODT from "../icons/ODT-icon.png";
import PDF from "../icons/pdf-icon.png";
import RTF from "../icons/rtf-icon.png";
import TXT from "../icons/txt-icon.png";
import DOCX from "../icons/Word-icon.png";
import pdfResume from "../copies/Copy_of_Hoover_Resume.pdf";
import odtResume from "../copies/Copy_of_Hoover_Resume.odt";
import rtfResume from "../copies/Copy_of_Hoover_Resume.rtf";
import txtResume from "../copies/Copy_of_Hoover_Resume.txt";
import docxResume from "../copies/Copy_of_Hoover_Resume.docx";
import "./Header.scss";

function Header() {
  return (
    <header>
      <p>DOWNLOADS</p>
      <nav className="icons-row">
        <a href={pdfResume} target="_blank" rel="noopener noreferrer">
          <img src={PDF} alt="PDF" />
          <a href={pdfResume} download>
            Download PDF
          </a>
        </a>
        <a href={odtResume} target="_blank" rel="noopener noreferrer">
          <img src={ODT} alt="PDF" />
          <a href={odtResume} download>
            Download ODT
          </a>
        </a>
        <a href={rtfResume} target="_blank" rel="noopener noreferrer">
          <img src={RTF} alt="PDF" />
          <a href={rtfResume} download>
            Download RTF
          </a>
        </a>
        <a href={txtResume} target="_blank" rel="noopener noreferrer">
          <img src={TXT} alt="PDF" />
          <a href={txtResume} download>
            Download TXT
          </a>
        </a>
        <a href={docxResume} target="_blank" rel="noopener noreferrer">
          <img src={DOCX} alt="PDF" />
          <a href={docxResume} download>
            Download DOCX
          </a>
        </a>
      </nav>
    </header>
  );
}

export default Header;
