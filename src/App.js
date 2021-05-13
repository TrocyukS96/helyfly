import Header from './components/blocks/header/Header';
import './App.scss';
import Main from './components/blocks/main/Main';
import Fotoset from './components/blocks/fotoset/Fotoset';
import Fotos from './components/blocks/fotos/Fotos';
import About from './components/blocks/about/About';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Fotoset/>
      <Fotos/>
      <About/>
    </div>
  );
}

export default App;
