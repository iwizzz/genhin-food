'use client'
import styles from "./page.module.scss";
import { BrowserRouter } from 'react-router-dom';
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export default function Home() {
  return (
    <BrowserRouter>
        <div className={styles.wrapper}>
            <Header />
            <Main />
           
        

        </div>
    </BrowserRouter>
    
  );
}
