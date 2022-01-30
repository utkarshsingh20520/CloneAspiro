import React from "react";
import styles from "./Subscribe.module.css";
import circle1 from "../../Images/circle1.png"
import circle2 from "../../Images/circle2.png"
import Text from "./Text";
import Email from "./Email";
import { FaLocationArrow } from "react-icons/fa";


const Subscribe=()=>{
    return(
        <div className={styles.Subscribes}>
        <div className={styles.Subscribe}>
            <div className={styles.design}>
                <FaLocationArrow className={styles.icon}/>
            </div>
            <Text/>
            <img src={circle1} alt="circle1" className={styles.circle1}/>
            <img src={circle2} alt="circle2" className={styles.circle2}/>
            <Email/>
            
        </div>
        </div>
    );
}

export default Subscribe;