// ==============================|| OVERRIDES - BUTTON BASE ||============================== //

export default function ButtonBase() {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false
      },
      styleOverrides: {
        root: {
          '&.MuiButtonBase-root:disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'auto'
          }
        }
      }
    }
  };
}
