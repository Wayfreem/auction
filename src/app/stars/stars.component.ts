import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()  // 表示当前这个值需要由父组件传入
  private rating: number;

  @Input()
  private readonly: boolean = true;

  // 只有输出属性的 名字命名为 输入属性+change 时才能使用 [()] 作为双向绑定的语法
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();

  private stars: boolean[];

  constructor() { }

  ngOnInit() {
  }

  // 只能检测输入属性的变化
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];

    // 处理星级评价显示星级的个数
    for (let i = 1; i <= 5; i++) {
      this.stars.push( i > this.rating );
    }

    // 用5个boolean 值来控制显示几个星，以及是实心还是空心 this.stars = [false, false, true, true, true];
  }


  clickStar(index: number){

    if (this.readonly) {
      return;
    }

    // 每次点击通过点击传入的数值，重新显示星星，并且单rating的值变化的时候，会触发 ngOnChanges 事件
    this.rating = index + 1;
    this.ratingChange.emit(this.rating);
  }

}



