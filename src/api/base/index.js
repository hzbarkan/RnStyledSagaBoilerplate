/**
 * Functions by each method (get/post/put) goes here
 * Use these API functions in each sagas.
 */

import { store } from '../../redux'
import { handleParam, handleQuery } from './handler'
import httpInstance from './httpInstance'

export const request = (config) => {
  const { auth } = store.getState()
  config.headers = { 'Cache-Control': 'no-store', Authorization: `Bearer ${auth.token}` }

  // TODO:
  // - Check Network and Signal Strength
  // - Alert no internet connection

  return httpInstance.request(_.pick(config, ['url', 'method', 'data', 'headers']))
}

export const get = async (url, opts = {}) => {
  const options = {
    method: 'get',
    url: `${handleParam(url, opts.params)}${handleQuery(opts.query)}`,
    headers: opts.headers,
  }

  return request(options)
}

export const post = async (url, body, opts = {}) => {
  const options = {
    method: 'post',
    url: `${handleParam(url, opts.params)}${handleQuery(opts.query)}`,
    data: body,
    headers: opts.headers,
  }

  return request(options)
}

export const put = async (url, body, opts = {}) => {
  const options = {
    method: 'put',
    url: `${handleParam(url, opts.params)}/${body.id}${handleQuery(opts.query)}`,
    data: body,
    headers: opts.headers,
  }

  return request(options)
}
