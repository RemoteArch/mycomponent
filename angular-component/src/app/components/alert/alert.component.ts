import { CommonModule } from '@angular/common';
import { Component, computed, input, Input, InputSignal } from '@angular/core';

@Component({ 
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {

   label: InputSignal<string> =input<string>('Success!');
   messageTag: InputSignal<string> = input<string>('This is a success alert—check it out!');
   textcolor: InputSignal<'red' | 'green' | 'amber'|'gray'|'blue'> = input<'red' | 'green' | 'amber'|'gray'|'blue'>('green');
  darkText = computed(()=>{
    switch(this.textcolor()){ 
      case 'red':
        return 'dark-danger'; 
      case 'green':
        return 'dark-success';
      case 'amber':
        return 'dark-warning';
      case 'gray':
        return 'ddark-cancel';
      case 'blue':
        return 'dark-primary'
      default:
        return '';
    }
  })
}
