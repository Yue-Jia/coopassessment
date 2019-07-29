import { Injectable } from '@angular/core';
import { PRODUCT } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {

  url:string = 'http://localhost:4201/api/product/' ;
 

  constructor(public http:HttpClient) {
    console.log("Product service connected");
   }   
   GetAll(): Observable<PRODUCT[]> {
    return this.http.get<PRODUCT[]>(this.url);
   }
   
   Get(id:string): Observable<PRODUCT>{    
      return this.http.get<PRODUCT>(this.url + id);    
   }

   Edit(id:number,Name:string, Price:string, Desc:string){
      return this.http.put(this.url,{
        name:Name+'_edited',
        price:Price,
        description:Desc
      })
      .subscribe(
        (data:any) => {
          console.log(data);
          
        });
  } 
  
   Add(Name:string, Price:string, Desc:string){
    return this.http.post(this.url,{
      name:Name,
      price:Price,
      description:Desc
    })
    .subscribe(
      (data:any) => {
        console.log(data);
      });
   }  
    
   Delete(id:number){
    return this.http.delete(this.url+id)
    .subscribe(
      (data:any) => {
        console.log(data);
      });
   }
}
