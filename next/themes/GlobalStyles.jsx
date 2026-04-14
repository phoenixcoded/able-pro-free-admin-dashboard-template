// material-ui
import MuiGlobalStyles from '@mui/material/GlobalStyles';

// ==============================|| THEME - GLOBAL STYLE  ||============================== //

export default function GlobalStyles() {
  return (
    <MuiGlobalStyles
      styles={() => ({
        '.apexcharts-canvas': {
          '& svg': {
            '&:focus': {
              outline: 'none !important'
            },
            '& .apexcharts-keyboard-focused': {
              strokeWidth: 0
            }
          }
        },

        '.apexcharts-legend-series': {
          gap: '8px'
        },

        '.apexcharts-tooltip-marker': {
          marginBottom: '2px !important'
        },

        '.apexcharts-tooltip-series-group.apexcharts-active, .apexcharts-tooltip-series-group:last-child': {
          paddingBottom: '0px !important'
        },

        '.apexcharts-menu-icon svg, .apexcharts-reset-icon svg, .apexcharts-zoom-icon svg, .apexcharts-zoomin-icon svg, .apexcharts-zoomout-icon svg':
          {
            fill: 'var(--palette-text-secondary) !important'
          },

        '.apexcharts-pan-icon svg': {
          stroke: 'var(--palette-text-secondary) !important',
          fill: 'transparent !important'
        },

        '.apexcharts-zoom-icon.apexcharts-selected svg': {
          fill: 'var(--palette-primary-main) !important'
        },

        '.apexcharts-pan-icon.apexcharts-selected svg': {
          stroke: 'var(--palette-primary-main) !important'
        },

        '.apexcharts-toolbar .apexcharts-pan-icon:hover:not(.apexcharts-selected) svg': {
          stroke: 'var(--palette-grey-600) !important'
        },

        '.apexcharts-toolbar div:hover:not(.apexcharts-selected):not(.apexcharts-pan-icon) svg': {
          fill: 'var(--palette-grey-600) !important'
        },

        'html[data-color-scheme="dark"] .apexcharts-menu': {
          backgroundColor: 'var(--palette-background-default)',
          borderColor: 'var(--palette-grey-200)'
        },

        'html[data-color-scheme="dark"] .apexcharts-menu-item:hover': {
          backgroundColor: 'var(--palette-divider)'
        }
      })}
    />
  );
}
