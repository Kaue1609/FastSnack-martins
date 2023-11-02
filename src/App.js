import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NavBar from './components/navbar'
import ItemListContainer from './components/itemListContainer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<ItemListContainer />}/>
        </Routes>
      </BrowserRouter>

      <ItemListContainer />
    </div>
  );
}

export default App;
