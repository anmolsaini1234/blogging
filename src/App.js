import React, {useEffect, useState} from 'react'
import Home from './Pages/Home'
import Login from './Components/Login'
import Blogs from './Pages/Blogs'
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'
import AddBlog from './Pages/AddBlog'
import BlogDetails from './Pages/BlogDetails'
import Comments from './Components/Comments'
import LikedBlogs from './Pages/LikedBlogs'
import {Route, Switch} from 'react-router-dom'
import {projectAuth} from './Firebase/Config'

function App() {
  const [user, setuser] = useState(null)

  useEffect(() => {
   projectAuth.onAuthStateChanged(user => {
     setuser(user)
   })
  }, []);


  return (
  <React.Fragment>
  
  <Navbar user={user}/>
  
  <Switch>
 
   <Route exact path='/'>
     <Home />
   </Route>

   <Route path='/login'>
    <Login />
   </Route>


   <Route path='/signup'>
    <Signup />
   </Route>




   <Route path='/allblogs'>
    <Blogs />
   </Route>


   <Route path='/addblog'>
    <AddBlog user={user}/>
   </Route>

   <Route path='/details/:id'>
     <BlogDetails user={user}/>
   </Route>

   <Route path='/comments/:id'>
     <Comments user={user}/>
   </Route>

   <Route path='/likedblog'>
     <LikedBlogs />
   </Route>
 
  </Switch>

  </React.Fragment>
  )
}

export default App
