import { CommonModule } from '@angular/common';
import { Component, ElementRef, input, InputSignal, ViewChild } from '@angular/core';
import { NewModalService } from '../../services/modal/new-modal.service';

@Component({
  selector: 'app-new-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-modal.component.html',
  styleUrl: './new-modal.component.css'
})
export class NewModalComponent {
  modalTitle: InputSignal<string> = input.required<string>();
  size : InputSignal<number> = input<number>(25)
  modalDescription: InputSignal<string> = input<string>('');
  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;
  modalElement!: HTMLDialogElement;

  ngAfterViewInit() {
    this.modalElement = this.modal.nativeElement;
  }

  open() {
    this.modalElement.showModal();
  }

  close() {
    this.modalElement.close();
  }
}
