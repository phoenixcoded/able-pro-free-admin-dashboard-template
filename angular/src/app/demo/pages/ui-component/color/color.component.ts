// angular import
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export default class ColorComponent {}
