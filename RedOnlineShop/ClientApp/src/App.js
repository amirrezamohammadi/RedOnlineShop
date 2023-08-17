import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';


import './custom.css';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import { AuthProvider, useAuth } from './hooks/useAuth';
import { api } from './utils/api';

api.init();
const client = new QueryClient({defaultOptions: {queries: {retry: 2}}});

const App =()=> {

 
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
      <QueryClientProvider client={client}>
        <AuthProvider>
          <Layout>
            <Routes>
              {appRoutes.map((route, index) => {
                const { element, ...rest } = route;
                return <Route key={index} {...rest} element={element} />;
              })}
            </Routes>
        </Layout>
        </AuthProvider>
      </QueryClientProvider>
    );
  
}

export default App
