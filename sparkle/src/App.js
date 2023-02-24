import logo from './logo.svg';
import './App.css';
import BoughtPage from './BoughtPage/BoughtPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BuyIdea from './BuyIdea/BuyIdea';
import SearchPage from './Search/SearchPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<p>main page</p>}></Route>
            <Route path="/BuyIdea" element={<BuyIdea></BuyIdea>}></Route>
            <Route path="/BoughtPage" element={ <BoughtPage></BoughtPage>}></Route>
            <Route path="/Search" element={ <SearchPage></SearchPage>}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
