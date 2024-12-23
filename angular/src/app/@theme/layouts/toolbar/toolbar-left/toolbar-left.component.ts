// angular import
import { Component, inject } from '@angular/core';

// project import
import { LayoutService } from 'src/app/@theme/services/layout.service';
import { SharedModule } from 'src/app/demo/shared/shared.module';

@Component({
  selector: 'app-nav-left',
  imports: [SharedModule],
  templateUrl: './toolbar-left.component.html',
  styleUrls: ['./toolbar-left.component.scss']
})
export class NavLeftComponent {
  private layoutService = inject(LayoutService);

  // public method
  toggleMenu() {
    this.layoutService.toggleSideDrawer();
  }
}
