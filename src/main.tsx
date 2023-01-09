import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home'
import { About } from './components/About'
import './styles/global.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Post } from './components/Post';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route 
          path="/"
          element={<Home />}
          />
        <Route 
          path='/about'
          element={<About />}
          />
        <Route 
          path='/posts'
          element={<Post />}
          />
        <Route 
          path='/posts/:id'
          element={<Post />}
          />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
