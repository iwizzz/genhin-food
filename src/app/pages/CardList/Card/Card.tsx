import * as React from 'react';
import styles from "./style.module.scss";
import { Link } from 'react-router-dom';
import { IDataElement } from '@/app/page';


export interface ICardProps {
  data: IDataElement
  setFoodData: Function, 
  setloadingFoodPageState: Function, 
}


export function Card (props: ICardProps) {
  const path:string = "/food-page";

  async function loadFoodPageData () {
    await props.setFoodData(props.data);
    
    props.setloadingFoodPageState("done");
  }
  
  return (
    <Link to="/food-page" onClick={loadFoodPageData}>
      <li className={styles.list_item} style={{backgroundImage: `url(${props.data.head.bgImage})`}}>
        <div className={styles.food_img} style={{backgroundImage: `url(${props.data.head.foodBg})`}}>
          <img src={props.data.head.foodImage} alt="" />
        </div>
      </li>
    </Link>
  );
}
