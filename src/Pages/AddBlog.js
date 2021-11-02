import "./write.css";
import React, {useState, useRef} from 'react'
import {projectFirestore, projectStorage} from '../Firebase/Config'
import {useHistory} from 'react-router-dom'

export default function Write(props) {
   
    const [file, setfile] = useState()
    const [fileError, setfileError] = useState();
    const [url, seturl] = useState();
    const [pending, setpending] = useState(true);
    const titleRef = useRef();
    const storyRef = useRef();
    const history = useHistory();


    const types = ['image/png', 'image/jpeg', 'image/jpg', 'video/mp4']

    const handleFileChange = async (e) => {
      setpending(true)
      alert('Publish Button will appear after Image is Uploaded')
     let selected = e.target.files[0];
     if (selected && types.includes(selected.type) && props.user) {
       setfileError(null)
       setfile(selected)
       const storageRef = await projectStorage.ref(`${props.user.uid}`)
       const res = await storageRef.put(selected)
       const url = await res.ref.getDownloadURL()
       setpending(false)
     seturl(url)
     } else {
       setfileError('Unsupported format. Try to Upload images and videos')
       setfile(null)
     }
    }

    const handleSubmit = async (e) => {
      setfileError(null)
      e.preventDefault()
      if (file) {
        const data = {
          title: titleRef.current.value,
          story: storyRef.current.value,
          image: url,
          comments: [],
          displayName: props.user.displayName,
          like: false,
          id: props.user.uid,
        }
       await projectFirestore.collection('blogs').add(data)
       history.push('/allblogs')
      } else {
        setfileError('Unsupported format. Try to Upload images and videos')
      }
    }



  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>


          <input id="fileInput" type="file" required onChange={handleFileChange} />
          {fileError && <div className="error">{fileError}</div>}

          <input
          ref={titleRef}
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            required
          />

         

        </div>
        <div className="writeFormGroup">


          <textarea
          ref={storyRef}
            className="writeInput writeText"
            placeholder="Tell your story..."
            required
            type="text"
            autoFocus={true}
          />


        </div>
        {!pending && <button className="writeSubmit" type="submit">
          Publish
        </button>}
         

        
      </form>
    </div>
  );
}