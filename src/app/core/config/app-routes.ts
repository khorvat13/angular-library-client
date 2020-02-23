export const APP_ROUTES = {
  home: {
    path: '',
    dashboard: {
      path: ''
    },
    books: {
      path: 'books',
      reservations: {
        path: 'reservations'
      }
    }
  },
  login: {
    path: 'login',
  },
  signUp: {
    path: 'sign-up',
  },
  forgotPassword: {
    path: 'forgot-password',
  },
};

export const APP_ROUTE_SUFFIXES = {
  id: ':id',
  edit: '/edit',
};
