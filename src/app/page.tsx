'use client'
import styles from "./styles/page.module.scss";
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <HashRouter>
        <div className={styles.wrapper}>
            <div className={styles.major_block_wrapper}>
             
              <div className={styles.major_block}>
                <div className={styles.container}>
                  
                </div>
                
              </div>
              <Header/>
            </div>
            <Main />
            <Footer />
        

        </div>
    </HashRouter>
    
  );
}
