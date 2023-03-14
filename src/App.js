import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import logo from './logo.svg';
import Home from './Pages/Home';


function App() {
  return (
    <>

          <Router>
              <Routes>
                  
                <Route path="/" element={<Home />} />

              </Routes>
          </Router>
      
    </>
  );
}

export default App;
