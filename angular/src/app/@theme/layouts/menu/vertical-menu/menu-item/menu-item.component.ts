// Angular import
import { Component, inject, input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Project import
import { NavigationItem } from 'src/app/@theme/types/navigation';
import { LayoutService } from 'src/app/@theme/services/layout.service';

@Component({
  selector: 'app-menu-item',
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  private layoutService = inject(LayoutService);
  private sanitizer = inject(DomSanitizer);

  // public props
  readonly item = input.required<NavigationItem>();

  // public method
  toggleMenu(event: MouseEvent) {
    const ele = event.target as HTMLElement;
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement as HTMLElement;
      const up_parent = ((parent.parentElement as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      const last_parent = (up_parent.parentElement as HTMLElement).parentElement as HTMLElement;
      if (last_parent.classList.contains('coded-submenu')) {
        up_parent.classList.remove('coded-trigger');
        up_parent.classList.remove('active');
      } else {
        const sections = document.querySelectorAll('.coded-hasmenu');
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.remove('active');
          sections[i].classList.remove('coded-trigger');
        }
      }

      if (parent.classList.contains('coded-hasmenu')) {
        parent.classList.add('coded-trigger');
        parent.classList.add('active');
      } else if (up_parent.classList.contains('coded-hasmenu')) {
        up_parent.classList.add('coded-trigger');
        up_parent.classList.add('active');
      } else if (last_parent.classList.contains('coded-hasmenu')) {
        last_parent.classList.add('coded-trigger');
        last_parent.classList.add('active');
      }
    }
  }

  sanitizeURL(url: string): SafeUrl {
    // Validate and sanitize the URL here
    // For example, check if it starts with 'http://' or 'https://'
    // If it's valid, return the sanitized URL
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
