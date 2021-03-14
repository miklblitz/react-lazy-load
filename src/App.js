import React, {Suspense} from "react";
import { Route, Switch } from 'react-router-dom';
import Cars from './Components/Cars/Cars';
import './App.css';

const Trucs = React.lazy(() => {
  // emulating bad Internet connection with big data
  return new Promise(resolve => setTimeout(resolve, 3 * 1000)).then(
    () => import('./Components/Trucs/Trucs')
  );
});

const Planes = React.lazy(() => {
  // emulating bad Internet connection with big data
  return new Promise(resolve => setTimeout(resolve, 3 * 1000)).then(
    () => import('./Components/Planes/Planes')
  );
});

const Bikes = React.lazy(() => {
  // emulating bad Internet connection with big data
  return new Promise(resolve => setTimeout(resolve, 3 * 1000)).then(
    () => import('./Components/Bikes/Bikes')
  );
});

function App() {
  return (
    <div className={'load_wrapper'}>
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
