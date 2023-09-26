
import { Outlet } from 'react-router-dom';
import './App.css'
import CondicionalRender from './components/ConditionalRender';
import Counter from './components/Counter';
import HelloWorld from './components/HelloWorld'
import LifeCycle from './components/LifeCycle';
import NameAndAge from './components/NameAndAge';
import ToDoList from './components/ToDoList';
import Header from './layouts/Header';

function App() {


  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App;
