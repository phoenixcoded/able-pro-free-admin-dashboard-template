// ==============================|| OVERRIDES - TOGGLE BUTTON ||============================== //

export default function ToggleButton(theme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '& svg': {
            width: 18,
            height: 18
          },
          '&.Mui-disabled': {
            borderColor: theme.vars.palette.divider,
            color: theme.vars.palette.text.disabled
          },
          '&:focus-visible': {
            outline: `2px solid ${theme.vars.palette.secondary.dark}`,
            outlineOffset: 2
          }
        }
      }
    }
  };
}
