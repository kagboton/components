import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, ElementsModule, CollectionsModule, AppRoutingModule], // order matters
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}