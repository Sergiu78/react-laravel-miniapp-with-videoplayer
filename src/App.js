
import './App.css';
import { Route, Switch } from 'react-router-dom';
import General from './routes/General/General'
import Courses from './routes/Courses/Courses'
import News from './routes/News/News'
import Shop from './routes/Shop/Shop'
import ContextData from './context/Data/ContextData';
import StateData from './context/Data/StateData';
import React from 'react';
import ReducerData from './context/Data/ReducerData';
import Video from './routes/video/Video'

function App() {

const [stateData, dispatchData] = React.useReducer(ReducerData, StateData)

  return (
   <Switch>
     <ContextData.Provider value={{stateData, dispatchData}}>
        <Route path="/" exact component={General} />
        <Route path="/courses" component={Courses} />
        <Route path="/news" component={News} />
        <Route path="/shop" component={Shop} />
        <Route path="/video" component={Video} />
     </ContextData.Provider>
   </Switch>
  );
}

export default App;
