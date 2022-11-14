import { useLoaderData } from '@remix-run/react'
import { getGuitars } from '~/models/guitars.server'
import { getPosts } from '~/models/posts.server'
import { getCourse } from '~/models/courses.server'
import { GuitarsList } from '~/components/GuitarsList'
import { PostsList } from '~/components/PostsList'
import { Course } from '~/components/Course'
import styleCourse from '~/styles/course.css'
import stylePosts from '~/styles/blog.css'
import styleGuitars from '~/styles/guitars.css'

export function meta(){
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styleCourse
    },
    {
      rel: 'stylesheet',
      href: stylePosts
    },
    {
      rel: 'stylesheet',
      href: styleGuitars
    }
  ]
}

export async function loader(){

  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse()
  ]);

  return {
    guitars: guitars.data,
    posts: posts.data,
    course: course.data
  }
}

const Index = () => {

  const {guitars, posts, course} = useLoaderData();

  return (
    <>
        <main>
          <GuitarsList guitars={guitars}/>
          <Course course={course.attributes}/>
          <PostsList posts={posts}/>
        </main>
    </>
  )
}

export default Index