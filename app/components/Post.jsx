import { Link } from '@remix-run/react'
import { dateFormatter } from '~/utils/helpers'

export function Post({post}){

    const {title, url, publishedAt, content, image} = post.attributes;
    const date = dateFormatter(publishedAt);

    return(
        <article className='post'>
            <img
                src={image.data.attributes.formats.small.url}
                alt={`${title} blog Image`}
                className="post__image image"
            />
            <div className='post__content'>
                <h3>{title}</h3>
                <p className='post__date'>{date}</p>
                <p className='post__text'>{content}</p>
                <button className="post_button button">
                <Link to={`/posts/${url}`}>
                    Read more
                </Link>
                </button>
            </div>
        </article>
    )
}