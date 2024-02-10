// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/demo/shared/shared.module';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export default class ColorComponent {
  // public method
  primaryColor = [
    {
      value: 'bg-primary-50',
      title: 'Blue-1',
      hexCode: '#E9F0FF',
      colorName: 'Primary.lighter'
    },
    {
      value: 'bg-primary-100',
      title: 'Blue-2',
      hexCode: '#DAE6FF',
      colorName: 'Primary[100]'
    },
    {
      value: 'bg-primary-200',
      title: 'Blue-3',
      hexCode: '#B5CCFF',
      colorName: 'Primary[200]'
    },
    {
      value: 'bg-primary-300',
      title: 'Blue-4',
      hexCode: '#90B3FF',
      colorName: 'Primary.light'
    },
    {
      value: 'bg-primary-400 text-white',
      title: 'Blue-5',
      hexCode: '#6B99FF',
      colorName: 'Primary[400]'
    },
    {
      value: 'bg-primary-500 text-white block-border',
      title: 'Blue-6',
      hexCode: '#4680FF',
      colorName: 'Primary.main'
    },
    {
      value: 'bg-primary-600 text-white',
      title: 'Blue-7',
      hexCode: '#2281DF',
      colorName: 'Primary.dark'
    },
    {
      value: 'bg-primary-700 text-white',
      title: 'Blue-8',
      hexCode: '#1C76DA',
      colorName: 'Primary.[700]'
    },
    {
      value: 'bg-primary-800 text-white',
      title: 'Blue-9',
      hexCode: '#176CD6',
      colorName: 'Primary.darker'
    },
    {
      value: 'bg-primary-900 text-white',
      title: 'Blue-10',
      hexCode: '#0D59CF',
      colorName: 'Primary.900'
    }
  ];

  secondaryColor = [
    {
      value: 'bg-accent-100',
      title: 'Grey-1',
      hexCode: '#F8F9Fa',
      colorName: 'secondary.lighter'
    },
    {
      value: 'bg-accent-100',
      title: 'Grey-2',
      hexCode: '#F8F9Fa',
      colorName: 'secondary[100]'
    },
    {
      value: 'bg-accent-200',
      title: 'Grey-3',
      hexCode: '#F3F5F7',
      colorName: 'secondary[200]'
    },
    {
      value: 'bg-accent-300',
      title: 'Grey-4',
      hexCode: '#DBE0E5',
      colorName: 'secondary.light'
    },
    {
      value: 'bg-accent-400 text-white',
      title: 'Grey-5',
      hexCode: '#BEC8D0',
      colorName: 'secondary[400]'
    },
    {
      value: 'bg-accent-500 text-white block-border',
      title: 'Grey-6',
      hexCode: '#8996A4',
      colorName: 'secondary.main'
    },
    {
      value: 'bg-accent-600 text-white',
      title: 'Grey-7',
      hexCode: '#5B6B79',
      colorName: 'secondary.dark'
    },
    {
      value: 'bg-accent-700 text-white',
      title: 'Grey-8',
      hexCode: '#3E4853',
      colorName: 'secondary.[700]'
    },
    {
      value: 'bg-accent-800 text-white',
      title: 'Grey-9',
      hexCode: '#1D2630',
      colorName: 'secondary.darker'
    },
    {
      value: 'bg-accent-900 text-white',
      title: 'Grey-10',
      hexCode: '#131920',
      colorName: 'secondary.900'
    }
  ];

  successColor = [
    {
      value: 'bg-success-100',
      title: 'Green-1',
      hexCode: '#C0E5D9',
      colorName: 'success.lighter'
    },
    {
      value: 'bg-success-300',
      title: 'Green-4',
      hexCode: '#6BC2A5',
      colorName: 'success.light'
    },
    {
      value: 'bg-success-500 text-white block-border',
      title: 'Green-6',
      hexCode: '#2CA87F',
      colorName: 'success.main'
    },
    {
      value: 'bg-success-700 text-white',
      title: 'Green-8',
      hexCode: '#21976C',
      colorName: 'success.dark'
    },
    {
      value: 'bg-success-900 text-white',
      title: 'Green-10',
      hexCode: '#107D4F',
      colorName: 'success.darker'
    }
  ];

  errorColor = [
    {
      value: 'bg-warn-100',
      title: 'Red-1',
      hexCode: '#F5BEBE',
      colorName: 'error.lighter'
    },
    {
      value: 'bg-warn-300',
      title: 'Red-4',
      hexCode: '#E76767',
      colorName: 'error.light'
    },
    {
      value: 'bg-warn-500 text-white block-border',
      title: 'Red-6',
      hexCode: '#DC2626',
      colorName: 'error.main'
    },
    {
      value: 'bg-warn-700 text-white',
      title: 'Red-8',
      hexCode: '#D31C1C',
      colorName: 'error.dark'
    },
    {
      value: 'bg-warn-900 text-white',
      title: 'Red-10',
      hexCode: '#C50D0D',
      colorName: 'error.darker'
    }
  ];

  warningColor = [
    {
      value: 'bg-warning-100',
      title: 'Gold-1',
      hexCode: '#F7DCB3',
      colorName: 'warning.lighter'
    },
    {
      value: 'bg-warning-300',
      title: 'Gold-4',
      hexCode: '#EDAD4D',
      colorName: 'warning.light'
    },
    {
      value: 'bg-warning-500 text-white block-border',
      title: 'Gold-6',
      hexCode: '#E58A00',
      colorName: 'warning.main'
    },
    {
      value: 'bg-warning-700 text-white',
      title: 'Gold-8',
      hexCode: '#DE7700',
      colorName: 'warning.dark'
    },
    {
      value: 'bg-warning-900 text-white',
      title: 'Gold-10',
      hexCode: '#D35A00',
      colorName: 'warning.darker'
    }
  ];
}
