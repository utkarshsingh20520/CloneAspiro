import React from "react";
import styles from "./Email.module.css";
import { FiMail } from "react-icons/fi";

const Email=()=>{
    return(
       <div className={styles.Email}>
          <label className={styles.label}>
             <FiMail className={styles.icon}/>
             <h2 className={styles.text}>Your email</h2>
          </label>
          <input type="email" className={styles.input}/>
          <button className={styles.button}>Subscribe</button>
       </div>
    );
}

export default Email;