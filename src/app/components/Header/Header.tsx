import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from "./style.module.scss";
import Image from 'next/image'


export interface IHeaderProps {
  setloadingFoodPageState: Function,
}

export function Header (props: IHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
      
        <nav className={styles.nav}>
          <Link to="/" onClick={() => props.setloadingFoodPageState(true)}> 
            <img className={styles.icon_fire} src="/elementPyro.svg" alt="" />
          </Link>
          <Link to="water" onClick={() => props.setloadingFoodPageState(true)}>
            <img className={styles.icon_water} src="/elementHydro.svg" alt="" />
          </Link>
          <Link to="earth" onClick={() => props.setloadingFoodPageState(true)}>
            <img className={styles.icon_earth} src="/elementGeo.svg" alt="" />
          </Link>
          <Link to="air" onClick={() => props.setloadingFoodPageState(true)}>
            <img className={styles.icon_air} src="/elementAmeno.svg" alt="" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
