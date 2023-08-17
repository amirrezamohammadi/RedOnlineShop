import axios from 'axios';

class Api {
  token = null;
  init() {
    
    axios.defaults.baseURL = 'https://beautiverse.ca/api/beautiverse/client';
    
    axios.interceptors.request.use(async req => {
      if (this.token) {
        req.headers.Authorization = 'Bearer ' + this.token;
      }
      return req;
    });

    axios.interceptors.response.use(
      async response => {
        let accessToken = localStorage.getItem();
        this.token = accessToken.password;

        return response.data;
      },
      error => {
        this.handleError(error);
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

  handleError = err => {
    const {response, config} = err;
    const originalRequest = config;
    if (response.status === 403 && !originalRequest._retry) {
      console.log('403');
    } 
  };
  setAccessToken = token => {
    this.token = token;
  };
}

const api = new Api();

export {api};
