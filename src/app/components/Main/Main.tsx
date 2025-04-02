'use client';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Fire } from '../../pages/Fire';
import { Water } from '../../pages/Water';
import { Earth } from '../../pages/Earth';
import { Air } from '../../pages/Air';
import styles from "./style.module.scss";
import { IDataElement } from '@/app/page';
import { FoodPage } from '../../pages/FoodPage/FoodPage';

export interface IElementProps {
  setFoodData: Function,
  setloadingFoodPageState: Function,
 
  data: IDataElement[],
}

export interface IMainProps {
  setloadingFoodPageState: Function,
  loadingFoodPageState: string,
  data: IDataElement[][],
}

export function Main (props: IMainProps) {
  const [foodPageData, setFoodPageData] = React.useState<IDataElement>({} as IDataElement);
  
  async function pullPageData() {
    const data = await window.localStorage.getItem("foodPageData");
    await setFoodPageData(JSON.parse(data as string));
    props.setloadingFoodPageState("done");
  }
  //Пофиксить некоректное сохранение в буфер, обновление статуса просходит раньше прогрузки
  React.useEffect(() => { 
    pullPageData();
  }, [])


 

  return (
    <main className={styles.main}>
      <Routes>
        <Route path='/' element={<Fire data={props.data[0]} setFoodData={setFoodPageData} setloadingFoodPageState={props.setloadingFoodPageState}/>} />
        <Route path='/water' element={<Water data={props.data[1]} setFoodData={setFoodPageData} setloadingFoodPageState={props.setloadingFoodPageState}/>} />
        <Route path='/earth' element={<Earth data={props.data[2]} setFoodData={setFoodPageData} setloadingFoodPageState={props.setloadingFoodPageState}/>} />
        <Route path='/air' element={<Air data={props.data[3]}setFoodData={setFoodPageData} setloadingFoodPageState={props.setloadingFoodPageState}/>} />

        <Route path='/food-page' element={<FoodPage data={foodPageData} loadingFoodPageState={props.loadingFoodPageState} setloadingFoodPageState={props.setloadingFoodPageState}/>}/>
      </Routes>
    </main>
  );
}
