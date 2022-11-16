import React from 'react';
const routes = [
  {
    path: '/',
    component:React.lazy(() => import('./TestEffect')),
  },
  {
    path: '/Modal',
    component:React.lazy(() => import('./real-world/Modal')),
    // 如果要求严格路径
    isExact: true,
    meta:{
      title: 'Modal'
    }
  },
  {
    path: '/Header',
    component: React.lazy(() => import('./real-world/Header')),
    meta:{
      title: 'Header'
    }
  }
]

export default routes;