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
                <h2 className={styles.title}>{dataBody.title}</h2>
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
