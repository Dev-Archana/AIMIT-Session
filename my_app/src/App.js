
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TextToLowerToUpper from './components/TextToLowerToUpper';
// import NewComponent from './components/NewComponent';
import UseEffect from './components/UseEffect';
import CountingWithClass from './components/CountingWithClass';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
