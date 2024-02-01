import Head from 'next/head'

type MetaProps = {
  title: string
  url: string
  image: string
}

export default function Meta({ title, image, url }: MetaProps) {
  return (
    <Head>
      <meta data-rh="true" property="og:card" content="summary" />
      <meta data-rh="true" property="og:site" content="bkkbn" />
      <meta data-rh="true" property="og:creator" content="bkkbn" />
      <meta data-rh="true" name="title" content={title} />
      <meta data-rh="true" name="description" content={title} />
      <meta data-rh="true" name="keywords" content={title} />
      <meta data-rh="true" name="news_keywords" content={title} />
      <meta data-rh="true" name="twitter:card" content="summary_large_image" />
      <meta data-rh="true" name="twitter:site" content="bkkbn" />
      <meta data-rh="true" name="twitter:title" content={title} />
      <meta data-rh="true" name="twitter:creator" content="bkkbn" />
      <meta data-rh="true" name="twitter:description" content={title} />
      <meta data-rh="true" name="twitter:image" content={image} />
      <meta data-rh="true" property="og:site_name" content="bkkbn" />
      <meta data-rh="true" property="og:image" content={image} />
      <meta data-rh="true" property="og:image:width" content="600" />
      <meta data-rh="true" property="og:image:height" content="315" />
      <meta data-rh="true" property="og:locale" content="id_ID" />
      <meta data-rh="true" property="og:title" content={title} />
      <meta data-rh="true" property="og:description" content={title} />
      <meta data-rh="true" property="og:url" content={url} />
      <link data-rh="true" rel="canonical" href={url} />
      <link
        data-rh="true"
        rel="alternate"
        media="only screen and (max-width: 640px)"
        href={url}
      />
      <link data-rh="true" rel="amphtml" href={url} />
      <link data-rh="true" rel="preload" as="image" href={image} />
      <title>BKKBN</title>
    </Head>
  )
}
