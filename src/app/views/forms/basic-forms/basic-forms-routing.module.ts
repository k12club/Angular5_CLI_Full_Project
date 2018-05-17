import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicFormsComponent } from './basic-forms.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: BasicFormsComponent,
    data: {
      title: 'Basic Forms'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  FormsModule],
  exports: [RouterModule]
})
export class BasicFormsRoutingModule {}
