
import './App.css';

function App() {
  const name =new String ("caua")
  const newname = name.toLocaleUpperCase()
  const soma = (a,b) => {
    return(a+b)
  }
  const img = 'https://via.placeholder.com/150'
  return (
    <div  className="App" >
     <h1>ola react</h1>
     <p>
     ola tudo bem,{newname} certo?
      soma: {soma(9,3)}
     </p>
     <img src={img}/>
    </div>
  );
}

export default App;
