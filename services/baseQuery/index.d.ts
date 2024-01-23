import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import { type AxiosHeaders, type AxiosRequestConfig } from 'axios';
export declare const axiosBaseQuery: ({ baseUrl }?: {
    baseUrl: string;
}) => BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
    headers?: AxiosHeaders;
}, unknown, unknown>;
