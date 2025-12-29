// ==============================|| OVERRIDES - LIST ITEM ICON ||============================== //

export default function ListItemIcon(theme) {
  return {
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 28,
          color: theme.vars.palette.secondary.main
        }
      }
    }
  };
}
