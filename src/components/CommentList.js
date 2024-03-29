import React from 'react'

function CommentList({comments}) {
    console.log("All comments ",comments)
    return (
        <>
            <h3>Comments:</h3>
            {
                comments.map((comment, index) => (
                    <div className='comment' key={index}>
                        <h4> {comment?.postedBy} </h4>
                        <p> {comment?.text} </p>
                    </div>
                ))
            }
        </>
      )
}

export default CommentList