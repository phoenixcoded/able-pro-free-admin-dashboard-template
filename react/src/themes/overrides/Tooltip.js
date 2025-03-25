// ==============================|| OVERRIDES - TOOLTIP ||============================== //

export default function Tooltip(theme) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.secondary.darker,
          color: theme.palette.background.paper
        }
      }
    }
  };
}
