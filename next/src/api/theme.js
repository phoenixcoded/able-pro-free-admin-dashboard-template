import { useMemo } from 'react';

// third-party
import useSWR, { mutate } from 'swr';

// project-imports
import config from 'config';

const initialState = config;

// ==============================|| API - THEME CONFIG ||============================== //

export const endpoints = {
  key: 'api/config',
  master: 'master'
};

export function useGetThemeConfig() {
  const { data, isLoading } = useSWR(endpoints.key + endpoints.master, () => initialState, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const memoizedValue = useMemo(
    () => ({
      themeConfig: data,
      themeConfigLoading: isLoading
    }),
    [data, isLoading]
  );

  return memoizedValue;
}

export function handlerThemeMode(mode) {
  // to update local state based on key
  mutate(
    endpoints.key + endpoints.master,
    (currentConfig) => {
      return { ...currentConfig, mode };
    },
    false
  );
}

export function handlerThemeDirection(themeDirection) {
  // to update local state based on key
  mutate(
    endpoints.key + endpoints.master,
    (currentConfig) => {
      return { ...currentConfig, themeDirection };
    },
    false
  );
}

export function handlerPresetColor(presetColor) {
  // to update local state based on key
  mutate(
    endpoints.key + endpoints.master,
    (currentConfig) => {
      return { ...currentConfig, presetColor };
    },
    false
  );
}

export function handlerThemeContrast(themeContrast) {
  // to update local state based on key
  mutate(
    endpoints.key + endpoints.master,
    (currentConfig) => {
      return { ...currentConfig, themeContrast };
    },
    false
  );
}

export function handlerMiniDrawer(miniDrawer) {
  // to update local state based on key
  mutate(
    endpoints.key + endpoints.master,
    (currentConfig) => {
      return { ...currentConfig, miniDrawer };
    },
    false
  );
}
