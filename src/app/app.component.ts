import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  templateUrl: './app.component.html'

})
export class AppComponent implements OnInit {
  constructor(private router: Router,
    private angularFireAuth:AngularFireAuth) {
      this.angularFireAuth.authState.subscribe(user=>{
        if(user!=null){
          this.router.navigate(['/dashboard'])
        }else{
          this.router.navigate(['/'])
        }
        
      })
     }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
