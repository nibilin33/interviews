import React from 'react';
const routes = [
  {
    path: '/',
    component: React.lazy(() => import('./TestEffect')),
  },
  {
    path: '/Modal',
    component: React.lazy(() => import('./real-world/Modal')),
    // 如果要求严格路径
    isExact: true,
    meta: {
      title: 'Modal'
    }
  },
  {
    path: '/Header',
    component: React.lazy(() => import('./real-world/Header')),
    meta: {
      title: 'Header'
    }
  },
  {
    path: '/Input',
    component: React.lazy(() => import('./real-world/FocusableInput'))
  },
  {
    path: '/Message',
    component: React.lazy(() => import('./real-world/ToggleMessage'))
  }, {
    path: '/TextInput',
    component: React.lazy(() => import('./real-world/TextInput'))
  },{
    path: '/TodoList',
    component: React.lazy(() => import('./real-world/TodoList'))
  },{
    path: '/Username',
    component: React.lazy(() => import('./real-world/Username'))
  },{
    path: '/ImageGallery',
    component: React.lazy(() => import('./real-world/ImageGallery'))
  },{
    path: '/GroceryApp',
    component: React.lazy(() => import('./real-world/GroceryApp'))
  },{
    path: '/AutoComplete',
    component: React.lazy(() => import('./real-world/AutoComplete'))
  },{
    path: '/Feed',
    component: React.lazy(() => import('./real-world/feed/Feed'))
  }
]

export default routes;