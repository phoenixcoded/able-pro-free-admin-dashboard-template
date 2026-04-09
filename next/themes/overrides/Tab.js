// ==============================|| OVERRIDES - TAB ||============================== //

export default function Tab(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 46,
          color: theme.vars.palette.text.primary,
          borderRadius: 4,
          '&:hover': {
            color: theme.vars.palette.primary.main
          },
          '&:focus-visible': {
            borderRadius: 4,
            outline: `2px solid ${theme.vars.palette.secondary.dark}`,
            outlineOffset: -3
          },
          '& svg.MuiTab-iconWrapper': {
            width: 18,
            height: 18
          }
        }
      }
    }
  };
}
