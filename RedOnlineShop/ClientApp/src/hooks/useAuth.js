import axios from 'axios';
import {useQuery} from 'react-query';
import React, {createContext, useContext, useMemo, useState} from 'react';

import { api } from '../utils/api';
import { Navigate, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate()
  const {state, setState} = useContext(AuthCtx);
  const {data: userInfo, refetch: refetchUser} = useQuery(
    'user',
    () => axios.get(`/getUserById/${localStorage.getItem('accessToken')}`),
    {
      onSuccess: () => {
        setState({...state, isLoading: false, isLogin: true});
      },
      enabled: state.isLogin,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );
  
  const login = async id => {
    const username = 'accessToken';

    localStorage.setItem(username, id);
    api.setAccessToken(id);
    setState({...state, isLoading: true, isLogin: true});
    navigate('/')
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
