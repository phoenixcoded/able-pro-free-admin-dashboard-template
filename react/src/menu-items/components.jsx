// type
import { Home3, Text, Colorfilter, Barcode } from 'iconsax-react';

// icons
const icons = {
  navigation: Home3,
  typography: Text,
  color: Colorfilter,
  shadow: Barcode
};

// ==============================|| MENU ITEMS - COMPONENTS ||============================== //

const components = {
  id: 'utilities',
  title: 'Utilities',
  icon: icons.navigation,
  type: 'group',
  children: [
    {
      id: 'typography',
      title: 'Typography',
      type: 'item',
      url: '/components-overview/typography',
      icon: icons.typography,
      breadcrumbs: false
    },
    {
      id: 'color',
      title: 'Color',
      type: 'item',
      url: '/components-overview/color',
      icon: icons.color,
      breadcrumbs: false
    },
    {
      id: 'shadows',
      title: 'Shadows',
      type: 'item',
      url: '/components-overview/shadows',
      icon: icons.shadow,
      breadcrumbs: false
    }
  ]
};

export default components;
