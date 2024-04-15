// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** hasRemainFrequency GET /api/aiFrequency/get */
export async function hasRemainFrequencyUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseAiFrequencyVO_>('/api/aiFrequency/get', {
    method: 'GET',
    ...(options || {}),
  });
}
