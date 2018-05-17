import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedFormsComponent } from './advanced-forms.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AdvancedFormsComponent,
    data: {
      title: 'Advanced Forms'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,

  ],
  exports: [RouterModule]

})
export class AdvancedFormsRoutingModule {}
