import React from 'react'
import styles from './Qwe.module.css'

const Qwe = () => {
    var style1={
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        height:"50px",
        background:"black",
        color:"white",
    }
    var style2={
        marginRight:"10px",
        textDecoration:"none",
        color:"white",
 }
  return (
    <div style={style1}>
        <h4 >LOGOBAKERY</h4>
        <div>
        <a style={style2} href="./Services.html">Services</a>
        <a style={style2} href="./Project.html">Projects</a>
        <a style={style2}href="./About.html">About</a>
        </div>
        
        <button className={styles.q1}>Contact</button>
    </div>
  )
}

export default Qwe