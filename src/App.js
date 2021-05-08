import Header from './components/blocks/header/Header';
import './App.scss';
import Main from './components/blocks/main/Main';
import Fotoset from './components/blocks/fotoset/Fotoset';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Fotoset/>
    </div>
  );
}

export default App;
