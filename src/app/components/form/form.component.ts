import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'password' | 'select' | 'number' | 'email' | 'textarea';
  required?: boolean;
  colSpan?: number; // Nombre de colonnes que le champ occupe
  options?: { value: any; label: string }[]; // Pour les champs select
  validators?: any[];
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div *ngIf="showModalValue" class="absolute inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-screen w-full z-50">
      <div class="relative top-20 mx-auto p-5 border w-[700px] shadow-lg rounded-md bg-white">
        <div class="mt-3">
          <h3 class="text-lg font-medium text-gray-900 mb-4">
            {{ title }}
          </h3>

          <form [formGroup]="form" (ngSubmit)="onSubmitForm()" [class]="'gap-4 grid grid-cols-' + gridCols + ' max-h-' + maxHeight + ' overflow-y-auto'">
            <div *ngFor="let field of formFields" [class]="'col-span-' + (field.colSpan || 1)">
              <label [for]="field.name" class="block text-sm font-medium text-gray-700">{{ field.label }}</label>
              
              <ng-container [ngSwitch]="field.type">
                <!-- Select -->
                <select *ngSwitchCase="'select'" [id]="field.name" [formControlName]="field.name"
                  class="mt-1 block w-full rounded-md border-gray-300 p-2 outline-none border  shadow-sm focus:border-blue-500">
                  <option value="">Sélectionnez une option</option>
                  <option *ngFor="let option of field.options" [value]="option.value">
                    {{ option.label }}
                  </option>
                </select>

                <!-- Textarea -->
                <textarea *ngSwitchCase="'textarea'" [id]="field.name" [formControlName]="field.name"
                  class="mt-1 block w-full rounded-md border-gray-300 p-2 outline-none shadow-sm focus:border-blue-500 min-h-[100px]"></textarea>

                <!-- Input (text, password, number, email) -->
                <input *ngSwitchDefault [type]="field.type" [id]="field.name" [formControlName]="field.name"
                  class="mt-1 block w-full rounded-md border border-gray-300 p-2 outline-none shadow-sm focus:border-blue-500">
              </ng-container>

              <!-- Message d'erreur -->
              <div *ngIf="form.get(field.name)?.errors?.['required'] && form.get(field.name)?.touched"
                class="text-red-500 text-sm mt-1">
                Ce champ est requis
              </div>
            </div>

            <div [class]="'col-span-' + gridCols + ' flex justify-end space-x-3 mt-4'">
              <button type="button" (click)="onCancelForm()"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md">
                Annuler
              </button>
              <button type="submit" [disabled]="!form.valid || isSubmitting"
                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center">
                <svg *ngIf="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                {{ submitButtonText }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `
})
export class FormComponent implements OnInit {
  @Input() formFields: FormField[] = [];
  @Input() gridCols = 2; // Nombre de colonnes par défaut
  @Input() title = 'Formulaire';
  @Input() submitButtonText = 'Enregistrer';
  @Input() initialValues?: any;
  @Input() maxHeight = '300px'; 

  @Output() formSubmit = new EventEmitter<any>();
  @Output() formCancel = new EventEmitter<void>();

  form!: FormGroup;
  showModalValue = false;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  updateFields(fields: FormField[]) {
    this.formFields = fields;
    this.initForm();
  }

  private initForm() {
    const group: { [key: string]: any } = {};

    this.formFields.forEach(field => {
      const validators = [field.required ? Validators.required : null].filter(Boolean);
      if (field.validators) {
        validators.push(...field.validators);
      }
      
      // Preserve existing form value if field exists
      const currentValue = this.form?.get(field.name)?.value || '';
      group[field.name] = [currentValue, validators];
    });

    this.form = this.fb.group(group);

    if (this.initialValues) {
      this.form.patchValue(this.initialValues);
    }
  }

  showModal(initialValues?: any) {
    this.showModalValue = true;
    this.initialValues = initialValues;
    this.initForm();
  }

  hideModal() {
    this.showModalValue = false;
    this.isSubmitting = false;
    this.form.reset();
  }

  onSubmitForm() {
    if (this.form.valid) {
      this.isSubmitting = true;
      this.formSubmit.emit(this.form.value);
    }
  }

  onCancelForm() {
    this.formCancel.emit();
    this.hideModal();
  }

}