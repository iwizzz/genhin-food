'use client'

import styles from "./styles/page.module.scss";
import * as React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";


export interface IDataElement {

  id:number,
  head:{
    foodImage: string,
    bgImage: string
  },
  body:{
    cookingMethod: string[],
    structure: string[],
    title: string,
    effectDescription: string,
    cardDescription: string,
    foodType: string,
    realFoodPicUrlsList: string[]
  },
  
}
export default function Home() {
  const [data, setData] = React.useState<IDataElement[][]>([]);
  const [loadingFoodPageState, setloadingFoodPageState] = React.useState("loading");
  const [mainBgSrc, mainBgSrcSet] = React.useState<string>("./elementPyroBG.mp4");
  React.useEffect(() => {
    postData();
    pullBgSrc();  
  },[])
    
  async function postData() {
    const responseFire = await require("./data/fire.json");
    const responseWater = await require("./data/water.json");
    const responseEarth = await require("./data/earth.json");
    const responseAir = await require("./data/air.json");
    setData([responseFire, responseWater, responseEarth, responseAir]);
   
  }

  async function pullBgSrc() {
    const src = await window.localStorage.getItem("bgSrc");
    mainBgSrcSet(src as string);
  }

  
  
 
  return (
    <html lang="en" className={styles.html}>
      <body>
        {
           <HashRouter>
           <div className={styles.wrapper} style={{cursor: "url(./genshinCursor.png), auto"}}>
             <div className={styles.bg_video}>
               <video src={mainBgSrc}  preload="auto" autoPlay muted loop playsInline>
               </video>
             </div>
             {/* Этот блок временно отключен, а может и не временно */}
               <div className={styles.major_block_wrapper}>
                
                 <div className={styles.major_block}>
                   <div className={styles.container}>
                     
                   </div>
                   
                 </div>
               </div>
               <Header setloadingFoodPageState={setloadingFoodPageState} mainBgSrcSet={mainBgSrcSet}/>
   
               <Main data={data} setloadingFoodPageState={setloadingFoodPageState} loadingFoodPageState={loadingFoodPageState} />
               <Footer />
           
   
           </div>
       </HashRouter>
        }
      </body>
    </html>
   
    
  );
}
