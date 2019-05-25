import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AccessorsComponent } from './accessors/accessors.component';

@Component({
  selector: 'app-my-root',
  templateUrl: 'root.component.html',
  // template: `
  //   <span>My Root</span>
  //   <!-- <app-child1 [name]="name" [count]="count" (update)="onNameUpdate()"></app-child1> -->
  // `,
  // TODO: Check inline SCSS not working

  // styles: [
  //   `
  //   app-my-root {
  //     span {
  //       color: yellow;
  //     }
  //     * {
  //       display: block;
  //       background: black;
  //     }
  //   }
  //   `
  // ],
  styleUrls: [
    'root.component.scss'
  ],
  // encapsulation: ViewEncapsulation.None
})
export class RootComponent implements AfterViewInit {
  name = 'Angular';
  count = 10;
  // num = 16;

  NAMES = [
    'Damodar',
    'Pradeepthi',
    'Sravya'
  ];

  @ViewChild(AccessorsComponent)
  accessors: AccessorsComponent;

  ngAfterViewInit() {
    console.log(this.accessors);
    this.accessors.nameChanged.subscribe((name) => {
      console.log('new name', name);
    })

    // this.accessors.nameChanged.next();
  }

  onNameUpdate() {
    this.name = this.NAMES[this.getRandom(0, this.NAMES.length - 1)]
  }

  getRandom(min: number, max: number) {
    return Math.round(Math.random() * max - min - 1);
  }
}