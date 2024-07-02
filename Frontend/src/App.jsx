// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './Home/Home'
import { Route,Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './component/Signup';
import Publish from './Publish/Publish';
import Books from './component/Books';
import Contacts from './Contacts/Contacts';
import Abouts from './Abouts/Abouts'




export default function App() {
  return (
    <>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='course' element={<Courses/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='Contacts' element={<Contacts/>}/>
    <Route path='Abouts' element={<Abouts />}/>
    <Route path='Publish' element={<Publish/>}/>
    <Route path='books' element={<Books />}/>


  </Routes>
  </div>
    </>
  )
}

