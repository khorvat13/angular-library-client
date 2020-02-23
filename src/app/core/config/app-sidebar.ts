import {APP_ROUTES} from './app-routes';

export interface SidebarItem {
  label: string;
  icon?: string;
  route?: string;
  subItems?: SidebarItem[];
}

export const APP_SIDEBAR: SidebarItem[] = [
  {
    label: 'Home',
    icon: 'home',
    route: APP_ROUTES.home.path
  },
  {
    label: 'Books',
    icon: 'book',
    subItems: [
      {
        label: 'List',
        route: APP_ROUTES.home.books.path
      },
      {
        label: 'Reservations',
        route: APP_ROUTES.home.books.path + '/' + APP_ROUTES.home.books.reservations.path
      }
    ]
  }
];
