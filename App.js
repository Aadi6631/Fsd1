import { BrowserRouter, Routes, Route, Form } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import WorkoutDetails from './components/WorkoutDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route 
           path="/"
           element={<Home />}
           />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
