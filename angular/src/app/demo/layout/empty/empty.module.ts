// angular import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// project import
import { EmptyComponent } from './empty.component';

@NgModule({
  declarations: [EmptyComponent],
  imports: [CommonModule, RouterModule]
})
export class EmptyModule {}
