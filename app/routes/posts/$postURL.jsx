import styles from '~/styles/blog.css'
import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import { dateFormatter } from '~/utils/helpers';

export async function loader({params}){
    const post = await getPost(params.postURL);

    if (post.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Post not found'
        });
    }

    return post
}

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

const BlogURL = () => {

    const {data} = useLoaderData();
    const post = data[0].attributes;
    const {title, url, publishedAt, content, image} = post;
    const date = dateFormatter(publishedAt);

    return (
        <article className='container singlePost'>
            <img src={image.data.attributes.formats.small.url}/>
            <div className='singlePost__content'>
                <h1>{title}</h1>
                <p>{date}</p>
                <p>{content}</p>
            </div>
        </article>
    )
}

export default BlogURL 