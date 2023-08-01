// Angular import
import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';

// Project import
import { menus } from 'src/app/demo/data/menu';
import { LayoutService } from 'src/app/@theme/services/layout.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // public props
  @ViewChild('sidebar') sidebar!: MatDrawer;
  menus = menus;
  modeValue: MatDrawerMode = 'side';
  currentApplicationVersion = environment.appVersion;

  // Constructor
  constructor(
    private breakpointObserver: BreakpointObserver,
    private layoutService: LayoutService
  ) {}

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
      this.sidebar.toggle();
    });
  }
}
