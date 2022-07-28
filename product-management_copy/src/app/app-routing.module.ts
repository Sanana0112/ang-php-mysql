import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByIdComponent } from './product/by-id/by-id.component';
import { CreateComponent } from './product/create/create.component';
import { EditComponent } from './product/edit/edit.component';
import { ListComponent } from './product/list/list.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'product/:id',component:ByIdComponent},
  {path:'create',component:CreateComponent},
  {path:'edit/:id',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
