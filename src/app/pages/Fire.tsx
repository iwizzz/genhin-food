
import { CardList } from './CardList/CardList';
import styles from "./style.module.scss";
import { IElementProps } from '../components/Main/Main';


export interface IFireProps extends IElementProps{

}



export function Fire (props: IFireProps) {
  
  return (
    <div>
      <div className={styles.container}>
        <CardList data={props.data} setFoodData={props.setFoodData} setloadingFoodPageState={props.setloadingFoodPageState}/>       
      </div>
    </div>
     
  );
}
