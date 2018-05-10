import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../model/user';
import { ToastsManager } from 'ng2-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
  
})
export class RegisterComponent implements OnInit {

  user:User = { email:'email',password:'password',firstname:'firstname',
  lastname:'lastname'}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private angularFireAuth:AngularFireAuth,
    // private db:AngularFireDatabase,
    
  ) {
                this.toastr.setRootViewContainerRef(vcr)
                this.toastr.success('You are awesome!', 'Wellcom');
  }
    
    ngOnInit() {}
    onClickSubmit(user:User){
    this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email,user.password).then(res=>{
      
      console.log(res);
      // let angularFireAuth = this.db.list('/users')
      // let ref = this.db.list('/customers')
      // this.timestamp = Date.now();
      // ref.push(this.user);

        this.router.navigate(['/login'])
      }).catch(error=>{
        this.toastr.error(error, 'opps!')
        console.log(error);
        
      })
    };

    backtologin(){
      this.router.navigate(['/login'])
    }
}

// class User {
//   firstname = "";
//   lastname = "";
//   email = "";
//   password = "";
//   re = "";
//   timestamp = "";

//   }

