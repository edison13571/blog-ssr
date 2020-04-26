import {get} from '../plugins/axios'

export function getArticlesList (data, owner) {
  if (owner) {
    return get('api/articles/query', data)
  } else {
    return get('api/articles/list', data)
  }
}


export function getArticlesDetail (data) {
  return get('api/articles/detail', data)
}

export function getArticlesAddView (data) {
  return get('api/articles/views', data)
}

export function getArticlesContent (locationUrl) {
  return get(locationUrl)
}
