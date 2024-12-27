import { NgClass, NgComponentOutlet } from '@angular/common';
import { Component, computed, input, output, OutputEmitterRef, signal, Signal, Type } from '@angular/core';
import { FormControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { OpenEyeComponent } from "../../icons/open-eye/open-eye.component";
import { CloseEyeComponent } from "../../icons/close-eye/close-eye.component";

@Component({ 
  selector: 'app-input',
  standalone: true,
  imports: [NgClass, NgComponentOutlet, ReactiveFormsModule, OpenEyeComponent, CloseEyeComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  type = input<'text' | 'email' | 'password' | 'number' | 'tel'>('text');
  label = input<string>('');
  name = input<string>('');
  placeholder = input<string>('');
  control = input<FormControl>(new FormControl());
  icon = input<Type<any> | null>(null);
  errors = input<ValidationErrors>();
  id = computed(() => `input-${this.name()}`);
  value = signal<string>('');
  isDisabled = signal<boolean>(false);
  isPasswordVisible = signal<boolean>(false);
  computedType = computed(() => {
    return this.isPasswordVisible() ? 'text' : this.type();
  });


  get isControlInvalid(): Signal<boolean> {
    return computed(() => this.control().invalid && this.control().touched);
  }

  get errorMessage() {
    const errorControl = this.control().errors;
    if (errorControl) {
      const errorKey = Object.keys(errorControl)[0];
      return this.errors()![errorKey] || '';
    }
    return '';
  }

  private onChange: (value: any) => void = () => {
  };
  private onTouched: () => void = () => {
  };

  onInputChange(event: any) {
    this.value.set(event.target.value);
    this.onChange(event.target.value);
    this.onTouched();
  }

  togglePassword() {
    this.isPasswordVisible.set(!this.isPasswordVisible());
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  writeValue(obj: any): void {
    this.value.set(obj);
  }

}
