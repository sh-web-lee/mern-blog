import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/project' element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
  )
}