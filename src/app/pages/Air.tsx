import * as React from 'react';
import { CardList } from './CardList/CardList';
import styles from "./style.module.scss";
import { IElementProps } from '../components/Main/Main';



export interface IAirProps extends IElementProps{
  
}

export function Air (props: IAirProps) {
  return (
    <div>
      <div className={styles.container}>
        <CardList data={props.data} setFoodData={props.setFoodData} setloadingFoodPageState={props.setloadingFoodPageState}/>
      </div>
    </div>
  );
}
