import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, '第一个商品', 4800, 4.5, '60寸的超体电视，小时代版本', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 3800, 3.5, '60寸的超体电视，张艺谋版本', ['电子产品', '硬件设备']),
    new Product(3, '第三个商品', 5800, 2.5, '60寸的超体电视，暴风影音版本', ['电子设备']),
    new Product(4, '第四个商品', 6800, 1.5, '苹果 IPhone X，全球第一款全屏手机', ['电子产品', '硬件设备']),
    new Product(5, '第五个商品', 5800, 3.5, '小米 Note 3，拍照美颜手机', ['电子产品', '硬件设备']),
    new Product(6, '第六个商品', 4800, 0.5, '60寸的超体电视，乐视专卖版本', ['图书设备']),
  ];

  private comments: Comment[] = [
    new Comment( 1, 1, "2018-03-03 20:22:20",  "张三", 3, "这个东西一般般啦"),
    new Comment( 2, 1, "2018-03-04 23:23:20",  "李四", 2, "这个东西一般般啦"),
    new Comment( 3, 2, "2018-03-05 22:26:20",  "王五", 4, "这个东西一般般啦"),
    new Comment( 4, 2, "2018-03-06 18:27:20",  "Tim", 2, "这个东西一般般啦"),
    new Comment( 5, 3, "2018-03-07 10:20:20",  "John", 2, "这个东西一般般啦"),
    new Comment( 6, 4, "2018-03-09 20:20:20",  "Black", 1, "这个东西一般般啦"),
  ];

  constructor() {
  }

  getProducts(){
    return this.products;
  }

  getProduct(id: number) :Product {
    return this.products.find( (product) => product.id == id );
  }

  getCommentsForProductId(id: number) :Comment[] {
    return this.comments.filter( (comment: Comment) => comment.productId == id );
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

export class Comment {

  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string) {

  }
}
