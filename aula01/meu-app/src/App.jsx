
import './App.css';
import Frase from './components/Frase';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName'
import List from './components/List';
function App() {
 const nome = "maria"
  
  
  return (
    <div  className="App" >
      <h1>testando css</h1>
      <Frase/>
      <List/>
      
    </div>
  );
}

export default App;
