// ==============================|| OVERRIDES - TOOLTIP ||============================== //

export default function Tooltip(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.vars.palette.secondary.darker,
          color: theme.vars.palette.background.paper
        }
      }
    }
  };
}
