import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute.jsx'
import CreatePost from './pages/CreatePost.jsx'
import UpdatePost from './pages/UpdatePost.jsx'
import PostPage from './pages/PostPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />}/>
          <Route path='/update-post/:postId' element={<UpdatePost />}/>
        </Route>
        <Route path='/post/:postSlug' element={<PostPage />}/>
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}
