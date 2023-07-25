import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EmptyComponent],
  imports: [CommonModule, RouterModule]
})
export class EmptyModule {}
