import React from "react";

import resumeSvg from "../../assets/resume.svg";
import resmSvg1 from "../../assets/green.jpg";
import resmSvg2 from "../../assets/purple.jpg";
import resmSvg3 from "../../assets/orange.png";


import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
        <div className={styles.new}>

      <div className={styles.child}>
             <button>
             <a href="https://wpm-resume-builder.herokuapp.com"><img className="image" width="100%" height="100%" src={resmSvg1} alt="Resume" /></a>
             </button>
      </div>
  
      <div className={styles.child}>
            <button>
            <a href="https://wpm-resume-builder.herokuapp.com"><img className="image" width="100%" height="100%" src={resmSvg2} alt="Resume"/></a>
            </button>
      </div>

      <div className={styles.child}>
            <button>
            <a href="https://wpm-resume-builder.herokuapp.com"><img className="image" width="100%" height="100%" src={resmSvg3} alt="Resume" /></a>
            </button>
      </div>

        </div>
    </div>
  );
}


/*<a href="https://wpm-resume-builder.herokuapp.com">
        <button >
            <img src="C:\Users\Admin\Downloads\minimalist-resume-template.png"></img>
        </button>
    </a>*/




export default Header;
