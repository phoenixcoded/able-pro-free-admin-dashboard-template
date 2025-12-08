// angular import
import { Injectable, signal } from '@angular/core';

// rxjs import
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  // theme menu sidebar show and hide
  dashBoardMenuState = new Subject();

  drawerOpen = signal(false);

  toggleSideDrawer() {
    this.dashBoardMenuState.next(!this.drawerOpen());
    this.drawerOpen.update((value) => !value);
  }
}
