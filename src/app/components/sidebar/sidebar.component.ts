import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_ROUTE } from '../../config/config';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit {

  readonly APP_ROUTE = APP_ROUTE;

  @Input() isSidebarOpen = true;
  
  ngAfterViewInit(): void {
      // console.log(this.sidebar.nativeElement);
  }

}
