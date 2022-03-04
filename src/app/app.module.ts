import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputtextComponent } from './inputtext/inputtext.component';
import { InputbuttonComponent } from './inputbutton/inputbutton.component';
import { InputradioComponent } from './inputradio/inputradio.component'

@NgModule({
  declarations: [
    AppComponent,
    InputtextComponent,
    InputbuttonComponent,
    InputradioComponent//o componente que a gente acabou de criar foi registrado no modulo principal
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]//utilizamos somente no modulo principal, que vai ser importada no componente app, que é o principal.
})
export class AppModule { }




