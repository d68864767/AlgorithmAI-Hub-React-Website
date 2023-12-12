import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AlgorithmCatalog from './components/AlgorithmCatalog';
import InteractivePlayground from './components/InteractivePlayground';
import EducationalResources from './components/EducationalResources';
import UserProfiles from './components/UserProfiles';
import CommunityCollaboration from './components/CommunityCollaboration';
import Home from './pages/Home';
import AlgorithmList from './pages/AlgorithmList';
import AlgorithmDetails from './pages/AlgorithmDetails';
import Playground from './pages/Playground';
import Documentation from './pages/Documentation';
import Profile from './pages/Profile';
import Community from './pages/Community';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/algorithm-catalog" component={AlgorithmCatalog} />
        <Route exact path="/interactive-playground" component={InteractivePlayground} />
        <Route exact path="/educational-resources" component={EducationalResources} />
        <Route exact path="/user-profiles" component={UserProfiles} />
        <Route exact path="/community-collaboration" component={CommunityCollaboration} />
        <Route exact path="/algorithm-list" component={AlgorithmList} />
        <Route exact path="/algorithm-details/:id" component={AlgorithmDetails} />
        <Route exact path="/playground" component={Playground} />
        <Route exact path="/documentation" component={Documentation} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/community" component={Community} />
      </Switch>
    </>
  );
};

export default App;
