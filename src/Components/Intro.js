import React from 'react'
import image from '../Assets/coding.jpg'
import image2 from '../Assets/beautiful-stories.jpg'
import image3 from '../Assets/designed-for-everyone.jpg'
import classes from '../Components/Intro.module.css'


function Intro() {
    return (
        <div>

            <div className={classes.tile1}>
                <div className={classes.about}>
                    <h1 className={classes.h1}>WELCOME!</h1>
                    <br />
                    <p className={classes.p}>Daily Blog Articles About HTML, CSS, JS, React.Js, Redux, Firebase and more. Register Today to never miss a post</p>
                </div>
                <img src={image} className={classes.img} alt="" />
            </div>
            
            <div className={classes.tile1}>
            <img src={image2} className={classes.img} alt="" />
                <div className={classes.diff}>
                    <h1 className={classes.h1}>BEAUTIFUL STORIES</h1>
                    <br />
                    <p className={classes.p}>Write your beautiful story That Inspires all the readers just by sitting at Home.</p>
                </div>
            </div>

            <div className={classes.tile1}>
                <div className={classes.about}>
                    <h1 className={classes.h1d}>DESIGNED FOR EVERYONE</h1>
                    <br />
                    <p className={classes.p}>Write Whatever on your mind. Share with the whole world And get Paid.</p>
                </div>
                <img src={image3} className={classes.img} alt="" />
            </div>

        </div>
    )
}

export default Intro
