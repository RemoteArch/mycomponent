import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {

  modal = {
    type:"",
    msg:""
  }

  show(type:"success"|"error"|"warnning" , msg:string){
    this.modal.msg = msg;
    this.modal.type = type
  }

  hide(){
    this.modal.type = ''
  }
}
