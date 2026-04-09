import PropTypes from 'prop-types';

// third-party
import 'simplebar-react/dist/simplebar.min.css';

// project-imports
import ProviderWrapper from './ProviderWrapper';

export const metadata = {
  title: 'Able Pro Material UI Next JS Dashboard Template',
  description:
    'Able Pro React Admin Template, built with Material UI, React, and React Router, offers a modern UI, seamless performance, and powerful customization for any web application.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script defer src="https://fomo.codedthemes.com/pixel/CDkpF1sQ8Tt5wpMZgqRvKpQiUhpWE3bc"></script>
      </head>
      <body>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}

RootLayout.propTypes = { children: PropTypes.node };
