'use client';
import * as React from 'react';
import styles from "./style.module.scss";
import { IDataElement } from '@/app/page';

export interface IFoodPageProps {
  data: IDataElement,
  loadingFoodPageState: string,
  setloadingFoodPageState: Function,
}



export function FoodPage (props: IFoodPageProps) {
  // React.useEffect(() => {
  //   try {
  //     Object.keys(props.data?.body as {}).forEach(key => props.data?.body[key])
  //   } catch (error) {
  //     props.setloadingFoodPageState("error");
  //   }
  // }, [])
 

  function switchRender() {
    const dataHead = props.data.head;
    const dataBody = props.data.body;

    switch(props.loadingFoodPageState){
      case "done": return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                  <div className={styles.text_container}>
                    <h2 className={styles.title_h2}>{dataBody?.title}</h2>
                    {dataBody?.structure !== undefined && dataBody.structure.length > 0 ?
                      <div className={styles.structure}>
                        <h3 className={styles.title_h3}>Вам понадобится:</h3>
                        <ul className={styles.list_circle}>
                          {dataBody.structure.map((item, index) => {
                            return(
                              <li key={index}>{item}</li>
                            )
                          })}
                        </ul>
                      </div>
                    :
                      <h3 className={styles.title_h3}>Ингредиенты этого блюда потерялись {":("}</h3>
                    }
                    {dataBody?.cookingMethod !== undefined && dataBody.cookingMethod.length > 0 ?
                      <div className={styles.cookingMethod}>
                        <h3 className={styles.title_h3}>Шаги приготовления:</h3>
                        <ul className={styles.list_num}>
                          {dataBody.cookingMethod.map((item, index) => {
                            return (
                              <li key={index}>{item}</li>
                            )
                          })}
                        </ul>
                      </div>
                    :
                      <h3 className={styles.title_h3}>Рецепт этого блюда потерялся {":("}</h3>
                    }
                  </div>
                  <div className={styles.food_card}>
                    <div className={styles.img_container}>
                      <p>{dataBody.title}</p>
                      <img src={dataHead.foodImage} alt="" className={styles.food_img} />

                    </div>
                    <p className={styles.card_description}>{dataBody.cardDescription}</p>
                    <ul className={styles.card_list}>
                      <li>Эффект</li>
                      <li>{dataBody.effectDescription}</li>
                      <li>Тип</li>
                      <li>{dataBody.foodType}</li>
                    </ul>
                  </div>
                  {dataBody.realFoodPicUrlsList === undefined || dataBody.realFoodPicUrlsList.length === 0 ?
                    <></>
                    :
                    <ul className={styles.real_food_photo_list}>
                      {dataBody.realFoodPicUrlsList.map((item, index) => {
                        return (
                          <li key={index}>
                            <img src={item} alt="" />
                          </li>
                        )
                      })}
                    </ul>
                  }
                </div>
            </div>
        </div>
      );
      case "loading": return (
        <p className={styles.load}>Loading</p>
      )
      default: return (
        <p>ERROR404</p>
      )
    }
  }

  return (
    <div>
        {switchRender()}   
    </div>
  );
}
