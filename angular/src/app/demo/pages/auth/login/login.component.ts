// angular import
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../authentication.scss']
})
export default class LoginComponent {
  // public props
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  Email = 'info@phoenixcoded.co';
  password = '123456';

  // public method
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  loginType = [
    {
      image: 'assets/images/authentication/facebook.svg',
      alt: 'facebook',
      title: 'Sign In with Facebook'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      alt: 'twitter',
      title: 'Sign In with Twitter'
    },
    {
      image: 'assets/images/authentication/google.svg',
      alt: 'google',
      title: 'Sign In with Google'
    }
  ];
}
