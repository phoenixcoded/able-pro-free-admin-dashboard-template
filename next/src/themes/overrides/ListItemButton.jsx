// ==============================|| OVERRIDES - LIST ITEM BUTTON ||============================== //

export default function ListItemButton(theme) {
  return {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.vars.palette.secondary.main,
          borderRadius: 8,
          marginTop: 2,
          marginBottom: 2,
          '&.Mui-selected': {
            color: theme.vars.palette.primary.main,
            '& .MuiListItemIcon-root': {
              color: theme.vars.palette.primary.main
            }
          }
        }
      }
    }
  };
}
