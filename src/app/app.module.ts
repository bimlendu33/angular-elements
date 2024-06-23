import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloElementComponent } from './components/hello-element/hello-element.component';
import { createCustomElement } from '@angular/elements';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HelloElementComponent],
  imports: [BrowserModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(HelloElementComponent, { injector });
    customElements.define('hello-world', el);
  }

  ngDoBootstrap() {}
}
