import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './directive/main/main.component';
import { AboutMeComponent } from './directive/about-me/about-me.component';
import { MoreInformationComponent } from './directive/more-information/more-information.component';
import { FooterComponent } from './directive/footer/footer.component';
import { HeaderComponent } from './directive/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutMeComponent,
    MoreInformationComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
