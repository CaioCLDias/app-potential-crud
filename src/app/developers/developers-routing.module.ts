import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DevelopersFormComponent} from './developers-form/developers-form.component'
import { DevelopersListComponent } from './developers-list/developers-list.component';

const routes: Routes = [
  {path: 'developers-form', component: DevelopersFormComponent},
  {path: 'developers-form/:id', component: DevelopersFormComponent},
  {path: 'developers-list', component:DevelopersListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelopersRoutingModule { }
