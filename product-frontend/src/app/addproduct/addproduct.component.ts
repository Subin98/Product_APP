import { Component, OnInit } from '@angular/core';
import {productmodel} from '../product-list/product.model'
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  name:any
  Title: String = 'Add New Products';
  // Newproduct={
  //   productCode :'',
  //   productName:'',
  //   availablity:'',
  //   price:'',
  //   rating:'',
  //   imageURL:''
  // }
  Newproduct = new productmodel("","",0,0,0,"");

  constructor(private product:ProductService, private route:Router) { }

  ngOnInit(): void {
  }

  addproducts()
  {
this.product.newproduct(this.Newproduct);
console.log("called");
alert("success");
this.route.navigate(['/']);
  }

}
