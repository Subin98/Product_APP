import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'Add-Products',component:AddproductComponent},
  {path:'Edit-Products',component:EditproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
