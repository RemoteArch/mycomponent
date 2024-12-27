import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  driverType!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const driverTypeParam = params['driverType'] || ''; // Si `driverType` est `undefined`, on utilise une chaîne vide
      this.driverType = driverTypeParam 
        ? driverTypeParam.charAt(0).toUpperCase() + driverTypeParam.substring(1).toLowerCase()
        : ''; // Valeur par défaut si `driverType` est vide
    });
    
  }
}
