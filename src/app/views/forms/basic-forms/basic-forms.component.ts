import { Component } from '@angular/core';
import { Pool } from '../../../pages/model/pool';
import { DataProfileService } from '../../../service/data-profile.service';
import { LoginComponent } from '../../pages/login.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: 'basic-forms.component.html'
})
export class BasicFormsComponent {
  pools:Observable<any[]>;
  poolForm:Pool={poolname:'',urlmining:'',port:'',walkername:'',walkerpass:''}
  constructor(
    private db:AngularFireDatabase,
    private service:DataProfileService
  ) {
    //this.items = db.list('/students').valueChanges();        
    this.pools = db.list('/pool', ref => ref.orderByChild('timestamp')).snapshotChanges().map(result=>{
      return result.reverse();
    });        
  }




  submitpool(poolForm){
    console.log(poolForm);
    
    this.service.mining(poolForm).then(res=>{
    console.log(res);
      

    })
    
  }
  onClickDelete(poolForm){
    console.log("Data:" + JSON.stringify(poolForm));
    let itemRef = this.db.list('pool');
    itemRef.remove(poolForm);    
  }

}