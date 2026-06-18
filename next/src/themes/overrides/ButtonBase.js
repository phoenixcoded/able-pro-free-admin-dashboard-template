// ==============================|| OVERRIDES - BUTTON BASE ||============================== //

export default function ButtonBase(theme) {
  return {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false
      },
      styleOverrides: {
        root: {
          '&.MuiButtonBase-root:disabled': {
            cursor: 'default',
            pointerEvents: 'none',
            '&:hover': {
              borderColor: theme.vars.palette.secondary.light,
              color: theme.vars.palette.secondary.light
            },
            '&:focus-visible': {
              outline: 'none'
            },
            '&:after': {
              boxShadow: 'none'
            }
          }
        }
      }
    }
  };
}
