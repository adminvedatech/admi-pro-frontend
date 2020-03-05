import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankDetailComponent } from './bank-list/bank-detail/bank-detail.component';


const routes: Routes = [

  {
    path: "bank-list",
    component: BankDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
