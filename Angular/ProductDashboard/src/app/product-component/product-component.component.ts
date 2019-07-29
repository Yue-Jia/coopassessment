import { Component, OnInit } from '@angular/core';
import {ProductService}from'../product-service.service';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { PRODUCT } from '../Product';
import {HttpClientModule, HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {
  prod:string[];
  constructor(private httpService: HttpClient) { }
  productser:ProductService;
  ngOnInit() {
    this.httpService.get('http://localhost:4201/api/products').subscribe(
      data=>{
        this.prod=data as string[];
      }
    );
  }

}
