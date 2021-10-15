import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DevelopersRoutingModule } from './developers-routing.module';
import { DevelopersFormComponent } from './developers-form/developers-form.component';
import { DevelopersListComponent } from './developers-list/developers-list.component';


@NgModule({
  declarations: [
    DevelopersFormComponent,
    DevelopersListComponent
  ],
  imports: [
    CommonModule,
    DevelopersRoutingModule,
    FormsModule
  ],
  exports: [
    DevelopersFormComponent,
    DevelopersListComponent
  ]
})
export class DevelopersModule { }
