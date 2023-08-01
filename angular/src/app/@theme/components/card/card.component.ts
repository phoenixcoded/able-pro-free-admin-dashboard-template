// angular import
import { Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // public props

  /**
   * Class to be applied at card level
   */
  @Input() cardClass!: string;

  /**
   * To hide header from card
   */
  @Input() showHeader = true;

  /**
   * To hide content from card
   */
  @Input() showContent = true;

  /**
   * Class to be applied on card header
   */
  @Input() headerClass!: string;

  /**
   * Class to be applied on action section of mat card
   */
  @Input() actionClass!: string;

  /**
   * Title of card. It will be visible at left side of card header
   */
  @Input() cardTitle!: string;

  /**
   * padding around card content. default in px
   */
  @Input() padding = 24; // set default to 24 px

  /**
   * Template reference of header actions on right side
   */
  @ContentChild('headerOptionsTemplate')
  headerOptionsTemplate!: TemplateRef<ElementRef>;

  /**
   * Template reference of header actions besides title at left
   */
  @ContentChild('headerTitleTemplate')
  headerTitleTemplate!: TemplateRef<ElementRef>;

  /**
   * Template reference for mat-actions at bottom
   */
  @ContentChild('actionTemplate') actionTemplate!: TemplateRef<ElementRef>;
}
