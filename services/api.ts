import axios from 'axios';
import Cookie from 'js-cookie';
import ApiData from '../dtos/ApiData';

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

api.interceptors.response.use(res => {
  if(res.headers['access-token']) {
    const apiData: ApiData = {
      'access-token': res.headers['access-token'],
      client: res.headers.client,
      expiry: res.headers.expiry,
      'token-type': res.headers['token-type'],
      uid: res.headers.uid
    };

    api.defaults.headers.common['access-token'] = apiData['access-token'];
    api.defaults.headers.common['client'] = apiData.client;
    api.defaults.headers.common['expiry'] = apiData.expiry;
    api.defaults.headers.common['token-type'] = apiData['token-type'];
    api.defaults.headers.common['uid'] = apiData.uid;

    Cookie.set('@api-data', JSON.stringify(apiData));
  }

  return res;
})

api.interceptors.request.use(req => {
  if(req && req.url && req.url.includes('admin')) {
    const cookieData = Cookie.get('@api-data');
    if (cookieData) {
      const apiData: ApiData = JSON.parse(cookieData);
      req.headers['access-token'] = apiData['access-token'];
      req.headers['client'] = apiData.client;
      req.headers['expiry'] = apiData.expiry;
      req.headers['token-type'] = apiData['token-type'];
      req.headers['uid'] = apiData.uid;
    } else {
      throw new Error('API data not found in cookies');
    }

  }

  return req;
})

export default api;