'use client'
import styles from "./styles/page.module.scss";
import * as React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

export interface IDataElement {
  id:number,
  head:{},
  body:{},
}
export default function Home() {
  const [data, setData] = React.useState<IDataElement[][]>([]);
  const [loadingFoodPageState, setloadingFoodPageState] = React.useState(true);
  React.useEffect(() => {
    postData();
      
  },[])
    
  async function postData() {
    const responseFire = await require("./data/fire.json");
    const responseWater = await require("./data/water.json");
    const responseEarth = await require("./data/earth.json");
    const responseAir = await require("./data/air.json");
    setData([responseFire, responseWater, responseEarth, responseAir]);
   
  }

  
  
 
  return (
    <HashRouter>
        <div className={styles.wrapper}>
            <div className={styles.major_block_wrapper}>
             
              <div className={styles.major_block}>
                <div className={styles.container}>
                  
                </div>
                
              </div>
              <Header setloadingFoodPageState={setloadingFoodPageState}/>
            </div>
            <Main data={data} setloadingFoodPageState={setloadingFoodPageState} loadingFoodPageState={loadingFoodPageState}/>
            <Footer />
        

        </div>
    </HashRouter>
    
  );
}
