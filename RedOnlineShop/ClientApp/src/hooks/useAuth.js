import { useNavigate } from 'react-router-dom';

import { api } from '../utils/api';

const useAuth = () => {

  const navigate = useNavigate()

  const login = async data => {
    localStorage.setItem("accessToken", data.id);
    localStorage.setItem("firstName", data.firstName);
    api.setAccessToken(data.id);

  };

  const logout = () => {
    localStorage.clear();
    api.setAccessToken(null);
    navigate('/');
    navigate(0)
  };

  return {
    login,
    logout,
  };
};

export {useAuth};
