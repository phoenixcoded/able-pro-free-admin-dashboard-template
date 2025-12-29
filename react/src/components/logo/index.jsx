import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import ButtonBase from '@mui/material/ButtonBase';

// project-imports
import Logo from './LogoMain';
import LogoIcon from './LogoIcon';
import { APP_DEFAULT_PATH } from 'config';
import { useBuyNowLink } from 'hooks/buyNowLink';

// ==============================|| MAIN LOGO ||============================== //

export default function LogoSection({ isIcon, sx, to }) {
  const { getQueryParams } = useBuyNowLink();

  return (
    <ButtonBase disableRipple aria-label="Go to home page" {...{ component: Link, to: !to ? APP_DEFAULT_PATH + getQueryParams : to, sx }}>
      {isIcon ? <LogoIcon /> : <Logo />}
    </ButtonBase>
  );
}

LogoSection.propTypes = { isIcon: PropTypes.bool, sx: PropTypes.any, to: PropTypes.any };
