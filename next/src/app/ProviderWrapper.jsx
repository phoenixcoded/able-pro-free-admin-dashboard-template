'use client';
import PropTypes from 'prop-types';

// next
import { SessionProvider } from 'next-auth/react';

// project-imports
import { ConfigProvider } from 'contexts/ConfigContext';
import ScrollTop from 'components/ScrollTop';
import ThemeCustomization from '../../themes';

// ==============================|| PROVIDER WRAPPER ||============================== //

export default function ProviderWrapper({ children }) {
  return (
    <ConfigProvider>
      <ThemeCustomization>
        <ScrollTop>
          <SessionProvider refetchInterval={0}>{children}</SessionProvider>
        </ScrollTop>
      </ThemeCustomization>
    </ConfigProvider>
  );
}

ProviderWrapper.propTypes = { children: PropTypes.node };
