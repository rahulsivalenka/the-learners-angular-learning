import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child1/child1.component';

@NgModule({
  declarations: [Child1Component],
  imports: [
    CommonModule
  ],
  exports: [
    Child1Component
  ]
})
export class ChildModule { }
