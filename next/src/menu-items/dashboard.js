// assets
import { Home3, HomeTrendUp } from '@wandersonalwes/iconsax-react';

// icons
const icons = {
  navigation: Home3,
  dashboard: HomeTrendUp
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'navigation',
  icon: icons.navigation,
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.dashboard,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
