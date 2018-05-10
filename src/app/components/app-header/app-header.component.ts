import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {

  constructor(private router: Router,
    private angularFireAuth:AngularFireAuth) {}

  Logout(){
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['/'])
  }
 }
