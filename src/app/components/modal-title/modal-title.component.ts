import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-title',
  standalone: true,
  imports: [],
  templateUrl: './modal-title.component.html',
  styleUrl: './modal-title.component.css'
})
export class ModalTitleComponent {
  @Output() close = new EventEmitter();
  @Input() title = "";
  
}
