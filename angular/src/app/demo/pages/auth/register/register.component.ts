// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../authentication.scss']
})
export default class RegisterComponent {
  // public props
  hide = true;
  coHide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  // public method
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
