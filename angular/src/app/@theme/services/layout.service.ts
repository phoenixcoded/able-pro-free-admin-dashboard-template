import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  // theme menu sidebar show and hide
  layoutState = new Subject();

  // theme component page  menu sidebar show and hide
  componentState = new Subject();

  drawerOpen = false;
  componentDrawerOpen = false;

  toggleSideDrawer() {
    this.layoutState.next(!this.drawerOpen);
  }
  toggleMenuSide() {
    this.componentState.next(!this.componentDrawerOpen);
  }
}
