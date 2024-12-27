import { CommonModule } from '@angular/common';
import { Component, Input,  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  searchText: string = ''; // Texte de la recherche
  
  itemsPerPage = 7;  // Nombre d'éléments par page
  currentPage = 1;   // Page actuelle
  // {title:string , attr:string , type:string}
  @Input() columns: any[] = []; // Liste des noms de colonnes
  @Input() rows : any[] = Array();


  @Input() onAddRow! : (item:any)=>any;

  constructor() {}
  allProducts: any[] = []; // Remplace Product par le type réel de ton produit

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    // Simule le chargement des produits (à remplacer par un appel réel à un service)
    this.allProducts = [...this.rows];
    this.updatePaginatedProducts();
  }

  addRow(row:any){
    let modifItem = this.onAddRow ? this.onAddRow(row) : row
    this.rows.push(modifItem)
  }

  clearRow(){
    this.rows.splice(0,this.rows.length)
  }

  filterProducts() {
    if (!this.searchText) {
      // Afficher tous les produits si searchText est vide
      this.updatePaginatedProducts();
    } else {
      // Filtrer les produits
      const filteredProducts = this.allProducts.filter(product =>
        product.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        product.color.toLowerCase().includes(this.searchText.toLowerCase()) ||
        product.category.toLowerCase().includes(this.searchText.toLowerCase())
      );

      // Mettre à jour les produits paginés
      this.rows = filteredProducts.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      );
    }
  }

  updatePaginatedProducts() {
    this.rows = this.allProducts.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  }

  nextPage() {
    if (this.currentPage < Math.ceil(this.allProducts.length / this.itemsPerPage)) {
      this.currentPage++;
      this.updatePaginatedProducts();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedProducts();
    }
  }

  range(i:number){
    return Array(i)
  }
}
