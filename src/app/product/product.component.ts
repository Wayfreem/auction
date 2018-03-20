import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 4800, 4.5, '60寸的超体电视，小时代版本', ['电子产品', '硬件设备']),
      new Product(2, '第二个商品', 3800, 3.5, '60寸的超体电视，张艺谋版本', ['电子产品', '硬件设备']),
      new Product(3, '第三个商品', 5800, 2.5, '60寸的超体电视，暴风影音版本', ['电子设备']),
      new Product(4, '第四个商品', 6800, 1.5, '苹果 IPhone X，全球第一款全屏手机', ['电子产品', '硬件设备']),
      new Product(5, '第五个商品', 5800, 3.5, '小米 Note 3，拍照美颜手机', ['电子产品', '硬件设备']),
      new Product(6, '第六个商品', 4800, 0.5, '60寸的超体电视，乐视专卖版本', ['图书设备']),
    ];
  }

}

export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,  // 星级评价
    public desc: string,
    public categories: Array<string>) {

  }
}
