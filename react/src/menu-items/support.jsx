// assets
import { DocumentCode2, I24Support } from 'iconsax-react';

// icons
const icons = {
  samplePage: DocumentCode2,
  documentation: I24Support
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const support = {
  id: 'other',
  title: 'Others',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.samplePage
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://phoenixcoded.gitbook.io/able-pro/v/react/',
      icon: icons.documentation,
      external: true,
      target: true
    }
  ]
};

export default support;
