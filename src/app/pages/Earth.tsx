import * as React from 'react';
import { IElementProps } from '../components/Main/Main';
import { CardList } from './CardList/CardList';
import styles from "./style.module.scss";

export interface IEarthProps extends IElementProps{
  
}

export function Earth (props: IEarthProps) {
  return (
    <div>
     <div className={styles.container}>
        <CardList data={props.data} setFoodData={props.setFoodData} setloadingFoodPageState={props.setloadingFoodPageState}/>       
      </div>
    </div>
  );
}
