import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productTitle: string;

  constructor(private activatedRout: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.productTitle = this.activatedRout.snapshot.params['productTitle'];
  }

  goBack(): void {
    console.log('goBack');
    this.location.back();
  }
}
