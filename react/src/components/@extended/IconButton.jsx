import PropTypes from 'prop-types';

// material-ui
import { alpha, styled } from '@mui/material/styles';
import MuiIconButton from '@mui/material/IconButton';

// project-imports
import getColors from 'utils/getColors';
import getShadow from 'utils/getShadow';

// ==============================|| ICON BUTTON - COLOR STYLE ||============================== //

function getColorStyle({ variant, theme, color }) {
  const colors = getColors(theme, color);
  const { lighter, light, dark, main, contrastText } = colors;

  const buttonShadow = `${color}Button`;
  const shadows = getShadow(theme, buttonShadow);

  const commonShadow = {
    '&::after': {
      boxShadow: `0 0 6px 6px ${alpha(main, 0.9)}`
    },
    '&:active::after': {
      boxShadow: `0 0 0 0 ${alpha(main, 0.9)}`
    },
    '&:focus-visible': {
      outline: `2px solid ${dark}`,
      outlineOffset: 2
    }
  };

  switch (variant) {
    case 'contained':
      return {
        color: contrastText,
        backgroundColor: main,
        '&:hover': {
          backgroundColor: dark
        },
        ...(color === 'secondary'),
        ...commonShadow
      };
    case 'light':
      return {
        color: main,
        backgroundColor: lighter,
        '&:hover': {
          backgroundColor: light
        },
        ...commonShadow
      };
    case 'shadow':
      return {
        boxShadow: shadows,
        color: contrastText,
        backgroundColor: main,
        '&:hover': {
          boxShadow: 'none',
          backgroundColor: dark
        },
        ...commonShadow
      };
    case 'outlined':
      return {
        '&:hover': {
          backgroundColor: 'transparent',
          color: dark,
          borderColor: dark
        },
        ...commonShadow
      };
    case 'dashed':
      return {
        backgroundColor: lighter,
        '&:hover': {
          color: dark,
          borderColor: dark,
          backgroundColor: alpha(lighter, 0.2)
        },
        ...commonShadow
      };
    case 'text':
    default:
      return {
        '&:hover': { color: dark, backgroundColor: lighter },
        ...commonShadow
      };
  }
}

const IconButtonStyle = styled(MuiIconButton, { shouldForwardProp: (prop) => prop !== 'variant' && prop !== 'shape' })(
  ({ theme, variant, shape, color }) => ({
    position: 'relative',
    '::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      borderRadius: shape === 'rounded' ? '50%' : 8,
      opacity: 0,
      transition: 'all 0.5s'
    },

    ':active::after': {
      position: 'absolute',
      borderRadius: shape === 'rounded' ? '50%' : 8,
      left: 0,
      top: 0,
      opacity: 1,
      transition: '0s'
    },
    ...(shape === 'rounded' && {
      borderRadius: '50%'
    }),
    ...(variant === 'outlined' && {
      border: '1px solid',
      borderColor: 'inherit'
    }),
    ...(variant === 'dashed' && {
      border: '1px dashed',
      borderColor: 'inherit'
    }),
    ...(variant !== 'text' && {
      '&.Mui-disabled': {
        backgroundColor: theme.palette.secondary[200]
      }
    }),
    ...getColorStyle({ variant, theme, color })
  })
);

// ==============================|| ICON BUTTON - EXTENDED ||============================== //

function IconButton({ variant = 'text', shape = 'square', children, color = 'primary', ref, ...others }) {
  return (
    <IconButtonStyle ref={ref} variant={variant} shape={shape} color={color} {...others}>
      {children}
    </IconButtonStyle>
  );
}

IconButton.displayName = 'IconButton';

export default IconButton;

getColorStyle.propTypes = { variant: PropTypes.any, theme: PropTypes.any, color: PropTypes.any };

IconButton.propTypes = {
  variant: PropTypes.string,
  shape: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  ref: PropTypes.any,
  others: PropTypes.any
};
