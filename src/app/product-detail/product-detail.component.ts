import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product : Product;

  constructor(private routeInfo: ActivatedRoute,
              private location: Location,
              private productService: ProductService) { }

  ngOnInit() {
    let productId :number = this.routeInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(productId);
  }

  goBack(): void {
    this.location.back();
  }
}
