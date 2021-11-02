import React, {useRef, useState} from 'react'
import classes from './Login.module.css'
import image from '../Assets/background.png'
import {Link} from  'react-router-dom'
import {projectAuth} from '../Firebase/Config'
import {useHistory} from 'react-router-dom'

function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const history = useHistory()
    const [error, seterror] = useState()

    const handleLogin = async (e) => {
        e.preventDefault()
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        try {
            seterror(null)
             await projectAuth.signInWithEmailAndPassword(user.email, user.password)
             history.push('/allblogs')

        } catch (err) {
            seterror(err.message)
            
        }
    }


    return (
        <React.Fragment>
        <div className={classes.authPage}>
             <form className={classes.form} onSubmit={handleLogin}>
                 <h1>Welcome To React Blogs</h1>
                 <input className={classes.input} ref={emailRef} type="email" required placeholder="Enter your Email" />
                 <input className={classes.input} ref={passwordRef} type="password" placeholder="Enter your"required placeholder="Enter your Password" />
                 <p>Dont Have An Account Yet? <Link to='/signup' className={classes.link}>Sign Up</Link> to get Started</p>
                 {error && <div className={classes.error}>{error}</div>}
                 <button>SIGN IN</button>
             </form>

             <img src={image} className={classes.img} alt="" />
        </div>
        </React.Fragment>
    )
}

export default Login
