import React, {useRef, useState} from 'react'
import classes from './Login.module.css'
import image from '../Assets/background.png'
import {projectAuth} from '../Firebase/Config'
import {useHistory} from 'react-router-dom'

function Signup() {

    const displayNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const history =  useHistory()
    const [error, seterror] = useState(null)
    

    const handleSignin = async (e) => {
     e.preventDefault();
     const user = {
         displayName: displayNameRef.current.value,
         email: emailRef.current.value,
         password: passwordRef.current.value
     }

     try {
         seterror(null)
         const res = await projectAuth.createUserWithEmailAndPassword(user.email, user.password)
         await res.user.updateProfile({displayName: user.displayName})   
         history.push('/login')    
     } catch (err) {
         seterror(err.message)
         
     }
     
    }

    return (
        <React.Fragment>
        <div className={classes.authPage}>
             <form className={classes.form} onSubmit={handleSignin}>
                 <h1>Welcome To React Blogs</h1>
                 <input className={classes.input} ref={displayNameRef} type="text" placeholder="Enter your Username" required name="" id="" />
                 <input className={classes.input} ref={emailRef} type="email" required placeholder="Enter your Email" />
                 <input className={classes.input} ref={passwordRef} type="password" required placeholder="Enter your Password" />
                {error && <div className={classes.error}>{error}</div>}
                <button>SIGN UP</button>
             </form>

             <img src={image} className={classes.img} alt="" />
        </div>
        </React.Fragment>
    )
}

export default Signup
