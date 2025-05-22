import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Imports Angular Elements
import { createCustomElement } from '@angular/elements';
import { Injector } from '@angular/core';
// Import de tous les composants standalone
import { UploadComponent } from './app/components/upload/upload.component';
import { UnavalaibleComponent } from './app/components/unavalaible/unavalaible.component';
import { ToastComponent } from './app/components/toast/toast.component';
import { TitleComponent } from './app/components/title/title.component';
import { TableComponent } from './app/components/table/table.component';
import { FormComponent } from './app/components/form/form.component';
import { LoardingComponent } from './app/components/loarding/loarding.component';
import { CalendarComponent } from './app/components/calendar/calendar.component';
import { AlertComponent } from './app/components/alert/alert.component';
import { ButtonComponent } from './app/components/button/button.component';
import { InputComponent } from './app/components/input/input.component';

bootstrapApplication(AppComponent, appConfig)
  .then(appRef => {
    const injector = appRef.injector as Injector;
    // Enregistrement de chaque composant comme Web Component
    const elements = [
      { selector: 'my-upload', component: UploadComponent },
      { selector: 'my-unavalaible', component: UnavalaibleComponent },
      { selector: 'my-toast', component: ToastComponent },
      { selector: 'my-title', component: TitleComponent },
      { selector: 'my-table', component: TableComponent },
      { selector: 'my-form', component: FormComponent },
      { selector: 'my-loarding', component: LoardingComponent },
      { selector: 'my-calendar', component: CalendarComponent },
      { selector: 'my-alert', component: AlertComponent },
      { selector: 'my-button', component: ButtonComponent },
      { selector: 'my-input', component: InputComponent },
    ];
    for (const { selector, component } of elements) {
      if (!customElements.get(selector)) {
        const element = createCustomElement(component, { injector });
        customElements.define(selector, element);
      }
    }
  })
  .catch((err) => console.error(err));
