import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { productmodel } from './product.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title="Product List";
  productlist: productmodel[]|any
  imageWidth: number = 75;
  imageMargin: number = 2;
  showimg:any;

  constructor(private productservice: ProductService, private route: Router, public location:Location) { }

  ngOnInit(): void {

    this.productservice.getproduct()
    .subscribe((data)=>{
      this.productlist=JSON.parse(JSON.stringify(data));
    })
  }

click()
{
  console.log(this.showimg);
  this.showimg=!this.showimg;
}

edit(product:any){
  localStorage.setItem("productID",product._id);
  this.route.navigate(['Edit-Products']);
}
delete(product:any)
{
  this.productservice.removeproduct(product._id);
  console.log("removed");
  alert("Product Removed successfully!");
  window.location.reload()


}
zoomin()
{
  console.log("ok")
}

}
