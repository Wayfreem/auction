import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()  // 表示当前这个值需要由父组件传入
  private rating: number;
  private stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];

    // 处理星级评价显示星级的个数
    for (let i = 0; i < 5; i++) {
      this.stars.push( i > this.rating  );
    }

    // 用5个boolean 值来控制显示几个星，以及是实心还是空心 this.stars = [false, false, true, true, true];
  }

}



