import React, {useState, useEffect, useRef} from 'react'
import classes from './Comments.module.css'
import {projectFirestore} from '../Firebase/Config'
import {useParams} from 'react-router-dom'

function Comments(props) {


    const {id} = useParams()
    const commentRef = useRef()
    const [prevComments, setprevComments] = useState([])

    useEffect(() => {
     projectFirestore.collection('blogs').doc(id).onSnapshot(doc => {
        if (doc.data()) {
            setprevComments(doc.data().comments)
        } else {
            return
        }
     })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (props.user) {
            const newComment = {
                comment: commentRef.current.value,
                user: props.user.displayName
            };
            projectFirestore.collection('blogs').doc(id).update({
                comments: [...prevComments, newComment],
            })
        }
        
    }

    return (
       <React.Fragment>
           <div className={classes.chatBox}>
            {prevComments && prevComments.map(com => {
                return (
                    <div className={classes.singleComment}>
                        {props.user && <h3>Posted By {com.user}</h3>}
                        <p>{com.comment}</p>
                    </div>
                )
            })}
           </div>

           <form onSubmit={handleSubmit}  className={classes.form}>
               <input ref={commentRef} className={classes.input} type="text" required name="" required id="" placeholder="What are your Thoughts" />
               <button className={classes.button}>Submit Comment</button>
           </form>
       </React.Fragment>
    )
}

export default Comments
