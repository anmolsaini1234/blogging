import React, {useState, useEffect} from 'react'
import './BlogDetails.css'
import {useParams, useHistory} from 'react-router-dom'
import {projectFirestore, projectStorage} from '../Firebase/Config'
import Comments from '../Components/Comments'
import {Link} from 'react-router-dom'

export default function SinglePost(props) {


  const {id} = useParams()
  const [result, setresult] = useState();
  const [like, setlike] = useState(false)

 
  const history = useHistory()

  useEffect(() => {
    projectFirestore.collection('blogs').doc(id).onSnapshot(doc => {
      setresult(doc.data())
    })

   
    projectFirestore.collection('blogs').doc(id).update({
      like: like
    })
    console.log(like);
  }, [like])



  const handleDelete =  () => {
    history.push('/')
     projectFirestore.collection('blogs').doc(id).delete()
     projectStorage.ref(`${result.id}`).delete()
  }

  const handleLike =  () => {
   
    setlike(!like)
  }



  return (
   <React.Fragment>
       <div className="singlePost">
   {result &&  <div className="singlePostWrapper">
      <img
        className="singlePostImg"
        src={result.image}
        alt=""
      />
      <h1 className="singlePostTitle">
        {result.title}
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span>
          Author:
          <b className="singlePostAuthor">
           
              {result.displayName}
          
          </b>
        </span>
          <button className='button-to-delete' onClick={handleDelete}>Delete Blog</button>
          {!result.like && <button className='button-to-delete' onClick={handleLike}>Add to Liked Blogs</button>}
          {result.like && <button className='button-to-delete' onClick={handleLike}>Added</button>}
        <span>1 day ago</span>
      </div>
      <p className="singlePostDesc">
        {result.story}
        
      </p>
      
    </div>}
  </div>

  <Link className='nav-link' to={`/comments/${id}`}><h2>Read All Comments</h2></Link>

  
   </React.Fragment>
  );
}
