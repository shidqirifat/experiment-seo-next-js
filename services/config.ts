import * as https from 'https'
import axios from 'axios'

const baseURL = `${process.env.NEXT_PUBLIC_BASE_API}/api/v1`

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
})

const http = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  httpsAgent,
})

export { http, baseURL }
