import { dateFormatter } from '~/utils/helpers'

export function Course({course}){

    const {title, content, image, createdAt, updatedAt} = course;
    const created = dateFormatter(createdAt);
    const updated = dateFormatter(updatedAt);

    return(
        <section className="course">
            
            <style jsx="true">{`    
                .course{
                    padding: 10rem;
                    background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${image.data.attributes.formats.medium.url});
                    background-size: cover;
                    background-position: center center;
                    width: 100%;
                    }
                `}
            </style>
            
            <div className="course__content container">
                <h2 className='course__title heading'>{title}</h2>
                <p className='course__content'>{content}</p>
            </div>
        </section>
    )
}