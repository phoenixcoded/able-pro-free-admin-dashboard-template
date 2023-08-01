// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export default class TypographyComponent {}
