import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-accessors',
  templateUrl: './accessors.component.html',
  styleUrls: ['./accessors.component.scss']
})
export class AccessorsComponent implements OnInit, OnChanges {

  @Input('num')
  set _myNum(value: number) {
    if (typeof value !== 'number') {
      throw new Error(`'num' property has to be a number.`)
    }

    this.myNum = value;
  }
  myNum: number;

  private _name: string = 'Angular';
  get name() {
    return `${this._name}!!`;
  }

  private _nameChanged = new Subject();
  get nameChanged(): Observable<any> {
    return this._nameChanged.asObservable();
  }

  constructor() { }

  ngOnInit() {
    this._myNum = 17;


    console.log(this.name);

    setTimeout(() => {
      this._nameChanged.next('New Name');
    }, 4000);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
  }

}
