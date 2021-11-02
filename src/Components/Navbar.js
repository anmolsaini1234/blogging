import React from 'react'
import classes from './Navbar.module.css'
import {Link} from 'react-router-dom'

function Navbar(props) {

    
    return (
        <nav className={classes.nav}>
            <div className={classes.logo}>React Blogs</div>
            <div className={classes.links}>
                <ul className={classes.ul}>
                   <Link to='/' className={classes.link}><li className={classes.li}>HOME</li></Link>
                   {props.user && <Link to='/allblogs' className={classes.link}><li>BLOGS</li></Link>}
                   {props.user && <Link to='/addblog' className={classes.link}><li>CREATE YOUR BLOG</li></Link>}
                   {props.user && <Link to='/likedblog' className={classes.link}><li>LIKED BLOGS</li></Link>}
                    <Link to='/login' className={classes.link}><li>LOGIN/REGISTER</li></Link>
                    {props.user && <div className={classes.userLink}>{props.user.displayName && <span>{props.user.displayName.charAt(0)}</span>}</div>}
                    {!props.user && <div className={classes.userLink}><span>?</span></div>}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
