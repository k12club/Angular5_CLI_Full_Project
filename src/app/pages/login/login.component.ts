import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes,
     RouterModule, 
     Router,
     ActivatedRoute} from '@angular/router';
import { User } from '../model/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:User = { email:'email',password:'password',firstname:'firstname',lastname:'lastname'}

  constructor(private route: ActivatedRoute,
              public toastr: ToastsManager, vcr: ViewContainerRef,
              private router: Router,
              private angularFireAuth:AngularFireAuth) {
                
                this.toastr.setRootViewContainerRef(vcr)
                this.toastr.success('You are awesome!', 'Wellcom');
  }
  ngOnInit() {
  }

  gosignup(){
    this.router.navigate(['/signup'])
  }

  loginpass(){
    this.angularFireAuth.auth.signInWithEmailAndPassword(this.user.email,this.user.password).then(res=>{
      console.log(res);
      this.router.navigate(['/dashboard'])
    }).catch(e=>{
      this.toastr.error(e,'opps!',{
        toastLife: 3000 , showCloseButton: true
      });

    this.router.navigate(['login'])})
  }
  forgotpassword(){
    
  }
 
}
