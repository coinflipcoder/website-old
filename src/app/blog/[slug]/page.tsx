import { getAllSlugs, getPostBySlug } from '@/utils/loadPosts'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  // Fetch all available slugs
  const slugs = getAllSlugs()

  // Return an array of params objects
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params

  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { data, content } = post

  return (
    <div>
      <h1 className='text-2xl'>{data.title}</h1>
      <p className='mb-6 text-sm text-gray-400'>{new Date(data.date).toLocaleDateString()}</p>

      {/* Horizontal separator */}
      <hr className='my-6 border-t-2 border-neutral-500' />

      <article className='prose prose-sm max-w-none prose-invert'>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </div>
  )
}
