import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;

  return (
    <div className='post-border'>
      <PostHeader username={post.username} thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img alt='post thumbnail' className='post-image' src={post.imageUrl} />
      </div>

      {/* Is LikeSection getting all the props it needs to work correctly? 
      I'M PRETTY SURE BUT LIKE-*/}

      <LikeSection likePost={() => likePost(post.id)} numberOfLikes = {post.likes}/>
      {/* Comments also wants its props! 
      STILL CAN'T FIND the source of the error so I'm gonna move on to the comments component and *pray* man*/}
      <Comments />
    </div>
  );
};

export default Post;
