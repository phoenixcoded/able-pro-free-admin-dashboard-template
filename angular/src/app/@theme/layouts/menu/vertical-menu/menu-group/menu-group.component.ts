// Angular import
import { Component, OnInit, inject, input } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';

// project import
import { NavigationItem } from 'src/app/@theme/types/navigation';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuCollapseComponent } from '../menu-collapse/menu-collapse.component';

@Component({
  selector: 'app-menu-group-vertical',
  imports: [MenuItemComponent, MenuCollapseComponent],
  templateUrl: './menu-group.component.html',
  styleUrls: ['./menu-group.component.scss']
})
export class MenuGroupVerticalComponent implements OnInit {
  private location = inject(Location);
  private locationStrategy = inject(LocationStrategy);

  // public props

  // All Version in Group Name
  item = input.required<NavigationItem>();

  // Life cycle events
  ngOnInit() {
    // at reload time active and trigger link
    let current_url = this.location.path();
    const baseHref = this.locationStrategy.getBaseHref();
    if (baseHref) {
      current_url = baseHref + this.location.path();
    }
    const link = "a.nav-link[ href='" + current_url + "' ]";
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent?.parentElement?.parentElement;
      const last_parent = up_parent?.parentElement;
      if (parent?.classList.contains('coded-hasmenu')) {
        parent.classList.add('coded-trigger');
        parent.classList.add('active');
      } else if (up_parent?.classList.contains('coded-hasmenu')) {
        up_parent.classList.add('coded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent?.classList.contains('coded-hasmenu')) {
        last_parent.classList.add('coded-trigger');
        last_parent.classList.add('active');
      }
    }
  }
}
