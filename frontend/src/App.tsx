import  Index  from './pages/index';
import  Home  from './pages/home';
import  NotFound  from './pages/notfound';
import  Users from './pages/users';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Users/:name" element={<Users/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
