// assets
import { Book1, Security, SecurityUser } from 'iconsax-reactjs';

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
      url: '/login',
      target: true
    },
    {
      id: 'register',
      title: 'Register',
      type: 'item',
      icon: icons.register,
      url: '/register',
      target: true
    }
  ]
};

export default pages;
