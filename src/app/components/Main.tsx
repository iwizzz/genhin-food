import * as React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Fire } from '../pages/Fire';
import { Water } from '../pages/Water';
import { Earth } from '../pages/Earth';
import { Air } from '../pages/Air';

export interface IMainProps {
}

export function Main (props: IMainProps) {
  return (
    <main>
      <Routes>
        <Route path='fire' element={<Fire/>}/>
        <Route path='water' element={<Water/>}/>
        <Route path='earth' element={<Earth/>}/>
        <Route path='air' element={<Air/>}/>
      </Routes>
    </main>
  );
}
