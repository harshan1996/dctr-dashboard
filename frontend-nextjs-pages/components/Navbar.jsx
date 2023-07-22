import React from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import personFace from '@/pictures/personFace.jpg';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from "react";

const Navbar = () => {
   const [mode, setMode]=useState("white");

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
      
      </div>
      <div className={styles.toggleMode} onClick={()=>setMode("black")}><LightModeIcon/></div>
      <div className={styles.name}> Hi, John Smith</div>
      <Image src={personFace} alt="Profile Picture" className={styles.profilePicture}></Image>
    
    </div>
  );
};

export default Navbar;
