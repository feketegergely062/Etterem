import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  csukva=true
  user:any=null
  constructor(private auth:AuthService){
    this.auth.getLoggedUser().subscribe(
      {
        next: (u)=>{
          console.log("siker",u)
          this.user=u
        },
        error: (e)=>console.log("Hibas belépés",e)
      }
    )
  }
  signOut(){
    this.auth.singOut()
  }
}
