import { getPosts } from '~/models/posts.server'
import { useLoaderData } from '@remix-run/react' 
import { Post } from '~/components/Post'
import styles from '~/styles/blog.css'

export async function loader(){
  const posts = await getPosts();
  return posts;
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

const Blog = () => {

    const {data} = useLoaderData();
 
    return (
      <main className="container">
          <h3 className="heading">Blog</h3>
          <div className="blog">
          {data.map( post => (
            <Post key={post.id} post={post}/>
          ))}
          </div>
      </main>
    )
  }
  
  export default Blog