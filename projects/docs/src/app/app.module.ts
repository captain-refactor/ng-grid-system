import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgGridSystemModule} from "ng-grid-system";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgGridSystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
