// assets
import { Book1, Security, SecurityUser } from '@wandersonalwes/iconsax-react';

// icons
const icons = { page: Book1, authentication: Security, register: SecurityUser };

// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'authentication',
  type: 'group',
  icon: icons.page,
  children: [
    {
      id: 'login',
      title: 'Login',
      type: 'item',
      url: '/login',
      icon: icons.authentication,
      target: true
    },
    {
      id: 'register',
      title: 'Register',
      type: 'item',
      url: '/register',
      icon: icons.register,
      target: true
    }
  ]
};

export default pages;
