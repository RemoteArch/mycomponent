import { CommonModule } from '@angular/common';
import { Component,computed,EventEmitter, input, InputSignal, output, Output, OutputEmitterRef, Type } from '@angular/core';
import { LoardingComponent } from "../loarding/loarding.component";

@Component({ 
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, LoardingComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'

})
export class ButtonComponent {

 
  type: InputSignal<'button' | 'submit' | 'reset'> = input<'button' | 'submit' | 'reset'>('button');
  label: InputSignal<string|undefined> = input<string|undefined>(undefined);
  icon: InputSignal<Type<any>|null> = input<Type<any>|null>(null);
  textColor: InputSignal<string> = input<string>('white');
  isLoading: InputSignal<boolean> = input<boolean>(false);
  isDesabled: InputSignal<boolean> = input<boolean>(false);
  variant: InputSignal<'primary' | 'success' | 'danger' | 'warning' | 'state'> = input<'primary'|'success'|'danger'|'warning'| 'state'>('danger');
  btnVariant = computed(() => {
    switch (this.variant()) {
      case 'primary':
        return 'bg-primary';
      case 'success':
        return 'bg-success';
      case 'danger':
        return 'bg-danger';
      case 'warning':
        return 'bg-warning';
      case 'state':
        return 'bg-state';
      default:
        return '';
    }
  });
  onClick: OutputEmitterRef<void> = output<void>();

  onButtonClicked() {
    this.onClick.emit();
  }

}
