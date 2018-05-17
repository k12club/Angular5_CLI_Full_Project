import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//Routing
import { BasicFormsRoutingModule } from './basic-forms-routing.module';

import { BasicFormsComponent } from './basic-forms.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DataProfileService } from '../../../service/data-profile.service';

@NgModule({
  imports: [
    BasicFormsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    NgModule

  ],
  declarations: [
    BasicFormsComponent
  ],
  providers:[
    DataProfileService
  ]
})
export class BasicFormsModule { }
