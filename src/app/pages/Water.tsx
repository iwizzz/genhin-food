'use client';
import * as React from 'react';
import { IElementProps } from '../components/Main/Main';
import { CardList } from './CardList/CardList';
import styles from "./style.module.scss";

export interface IWaterProps extends IElementProps{
  
}

export function Water (props: IWaterProps) {
  return (
    <div>
      <div className={styles.container}>
        <CardList data={props.data} setFoodData={props.setFoodData} setloadingFoodPageState={props.setloadingFoodPageState} />       
      </div>
    </div>
  );
}
