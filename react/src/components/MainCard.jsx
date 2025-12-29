import PropTypes from 'prop-types';
import { Activity } from 'react';

// material-ui
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

// header style
const headerSX = { p: 2.5, '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' } };

// ==============================|| CUSTOM - MAIN CARD ||============================== //

export default function MainCard({
  border = true,
  boxShadow,
  children,
  subheader,
  content = true,
  contentSX = {},
  darkTitle,
  divider = true,
  elevation,
  secondary,
  shadow,
  sx = {},
  title,
  codeHighlight = false,
  codeString,
  modal = false,
  ref,
  ...others
}) {
  const { themeContrast } = false;

  return (
    <Card
      elevation={elevation || 0}
      ref={ref}
      {...others}
      sx={(theme) => {
        const style = {
          position: 'relative',
          borderRadius: 1.5,
          ...(border && { border: `1px solid ${theme.vars.palette.divider}` }),
          ...((themeContrast || boxShadow || shadow) && { boxShadow: shadow ? shadow : theme.vars.customShadows.z1 }),
          ...(codeHighlight && {
            '& pre': {
              m: 0,
              p: '12px !important',
              fontFamily: theme.typography.fontFamily,
              fontSize: '0.75rem'
            }
          }),
          ...(modal && {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: `calc(100% - 50px)`, sm: 'auto' },
            '& .MuiCardContent-root': {
              overflowY: 'auto',
              minHeight: 'auto',
              maxHeight: `calc(100vh - 200px)`
            }
          })
        };

        const userSx = typeof sx === 'function' ? sx(theme) : sx;
        return { ...style, ...userSx };
      }}
    >
      {/* card header and action */}
      <Activity mode={!darkTitle && title ? 'visible' : 'hidden'}>
        <CardHeader sx={headerSX} title={title} action={secondary} subheader={subheader} slotProps={{ title: { variant: 'subtitle1' } }} />
      </Activity>
      <Activity mode={darkTitle && title ? 'visible' : 'hidden'}>
        <CardHeader sx={headerSX} title={<Typography variant="h4">{title}</Typography>} action={secondary} />
      </Activity>

      {/* content & header divider */}
      <Activity mode={title && divider ? 'visible' : 'hidden'}>
        <Divider />
      </Activity>

      {/* card content */}
      <Activity mode={content ? 'visible' : 'hidden'}>
        <CardContent sx={contentSX}>{children}</CardContent>
      </Activity>
      <Activity mode={!content ? 'visible' : 'hidden'}>{children}</Activity>
    </Card>
  );
}

MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  subheader: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  content: PropTypes.bool,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  divider: PropTypes.bool,
  elevation: PropTypes.number,
  secondary: PropTypes.any,
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  codeHighlight: PropTypes.bool,
  codeString: PropTypes.string,
  modal: PropTypes.bool,
  ref: PropTypes.object,
  others: PropTypes.any
};
