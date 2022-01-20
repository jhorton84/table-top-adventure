import './App.css';
import Nav from './Components/Nav/Nav';
import { Switch, Route } from 'react-router';
import Main from './Components/Screens/Main/Main';
import { default as L5R } from './Components/Screens/CharacterCreation/CharacterCreationScreen';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route exact path='/' component={Main} />
        {/* <Route exact path='/dnd' component={DnD} /> */}
        <Route exact path='/L5R' component={L5R} />
        {/* <Route exact path='/character-creation-:game' component={CharacterCreation} /> */}
        {/* <Route exact path='/character-creation-L5R/Family/:clan' component={Q2Family} /> */}
      </Switch>
    </div>
  );
}

export default App;
