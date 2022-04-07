import React from 'react'

import Comment from './Comment'
   
const Commentlist = ({ comments = [] }) => {
  return (
    <div>
     {comments.map((p, i) => (
 <React.Fragment key={'comment-' + i} >
 <Comment  username="John Doe" status="commented 2 minutes ago" {...p} />

 </React.Fragment>
))}

    </div>
  )
}

export default Commentlist