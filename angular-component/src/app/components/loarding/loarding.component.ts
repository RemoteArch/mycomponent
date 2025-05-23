import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-loarding',
  standalone: true,
  imports: [],
  templateUrl: './loarding.component.html',
  styleUrl: './loarding.component.css'
})
export class LoardingComponent {
  size : InputSignal<string> = input<string>('h-6 w-6');
}
