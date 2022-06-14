import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient, private router:Router) { }
  getproduct()
  {
    return this.http.get("http://localhost:3000/products");
  }

  newproduct(item:any)
{
  return this.http.post("http://localhost:3000/Addproducts", {"data":item})
  .subscribe(data=>{
    console.log(data);
  })
}

updateproduct(item:any)
{
  return this.http.post("http://localhost:3000/Editproducts",{"data":item})
  .subscribe(data=>{
    console.log(data);
  })
}
removeproduct(item:any){
 return this.http.post("http://localhost:3000/Deleteproducts",{"data":item})
 .subscribe(data=>{
   console.log(data);
 });
 
  

}

}



