import React, {Suspense} from "react";
import {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import lazyWithPreload from 'lazy-with-preload';

import Cars from './Components/Cars/Cars';
import './App.css';

const Trucs = lazyWithPreload(() => import('./Components/Trucs/Trucs'));
const Bikes = lazyWithPreload(() => import('./Components/Bikes/Bikes'));
const Planes = lazyWithPreload(() => import('./Components/Planes/Planes'));

const loadModules = () => {
  Trucs.preload();
  Bikes.preload();
  Planes.preload();
}

function App() {
  useEffect(() => {
  }, []);

  return (
    <div className={'load_wrapper'} onMouseOver={loadModules}>
      <Suspense fallback="">
        <Switch>
          <Route path="/" exact component={Cars} />
          <Route path="/trucs" component={Trucs} />
          <Route path="/bikes" component={Bikes} />
          <Route path="/planes" component={Planes}/>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
