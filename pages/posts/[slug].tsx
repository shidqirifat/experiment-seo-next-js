import { getLogo, getPostBySlug } from '@/services/api'

import Meta from '@/layouts/Meta'

type StatisProps = { params: { slug: string } }
type Post = {
  title: string
  thumbnail: string
}
type PostProps = { post: Post; url: string; logo: string }

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: StatisProps) {
  const post = await getPostBySlug(params.slug)
  const resLogo = await getLogo()

  const domain = process.env.NEXT_PUBLIC_AREA_DOMAIN
  return {
    props: {
      post,
      logo: resLogo.logo,
      url: `${domain}/posts/${params.slug}`,
    },
    revalidate: 60 * 60,
  }
}

export default function Page({ post, url, logo }: PostProps) {
  const image =
    'https://www.jktgadget.com/wp-content/uploads/2023/08/2.-Rekomendasi-4-Laptop-Terbaik-untuk-Desain-Arsitektur.jpg'

  return (
    <>
      <Meta title={post.title} image={image || logo} url={url} />
      <div className="space-y-5">{post.title}</div>
      <img src={post.thumbnail} alt={post.title} width={600} height={400} />
    </>
  )
}
