// Angular import
import { Component, OnInit, inject, viewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';

// Project import
import { menus } from 'src/app/demo/data/menu';
import { LayoutService } from 'src/app/@theme/services/layout.service';
import { environment } from 'src/environments/environment';
import { FooterComponent } from 'src/app/@theme/layouts/footer/footer.component';
import { BreadcrumbComponent } from 'src/app/@theme/layouts/breadcrumb/breadcrumb.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from 'src/app/@theme/layouts/toolbar/toolbar.component';
import { VerticalMenuComponent } from 'src/app/@theme/layouts/menu/vertical-menu';

@Component({
  selector: 'app-admin',
  imports: [FooterComponent, BreadcrumbComponent, SharedModule, RouterModule, NavBarComponent, VerticalMenuComponent],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  private layoutService = inject(LayoutService);

  // public props
  sidebar = viewChild<MatDrawer>('sidebar');
  menus = menus;
  modeValue: MatDrawerMode = 'side';
  currentApplicationVersion = environment.appVersion;

  // life cycle event
  ngOnInit() {
    this.breakpointObserver.observe(['(min-width: 1025px)', '(max-width: 1024.98px)']).subscribe((result) => {
      if (result.breakpoints['(max-width: 1024.98px)']) {
        this.modeValue = 'over';
      } else if (result.breakpoints['(min-width: 1025px)']) {
        this.modeValue = 'side';
      }
    });

    this.layoutService.layoutState.subscribe(() => {
      this.sidebar()?.toggle();
    });
  }
}
