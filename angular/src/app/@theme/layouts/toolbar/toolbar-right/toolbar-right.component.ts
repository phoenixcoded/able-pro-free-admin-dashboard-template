// angular import
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-right',
  templateUrl: './toolbar-right.component.html',
  styleUrls: ['./toolbar-right.component.scss']
})
export class NavRightComponent {
  // public props

  cards = [
    {
      icon: 'custom-layer',
      time: '2 min ago',
      position: 'UI/UX Design',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type"
    },
    {
      icon: 'custom-sms',
      time: '1 hour ago',
      position: 'Message',
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
    }
  ];

  cards2 = [
    {
      icon: 'custom-document-text',
      time: '12 hour ago',
      position: 'Forms',
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type"
    },
    {
      icon: 'custom-security-safe',
      time: '18 hour ago',
      position: 'Security',
      description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
    }
  ];

  notification = [
    {
      sub_title: 'Improvement',
      time: '12 hour ago',
      title: 'Widgets update',
      img: 'assets/images/layout/img-announcement-3.png'
    },
    {
      sub_title: 'New Feature',
      time: '18 hour ago',
      title: 'Coming soon dark mode',
      img: 'assets/images/layout/img-announcement-4.png'
    }
  ];
}
