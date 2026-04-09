import { useMemo } from 'react';

// third-party
import useSWR from 'swr';

const initialState = {
  incomeCards: [
    { id: 'item01', label: 'Total Income', value: 23876, change: 76343 },
    { id: 'item02', label: 'Views', value: 23876, change: 76343, dotColor: 'error', isProfit: false },
    { id: 'item03', label: 'Total Rent', value: 23876, change: 76343, dotColor: 'warning' },
    { id: 'item04', label: 'Download', value: 23876, change: 76343, dotColor: 'success' }
  ],
  transactions: [
    {
      id: 1,
      title: 'Apple Inc.',
      subtitle: '#ABLE-PRO-T00232',
      avatar: 'AI',
      amount: '$210,000',
      change: '10.6%',
      isProfit: false,
      status: 'success'
    },
    {
      id: 2,
      title: 'Spotify Music',
      subtitle: '#ABLE-PRO-T00233',
      avatar: 'SM',
      amount: '-10,000',
      change: '30.6%',
      isProfit: true,
      status: 'success'
    },
    {
      id: 3,
      title: 'Medium',
      subtitle: '06:30 pm',
      avatar: 'MD',
      amount: '-26',
      change: '5%',
      isProfit: false,
      status: 'pending'
    },
    {
      id: 4,
      title: 'Uber',
      subtitle: '08:40 pm',
      avatar: 'U',
      amount: '+2,10,000',
      change: '10.6%',
      isProfit: true,
      status: 'success'
    },
    {
      id: 5,
      title: 'Ola Cabs',
      subtitle: '07:40 pm',
      avatar: 'OC',
      amount: '+2,10,000',
      change: '10.6%',
      isProfit: true,
      status: 'pending'
    }
  ],
  projectOverview: {
    totalTasks: '34,686',
    pendingTasks: '36,786',
    totalData: [5, 25, 3, 10, 4, 50, 0],
    pendingData: [0, 50, 4, 10, 3, 25, 5]
  },
  repeatCustomer: {
    rate: '5.44%',
    change: '+2.6%',
    data: [30, 60, 40, 70, 50, 90, 50, 55, 45, 60, 50, 65]
  }
};

// ==============================|| API - DASHBOARD ||============================== //

export const endpoints = {
  key: 'api/dashboard',
  master: 'master'
};

export function useGetDashboardMaster() {
  const { data, isLoading } = useSWR(endpoints.key + endpoints.master, () => initialState, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const memoizedValue = useMemo(
    () => ({
      dashboardMaster: data,
      dashboardMasterLoading: isLoading
    }),
    [data, isLoading]
  );

  return memoizedValue;
}
