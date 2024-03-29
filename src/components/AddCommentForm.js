import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import useUser from '../hooks/useUser';
const AddCommentForm = ({ articleName,  }) => {
    const {user}=useUser();
    
  
    const [commentText, setCommentText] = useState('');
    // console.log("USer",user.email)

 
    const addComment = async () => {
        const response = await axios.post(`http://localhost:8000/api/articles/${articleName}/comments`, {
            postedBy: user && user.email,
            text: commentText,
        });
        if(response.status===200){
            
            
           
            setCommentText('');
            toast.success("Comment Added Succefully");
        }
    }

    return (
        <div id="add-comment-form">
            <h3>Add a Comment By {user && user.email}</h3>
            {/* <label>
                Name:
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text" />
            </label> */}
            <label>
                Comment:
                <textarea
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                    rows="4"
                    cols="50" />
            </label>
            <button onClick={addComment}>Add Comment</button>
        </div>
    )
}

export default AddCommentForm;