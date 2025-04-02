'use client';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from "./style.module.scss";



export interface IHeaderProps {
  setloadingFoodPageState: Function,
  mainBgSrcSet: Function,
}

export function Header (props: IHeaderProps) {

  async function pushSrc(src:string) {
    await window.localStorage.setItem("bgSrc", src); 
  }
  return (
    <header className={styles.header}>
      <div className={styles.container}>
      
        <nav className={styles.nav}>
          <Link to="/" onClick={() => {
            pushSrc("./elementPyroBG.mp4");

            props.setloadingFoodPageState("loading");
            props.mainBgSrcSet("./elementPyroBG.mp4");
          }}> 
            <img className={styles.icon_fire} src="/elementPyro.svg" alt="" />
          </Link>
          <Link to="/water" onClick={() => 
            {
              pushSrc("./elementHydroBG.mp4");

              props.setloadingFoodPageState("loading");
              props.mainBgSrcSet("./elementHydroBG.mp4");
            }
          }>
            <img className={styles.icon_water} src="/elementHydro.svg" alt="" />
          </Link>
          <Link to="/earth" onClick={() => 
            {
              pushSrc("./elementGeoBG.mp4");

              props.setloadingFoodPageState("loading");
              props.mainBgSrcSet("./elementGeoBG.mp4");
            }
          }>
            <img className={styles.icon_earth} src="/elementGeo.svg" alt="" />
          </Link>
          <Link to="/air" onClick={() => 
            {
              pushSrc("./elementAnemoBG.mp4");

              props.setloadingFoodPageState("loading");
              props.mainBgSrcSet("./elementAnemoBG.mp4");
            }
          }>
            <img className={styles.icon_air} src="/elementAnemo.svg" alt="" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
