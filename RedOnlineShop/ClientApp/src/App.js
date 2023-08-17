import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './custom.css';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import { AuthProvider, useAuth } from './hooks/useAuth';

const App =()=> {

//  const {state} =useAuth()
  const [appRoutes,setAppRoutes] = useState(AppRoutes)

  // useEffect(() => {
  //   if (state.isLogin){
  //     let tempRoutes = appRoutes;
  //     tempRoutes.filter(item=> item.path!== '/signup' || item.path!== '/forget-password' || item.path!=='/login');
  //     setAppRoutes(tempRoutes)
  //   }
  //   else{
  //     setAppRoutes(AppRoutes)
  //   }
  // }, [state.isLogin])
  

    return (
      <Layout>
        <AuthProvider>
          <Routes>
            {appRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
        </AuthProvider>
      </Layout>
    );
  
}

export default App
