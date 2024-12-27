import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-texfield',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './texfield.component.html',
  styleUrl: './texfield.component.css'
})
export class TexfieldComponent {
  @Input() required !: boolean ;
  @Input() label: string = 'Test Label'; // Texte du bouton
  @Input() type: string = 'text'; // Type de bouton Bootstrap
  @Input() default: any = ''; // Type de bouton Bootstrap
  @Input() FormName: string = '';
  passView = false
}
