import React from 'react'
import { useState } from 'react'
import styles from '@/styles/Tabexample.module.css'

const Tabexample = () => {
    const [mainTabOne, setMainTabOne]=useState(false)
    const [mainTabTwo, setMainTabTwo]=useState(false)
    const [commonData, setCommonData]=useState("")

    const handleMainTabOneClick=()=>{
        setMainTabOne(!mainTabOne)
        setMainTabTwo(false)
        setCommonData("")
    }

    const handleMainTabTwoClick=()=>{
        setMainTabTwo(!mainTabTwo)
        setMainTabOne(false)
        setCommonData("")
    }


    const handleSubTabOneClick= async ()=>{
        const res= await fetch("http://localhost:5000/fetch/asr/results")
        const {data}=await res.json()
        setCommonData(data)
    }
    const handleSubTabTwoClick= async ()=>{
        // setCommonData("This text will come from the API which sends the processed data and the attention scores from the depression detection model")

       /*  mistyrose #FFE4E1
         salmon #FA8072 
        darksalmon #E9967A
         tomato	#FF6347
        orangered #FF4500 
        crimson	#DC143C	
        firebrick	#B22222
        darkred	#8B0000 */

        const rangesAndColors={'0.0-0.02': "#FFE4E1",'0.02-0.04': "#FA8072",'0.04-0.06': "#E9967A","0.06-0.08" :"#FF6347","0.08-0.10" :"#FF4500","0.10-0.15" :"#DC143C","0.15-0.20" :"#B22222","0.20-0.30" :"#8B0000"}

    
        const res = await fetch('http://127.0.0.1:5000/decode');
        const { data } = await res.json();

        function getColor(weight) {
            for (const [range, color] of Object.entries(rangesAndColors)) {
            const [min, max] = range.split("-").map(parseFloat);
            if (weight >= min && weight <= max) {
                return color }
            }
            return null; // no range matched
        }
        
        const words = data.map((item)=>{
            return item[0]
        });

        const finalWords = words.map((word, i) => (
            <>
            <span key={i} style={{backgroundColor: getColor(data[i][1]),overflowWrap: 'break-word'}}>
                {word}
            </span>
            &nbsp;
            </>
            ));

        console.log("finalwords= ", finalWords);
        setCommonData(finalWords)
        
    }

    const handleSubTabThreeClick= ()=>{
        setCommonData(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam sapiente saepe ad dolor nam excepturi, quas vero quos sequi facere laudantium cum eos atque obcaecati asperiores voluptatum fugit pariatur similique.")}

    const handleSubTabFourClick=  ()=>{
        setCommonData("Highlighted words based on the attention scores weight change, addiction, sleeplessness, depression.")
    }


  return (
    <section className={styles.body}>
    <label className={styles.label} htmlFor="main-tab-1" onClick={handleMainTabOneClick}>FETCH DATA</label>
    <label  className={styles.label} htmlFor="main-tab-2"onClick={handleMainTabTwoClick}>CLASSIFICATION</label>

   { mainTabOne && <div>
     <label htmlFor="sub-tab-1" className={styles.subTab1} onClick={handleSubTabOneClick}>RAW DATA</label>
     <label htmlFor="sub-tab-2" className={styles.subTab2} onClick={handleSubTabTwoClick}>HIGHLIGHTED</label>
    </div>}

    { mainTabTwo && <div>
     <label htmlFor="sub-tab-1" className={styles.subTab1} onClick={handleSubTabThreeClick}>INTRODUCTION</label>
     <label htmlFor="sub-tab-2" className={styles.subTab2 } onClick={handleSubTabFourClick}>DEPRESSION</label>
    </div>}
    { <div className={styles.tabContent}>{commonData}</div>}
    </section>
  )
}

export default Tabexample;
