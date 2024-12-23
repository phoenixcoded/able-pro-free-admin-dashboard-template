// angular import
import { Component, ContentChild, ElementRef, TemplateRef, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  imports: [CommonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // public props

  /**
   * Class to be applied at card level
   */
  readonly cardClass = input<string>();

  /**
   * To hide header from card
   */
  readonly showHeader = input(true);

  /**
   * To hide content from card
   */
  readonly showContent = input(true);

  /**
   * Class to be applied on card header
   */
  readonly headerClass = input<string>();

  /**
   * Class to be applied on action section of mat card
   */
  readonly actionClass = input<string>();

  /**
   * Title of card. It will be visible at left side of card header
   */
  readonly cardTitle = input<string>();

  /**
   * padding around card content. default in px
   */
  readonly padding = input(24); // set default to 24 px

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
