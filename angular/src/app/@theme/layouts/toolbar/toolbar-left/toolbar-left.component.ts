// angular import
import { Component } from '@angular/core';
import { LayoutService } from 'src/app/@theme/services/layout.service';

@Component({
  selector: 'app-nav-left',
  templateUrl: './toolbar-left.component.html',
  styleUrls: ['./toolbar-left.component.scss']
})
export class NavLeftComponent {
  // constructor
  constructor(private layoutService: LayoutService) {}

  // public method
  toggleMenu() {
    this.layoutService.toggleSideDrawer();
  }
}
