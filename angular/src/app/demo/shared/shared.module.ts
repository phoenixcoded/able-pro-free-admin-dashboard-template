// angular import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

// project
import { CardComponent } from 'src/app/@theme/components/card/card.component';

// third party import
import { NgScrollbarModule } from 'ngx-scrollbar';

const MaterialModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatInputModule,
  MatCardModule,
  MatSlideToggleModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatTooltipModule
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgScrollbarModule, CardComponent, MaterialModules],
  exports: [FormsModule, ReactiveFormsModule, NgScrollbarModule, CardComponent, MaterialModules]
})
export class SharedModule {}
