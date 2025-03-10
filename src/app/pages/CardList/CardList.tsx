import * as React from 'react';
import styles from "./style.module.scss";
import { Card } from './Card/Card';
import { IElementProps } from '@/app/components/Main/Main';



export interface ICardListProps extends IElementProps {
    
}

export function CardList (props: ICardListProps) {

  return (
    <ul className={styles.list}>
      {props.data?.length != 0 ?
        props.data?.map((element) => {
          return(
            <Card key={element.id} data={element} setFoodData={props.setFoodData} setloadingFoodPageState={props.setloadingFoodPageState}/>
            )
          })
        :
          <></>
      }
    </ul>
  );
}
