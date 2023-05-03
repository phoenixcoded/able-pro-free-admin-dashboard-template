import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project-imports
import Logo from 'components/logo';
import AuthSocButton from 'sections/auth/AuthSocButton';
import AuthDivider from 'sections/auth/AuthDivider';
import AuthWrapper from 'sections/auth/AuthWrapper';
import FirebaseRegister from 'sections/auth/auth-forms/AuthRegister';

// assets
import imgFacebook from 'assets/images/auth/facebook.svg';
import imgTwitter from 'assets/images/auth/twitter.svg';
import imgGoogle from 'assets/images/auth/google.svg';

// ================================|| REGISTER ||================================ //

const Register = () => {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <AuthSocButton>
                <img src={imgFacebook} alt="Facebook" style={{ margin: '0 10px' }} /> Sign In with Facebook
              </AuthSocButton>
            </Grid>
            <Grid item xs={12}>
              <AuthSocButton>
                <img src={imgTwitter} alt="Facebook" style={{ margin: '0 10px' }} /> Sign In with Twitter
              </AuthSocButton>
            </Grid>
            <Grid item xs={12}>
              <AuthSocButton>
                <img src={imgGoogle} alt="Facebook" style={{ margin: '0 10px' }} /> Sign In with Google
              </AuthSocButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <AuthDivider>
            <Typography variant="body1">OR</Typography>
          </AuthDivider>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Sign up</Typography>
            <Typography component={Link} to="/auth/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
              Already have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <FirebaseRegister />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Register;
