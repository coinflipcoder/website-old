import Link from 'next/link'
import { getAllPosts } from '@/utils/loadPosts'

export default function BlogPage() {
  const posts = getAllPosts()

  const sortedPosts = posts.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime() // Latest first
  })

  return (
    <div>
      <h1 className='mb-6 text-2xl'>Blog</h1>
      <ul className='space-y-4'>
        {sortedPosts.map((post) => (
          <li key={post.slug} className='rounded-md bg-neutral-800 p-4 shadow-md'>
            <h2 className='text-xl font-semibold'>{post.title}</h2>
            <p className='text-sm text-gray-400'>{new Date(post.date).toLocaleDateString()}</p>
            <Link href={`/blog/${post.slug}`} className='text-indigo-500 transition-colors hover:text-indigo-600'>
              Read More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
