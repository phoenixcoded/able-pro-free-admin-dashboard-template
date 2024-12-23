// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';

@Component({
  selector: 'app-typography',
  imports: [SharedModule],
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export default class TypographyComponent {}
