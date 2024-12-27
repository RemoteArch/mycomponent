import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ApplicationUsersService } from '../../features/dashboard/services/applicationusers.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { getInitials } from '../../config/config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  initial! :string;
  user:any = {
    firstname:"",
    applicationUserRoles:[""]
  }

  constructor(private router : Router , private appUsers : ApplicationUsersService){}

  async ngOnInit(){
    // this.translate.use("fr")
    try{
      let user = await firstValueFrom(this.appUsers.getMe())
      this.user = user;
      this.initial = getInitials(user.firstname,user.lastname)

    }catch(error){
      this.router.navigateByUrl("/")
    }
  }

   // L'événement émis pour basculer la sidebar
   @Output() toggleSidebar = new EventEmitter<void>();

   // Méthode appelée lors du clic sur l'icône SVG
   onToggleSidebar() {
     this.toggleSidebar.emit();  // Émet l'événement vers le parent
   }
  // @ViewChild('sidebar-close')sidebarClose!:ElementRef;
  
  ngAfterViewInit(): void {
      // console.log(this.sidebarClose.nativeElement);
  }

}
