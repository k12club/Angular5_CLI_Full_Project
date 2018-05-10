import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes,
     RouterModule, 
     Router,
     ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.scss']
})
export class HashComponent {


    student = new Student();
    items:Observable<any[]>;
  
    
    constructor(private db:AngularFireDatabase){
        this.items = this.db.list('/customers', ref => ref.orderByChild('timestamp').limitToLast(3)).snapshotChanges().map((array) => array.reverse()) as Observable<any[]>;         
    }
  
    onClickDelete(item){
  
    }
  
    onClickPayment(item){
  
    }
    
  
    onClickSubmit(){
      //window.alert(JSON.stringify(this.student));
      let ref = this.db.list('/customers')
      this.student.timestamp = Date.now();
      ref.push(this.student);
    }
  }
  
  class Student{
    firstname = "";
    lastname = "";
    email = "";
    course = "";
    payment = "Waiting";
    timestamp = Date.now();
  }
  
