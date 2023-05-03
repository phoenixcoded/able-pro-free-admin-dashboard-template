// ==============================|| OVERRIDES - LOADING BUTTON ||============================== //

export default function LoadingButton() {
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          '& svg': {
            width: 18,
            height: 18
          },
          paddingLeft: 16,
          paddingRight: 16,
          '&.MuiLoadingButton-loading': {
            opacity: 0.6,
            textShadow: 'none',
            '& .MuiLoadingButton-loadingIndicatorStart': {
              left: 12
            },
            '& .MuiLoadingButton-loadingIndicatorEnd': {
              right: 12
            }
          }
        }
      }
    }
  };
}
