import PropTypes from 'prop-types';

// project-imports
import getColors from 'utils/getColors';

// assets
import { Stop, TickSquare, MinusSquare } from 'iconsax-react';

// ==============================|| RADIO - COLORS ||============================== //

function getColorStyle({ color, theme }) {
  const colors = getColors(theme, color);
  const { lighter, main, dark } = colors;

  return {
    '&:hover': {
      backgroundColor: color === 'secondary' ? lighter : lighter + 50,
      '& .icon': {
        borderColor: main
      }
    },
    '&.Mui-focusVisible': {
      outline: `2px solid ${dark}`,
      outlineOffset: -4
    }
  };
}

function getSizeStyle(size) {
  switch (size) {
    case 'small':
      return { size: 20 };
    case 'large':
      return { size: 28 };
    case 'medium':
    default:
      return { size: 24 };
  }
}

// ==============================|| CHECKBOX - STYLE ||============================== //

function checkboxStyle(size) {
  const sizes = getSizeStyle(size);

  return {
    '& svg': {
      width: sizes.size,
      height: sizes.size
    }
  };
}

// ==============================|| OVERRIDES - CHECKBOX ||============================== //

export default function Checkbox(theme) {
  const { palette } = theme;

  return {
    MuiCheckbox: {
      defaultProps: {
        className: 'size-medium',
        icon: <Stop />,
        checkedIcon: <TickSquare variant="Bold" />,
        indeterminateIcon: <MinusSquare variant="Bold" />
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          color: palette.secondary[300],
          '&.size-small': {
            ...checkboxStyle('small')
          },
          '&.size-medium': {
            ...checkboxStyle('medium')
          },
          '&.size-large': {
            ...checkboxStyle('large')
          }
        },
        colorPrimary: getColorStyle({ color: 'primary', theme }),
        colorSecondary: getColorStyle({ color: 'secondary', theme }),
        colorSuccess: getColorStyle({ color: 'success', theme }),
        colorWarning: getColorStyle({ color: 'warning', theme }),
        colorInfo: getColorStyle({ color: 'info', theme }),
        colorError: getColorStyle({ color: 'error', theme })
      }
    }
  };
}

getColorStyle.propTypes = { color: PropTypes.any, theme: PropTypes.any };
