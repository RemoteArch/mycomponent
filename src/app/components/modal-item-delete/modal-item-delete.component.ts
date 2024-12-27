import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalTitleComponent } from "../modal-title/modal-title.component";
import { ButtonComponent } from "../button/button.component";
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-item-delete',
  standalone: true,
  imports: [ModalTitleComponent, ButtonComponent],
  templateUrl: './modal-item-delete.component.html',
  styleUrl: './modal-item-delete.component.css'
})
export class ModalItemDeleteComponent {
  @Input() title = "";
  @Output() clickClose = new EventEmitter();
  @Output() clickDelete = new EventEmitter();

}
