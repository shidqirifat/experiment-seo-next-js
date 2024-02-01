import { AxiosResponse } from 'axios'

import { http } from './config'

type Post = {
  title: string
  thumbnail: string
}

type Logo = {
  logo: string
}

const getPostBySlug = async (slug: string): Promise<Post> => {
  const response: AxiosResponse<Post> = await http.get(`/public/posts/${slug}`)

  return response.data
}

const getLogo = async (): Promise<Logo> => {
  const areaId = process.env.NEXT_PUBLIC_AREA_UUID
  const response: AxiosResponse<Logo> = await http.get(
    `/public/logo?area=${areaId}`
  )

  return response.data
}

export { getPostBySlug, getLogo }
