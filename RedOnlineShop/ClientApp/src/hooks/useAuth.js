import axios from 'axios';
import {useQuery} from 'react-query';
import React, {createContext, useContext, useMemo, useState} from 'react';

import { api } from '../utils/api';

const AuthCtx = createContext({});

const AuthProvider = ({children}) => {
  const [state, setState] = useState({
    isLogin: false,
    isLoading: true,
  });

  const value = useMemo(() => {
    return {state, setState};
  }, [state, setState]);

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
};

const useAuth = () => {
  const {state, setState} = useContext(AuthCtx);
  const {data: userInfo, refetch: refetchUser} = useQuery(
    'user',
    () => axios.get('https://beautiverse.ca/api/beautiverse/user'),
    {
      onSuccess: () => {
        setState({...state, isLoading: false, isLogin: true});
      },
      enabled: state.isLogin,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );
  
  const login = async token => {
    const username = 'accessToken';
    localStorage.setItem(username, token);
    api.setAccessToken(token);
    setState({...state, isLoading: true, isLogin: true});
  };

  const checkUser = async () => {
    try {
      const credentials = localStorage.getItem();
      if (credentials && credentials?.username === 'accessToken') {
        api.setAccessToken(credentials.password);
        setState({...state, isLoading: true, isLogin: true});
      } else {
        setState({...state, isLoading: false, isLogin: false});
      }
    } catch (error) {
      setState({...state, isLoading: false, isLogin: false});
      console.log("localStorage couldn't be accessed!", error);
    }
  };

  const logout = () => {
    localStorage.clear();
    setState({...state, isLoading: false, isLogin: false});
    api.setAccessToken(null);
  };
  return {
    state,
    login,
    checkUser,
    userInfo,
    refetchUser,
    logout,
  };
};

export {useAuth, AuthProvider};