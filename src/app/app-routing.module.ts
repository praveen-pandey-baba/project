import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserrepoComponent } from './userrepo/userrepo.component';


const routes: Routes = [
  {path:'', redirectTo:'user',pathMatch:'full'},
  {path:'users/:id',component:UserdetailsComponent},
  {path:'user',component:UserlistComponent},
  {path: 'repos',component:UserrepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
