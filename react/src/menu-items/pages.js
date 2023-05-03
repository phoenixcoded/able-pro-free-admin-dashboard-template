// assets
import { Book1, Security, SecurityUser } from 'iconsax-react';

// icons
const icons = { page: Book1, authentication: Security, register: SecurityUser };

// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Authentication',
  type: 'group',
  icon: icons.page,
  children: [
    {
      id: 'login',
      title: 'Login',
      icon: icons.authentication,
      type: 'item',
      url: '/auth/login',
      target: true
    },
    {
      id: 'register',
      title: 'Register',
      type: 'item',
      icon: icons.register,
      url: '/auth/register',
      target: true
    }
  ]
};

export default pages;
