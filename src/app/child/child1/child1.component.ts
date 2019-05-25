import { Component, EventEmitter, Input, OnInit, Output, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
  // inputs: ['name'],
  // outputs: ['update'],
  // `host: {
  //   'onclick': 'onHostClicked()'
  // }`
})
export class Child1Component implements OnInit {
  // badgeText = 'Test';
  @HostBinding('attr.badge-text')
  @Input()
  count: number;


  @HostBinding('class.danger')
  danger;
  // get isDanger() {
  //   return this.count > 10;
  // }

  @Input()
  name: string;
  @Output()
  update = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  @HostListener('keyup', ['$event'])
  onHostClicked(e) {
    console.log(e);
    this.danger = e.target.value > 15;
  }

}
