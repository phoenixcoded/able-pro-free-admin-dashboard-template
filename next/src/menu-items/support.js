// assets
import { DocumentCode2, I24Support } from '@wandersonalwes/iconsax-react';

// icons
const icons = {
  samplePage: DocumentCode2,
  documentation: I24Support
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const support = {
  id: 'other',
  title: 'others',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample-page',
      type: 'item',
      url: '/sample-page',
      icon: icons.samplePage
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://phoenixcoded.gitbook.io/able-pro',
      icon: icons.documentation,
      external: true,
      target: true
    }
  ]
};

export default support;
