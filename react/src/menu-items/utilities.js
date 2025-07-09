// assets
import { Home3, Text, Colorfilter, Barcode } from 'iconsax-reactjs';

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
      url: '/typography',
      icon: icons.typography
    },
    {
      id: 'color',
      title: 'Color',
      type: 'item',
      url: '/color',
      icon: icons.color
    },
    {
      id: 'shadows',
      title: 'Shadows',
      type: 'item',
      url: '/shadows',
      icon: icons.shadow
    }
  ]
};

export default components;
