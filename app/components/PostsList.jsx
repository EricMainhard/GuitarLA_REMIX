import { Post } from './Post'

export function PostsList({posts}){
    return(
        <>
            <h3 className="heading">Blog</h3>
        
            <div className="blog container">
            {
                posts.map( post => (
                    <Post key={post.id} post={post}/>
                ))
            }
            </div>
        </>
    )
}