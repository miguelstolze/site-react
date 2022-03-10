import logo from './logo.svg';
import './App.css';
import HelloWorld from './componets/HelloWolrd';
import Events from './componets/events';
import Form from './componets/Form';


function App() {
  return (
    <div className="App">
     <HelloWorld/>
     <Events numero={1}/>
     <Events numero={2}/>
     <Form/>
    </div>
  );
}

export default App;
