import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productmodel } from '../product-list/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  Title: String = "Edit Products"
  productlist: productmodel[] | any;
  myproductID:any;
  myproduct:any;
  i:any;
  imagewidth:Number = 55;
  imagemargin:Number = 2;

  Productitem={
    productCode :'',
    productName:'',
    availablity:'',
    price:'',
    rating:'',
    imageURL:''
  }

  constructor(private product:ProductService, private route:Router) { }

  ngOnInit(): void {

    this.myproductID=localStorage.getItem("productID");

    this.product.getproduct()
    .subscribe(data=>
      {
        this.productlist=JSON.parse(JSON.stringify(data))
        for(this.i in this.productlist)
        {
          if(this.productlist[this.i]._id==this.myproductID)
          {
            
            this.Productitem=this.productlist[this.i];
          }
        }
    });
  }



  editproducts()
  {
    this.product.updateproduct(this.Productitem);
    console.log(this.Productitem);
    alert("success");
    this.route.navigate(['/']);
}


}