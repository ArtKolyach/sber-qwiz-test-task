import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios, { type AxiosHeaders, type AxiosRequestConfig, type AxiosError } from 'axios'

export const axiosBaseQuery = (
  { baseUrl }: { baseUrl: string } = { baseUrl: '' }
): BaseQueryFn<{
  url: string
  method: AxiosRequestConfig['method']
  data?: AxiosRequestConfig['data']
  params?: AxiosRequestConfig['params']
  headers?: AxiosHeaders
}, unknown, unknown> =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers
      })
      return { data: result.data }
    } catch (axiosError) {
      const error = axiosError as AxiosError
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data
        }
      }
    }
  }
