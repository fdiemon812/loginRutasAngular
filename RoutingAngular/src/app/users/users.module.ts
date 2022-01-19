import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from '../app.routing';



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    UsersComponent,
    UserComponent
  ]
})
export class UsersModule { }
