import { use } from 'react';

// project-imports
import { ConfigContext } from 'contexts/ConfigContext';

// ==============================|| HOOKS - CONFIG  ||============================== //

export default function useConfig() {
  const context = use(ConfigContext);

  if (!context) throw new Error('useSConfig must be use inside ConfigProvider');

  return context;
}
