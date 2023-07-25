// angular import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// project import
import { MenuCollapseComponent } from './menu-collapse/menu-collapse.component';
import { MenuGroupVerticalComponent } from './menu-group/menu-group.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { VerticalMenuComponent } from './vertical-menu.component';
import { SharedModule } from 'src/app/demo/shared/shared.module';

@NgModule({
  declarations: [MenuCollapseComponent, MenuGroupVerticalComponent, MenuItemComponent, VerticalMenuComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [VerticalMenuComponent]
})
export class VerticalMenuModule {}
