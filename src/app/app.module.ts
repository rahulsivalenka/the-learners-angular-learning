import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root.component';
import { ChildModule } from './child/child.module';
import { AccessorsComponent } from './accessors/accessors.component';


@NgModule({
  declarations: [
    RootComponent,
    AccessorsComponent
  ],
  imports: [
    BrowserModule,
    ChildModule
  ],
  providers: [],
  bootstrap: [RootComponent],
  entryComponents: [],
  exports: []
})
export class AppModule { }
