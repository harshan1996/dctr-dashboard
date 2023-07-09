import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import AnalyticsIcon from '@mui/icons-material/Analytics';
import HistoryIcon from '@mui/icons-material/History';
import sample from '@/pictures/sample.jpg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DEVELOPMENT_LINK from "@/config.js"

const Sidebar = () => {

  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('re');

  const Patients=["Patient1","Patient2","Patient3"]

  const toggleDropdown = () => {
    setExpanded(!expanded);
  };

  return (

    <div className={styles.Sidebar}>
      <Image src={sample} alt="Picture" className={styles.mainPicture}></Image>
      <ul className={styles.sidebar} >
        <li className={styles.liSidebar}>
          <Link href="/" className={styles.myLink}>
          <HomeIcon className={styles.myIcon} /> 
            <span style={{marginTop:"5px"}}>Home</span>
          </Link>
        </li>

        <li className={styles.liSidebar}>
          <Link href="#" className={styles.myLink}>
          <DashboardIcon className={styles.myIcon} /> 
            <span style={{marginTop:"5px"}}>Dashboard</span>
          </Link>
        </li>

        <li>
          <div className={styles.dropdown} onClick={toggleDropdown}>
            <Link href="#" className={styles.myLink}>
            <PeopleIcon className={styles.myIcon} /> 
            <span className={styles.patients}>Patients</span>

            </Link>
            <i
              className={`${styles.icon} ${expanded ? styles.expanded : ""}`}
            ></i>
          </div>
          <ul
            className={styles.submenu}
            style={{ display: expanded ? "block" : "none" ,maxHeight: "120px", overflowY: "auto"}}
          >
            <div><button className={styles.newButton} onClick={()=>router.push(`${DEVELOPMENT_LINK}/patient`)}>+ New</button></div><br />
            {Patients.map((patientName)=>{
              return(
                  <li key={patientName}>
                  <Link href={`${DEVELOPMENT_LINK}/patient/${patientName}`} className={styles.mySubLink}>
                    {patientName}
                  </Link>
                  </li>
                  
                  )})}
          
            
          </ul>
        </li>


        <li className={styles.liSidebar}>
          <Link href="#" className={styles.myLink}>
          <EventNoteIcon className={styles.myIcon} /> 
            <span style={{marginTop:"5px"}}>Schedule</span>
          </Link>
        </li>

        <li className={styles.liSidebar}>
          <Link href="#" className={styles.myLink}>
          <HistoryIcon className={styles.myIcon} /> 
            <span style={{marginTop:"5px"}}>History</span>
          </Link>
        </li>
        
        <li className={styles.liSidebar}>
          <Link href="#" className={styles.myLink}>
          <AnalyticsIcon className={styles.myIcon} /> 
            <span style={{marginTop:"5px"}}>Reports</span>
          </Link>
        </li>

        <li className={styles.liSidebar}>
          <Link href="#" className={styles.myLink} >
          <SettingsIcon className={styles.myIcon} /> 
            <span style={{marginTop:"5px"}}>Settings</span>
          </Link>
        </li>

        <li className={styles.liSidebar}>
          <Link href="/" className={styles.myLink} >
          <SettingsIcon className={styles.myIcon} /> 
            <span style={{marginTop:"5px"}}>Log out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
