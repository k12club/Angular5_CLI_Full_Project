import { Injectable } from '@angular/core';
import {  AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { Profile } from '../pages/model/profile';
import { Pool } from '../pages/model/pool';

@Injectable()
export class DataProfileService {

  constructor(private database:AngularFireDatabase) { }

  save(profile:Profile){
    
    return this.database.list('/profile').push(profile);
  }

  mining(pool:Pool){
    return this.database.list('/pool').push(pool);
  }

  list():FirebaseListObservable<Pool[]>{
    return this.database.list('/pool');
  }

}
