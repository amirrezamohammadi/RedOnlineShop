import axios from 'axios';

class Api {
  token = null;
  init() {
    
    axios.defaults.baseURL = 'http://localhost:44403/api';
    
    axios.interceptors.request.use(async req => {
      if (this.token) {
        req.headers.Authorization = 'Bearer ' + this.token;
      }
      return req;
    });

    axios.interceptors.response.use(
      async response => {
        let accessToken = localStorage.getItem('accessToken');
        this.token = accessToken;
        return response.data;
      },
      error => {
        return Promise.reject(error);
      },
    );
  }
  instanse() {
    return axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: 'Bearer ' + this.token,
      },
    });
  }

  setAccessToken = token => {
    this.token = token;
  };
}

const api = new Api();

export {api};
