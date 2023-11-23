
import './App.css';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName'
function App() {
 const nome = "maria"
  
  
  return (
    <div  className="App" >
      <h1>testando css</h1>
     <SayMyName nome='mateus'/>
     <SayMyName nome='Cauã'/>
     <SayMyName nome = {nome }/>
     <Pessoa nome="caua" idade = '17' profissao = 'programador' foto = 'https://via.placeholder.com/150'/>
    </div>
  );
}

export default App;
