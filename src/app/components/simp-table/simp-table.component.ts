import { CommonModule } from '@angular/common';
import { Component, HostListener, Input,EventEmitter, Output  } from '@angular/core';
import { ApplicationUserDto } from '../../model';

@Component({
  selector: 'app-simp-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simp-table.component.html',
  styleUrl: './simp-table.component.css'
})
export class SimpTableComponent {
  searchText: string = ''; // Texte de la recherche
  
  itemsPerPage = 5;  // Nombre d'éléments par page
  currentPage = 1;   // Page actuelle
  isMenuOpen: number | null = null;

  // menuIndex: number | null = null;

  @Input() columns: string[]= [];  // Liste des noms de colonnes
  @Input() rows : any[] = [];  
  @Output() update = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  constructor() {}

  toggleMenu(rowId: number) {
    this.isMenuOpen = this.isMenuOpen === rowId ? null : rowId;
  }
  trackByRowId(index: number, row: any): number {
    return row.ID;
  }

  // Ferme le menu si on clique en dehors
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.menu-container')) {
      this.isMenuOpen = null;
    }
  }
}
