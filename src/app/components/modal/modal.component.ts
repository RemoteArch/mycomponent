import { Component, Input } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { TexfieldComponent } from '../texfield/texfield.component';
import { UploadComponent } from "../upload/upload.component";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TexfieldComponent, UploadComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(private modalService: ModalService) {
    this.modalService.getStatus().subscribe(status => {
      this.isOpen = status.open;
    });
  }

  isOpen = false;

  show(){
    this.isOpen = true
  }

  hide(){
    this.isOpen = false
  }
  
   closeModal() {
     this.modalService.close(); // Ferme la modal via le service
   }

   

}
