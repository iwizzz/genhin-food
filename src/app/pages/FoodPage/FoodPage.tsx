import * as React from 'react';
import styles from "./style.module.scss";

export interface IFoodPageProps {
    loadingFoodPageState: boolean,
    setloadingFoodPageState: Function,
}

export function FoodPage (props: IFoodPageProps) {
  return (
    <div>
        {props.loadingFoodPageState ? 
        <p className={styles.load}>Loading</p>
        :
        <div>
            <div className={styles.container}></div>
        </div>
        }   
    </div>
  );
}
