import React, {useState, useEffect} from 'react'
import classes from './Blog.module.css'
import image from '../Assets/coding.jpg'
import {projectFirestore} from '../Firebase/Config'
import {Link} from 'react-router-dom'


function Blogs() {



    const [results, setresults] = useState();
    let array = []

    useEffect(() => {
        projectFirestore.collection('blogs').where('like', '==', true).onSnapshot(snap => {
            snap.docs.forEach(doc => {
             array.push({id: doc.id, data: doc.data()})
            })
            setresults(array)
        })
    })

 

    return (
        <div className={classes.blogContainer}>
          {results && results.map(res => {
              return (
                  
                  <div key={res.id} className={classes.blog}>
                <img src={res.data.image} className={classes.image} alt="" />

                    <div className={classes.intro}  key={res.id}>
                <div className="left">
               <Link className={classes.link} to={`/details/${res.id}`}><h2>{res.data.title}</h2></Link>
                <p>Posted By {res.data.displayName}</p>
                </div>

               
                </div>
            </div>
              )
          })}

          {results && results.length === 0 && <h1>Oops There Are No Liked Blogs</h1>}
            
        </div>
    )
}

export default Blogs
