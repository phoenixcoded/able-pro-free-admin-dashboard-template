import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import MuiAvatar from '@mui/material/Avatar';

// project-imports
import getColors from 'utils/getColors';

// ==============================|| AVATAR - COLOR STYLE ||============================== //

function getColorStyle({ theme, color, type }) {
  const colors = getColors(theme, color);
  const { lighter, light, main, contrastText } = colors;

  switch (type) {
    case 'filled':
      return {
        color: contrastText,
        backgroundColor: main
      };
    case 'outlined':
      return {
        color: main,
        border: '1px solid',
        borderColor: main,
        backgroundColor: 'transparent'
      };
    case 'combined':
      return {
        color: main,
        border: '1px solid',
        borderColor: light,
        backgroundColor: lighter + 80
      };
    default:
      return {
        color: main,
        backgroundColor: lighter + 80
      };
  }
}

// ==============================|| AVATAR - SIZE STYLE ||============================== //

// pro version
function getSizeStyle() {
  return {
    fontSize: '1rem',
    width: 40,
    height: 40,
    '& svg': {
      width: 20,
      height: 20
    }
  };
}

// ==============================|| AVATAR - STYLED ||============================== //

const AvatarStyle = styled(MuiAvatar, { shouldForwardProp: (prop) => prop !== 'color' && prop !== 'type' && prop !== 'size' })(
  ({ theme, variant, color, type, size }) => ({
    ...getSizeStyle(size),
    ...getColorStyle({ variant, theme, color, type }),
    ...(size === 'badge' && {
      borderColor: theme.palette.background.default
    })
  })
);

// ==============================|| AVATAR - EXTENDED ||============================== //

export default function Avatar({ variant = 'circular', children, color = 'primary', type, size = 'md', ...others }) {
  const theme = useTheme();

  return (
    <AvatarStyle variant={variant} theme={theme} color={color} type={type} size={size} {...others}>
      {children}
    </AvatarStyle>
  );
}

Avatar.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node
};
