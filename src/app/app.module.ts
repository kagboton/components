import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [],
  imports: [BrowserModule, ElementsModule, CollectionsModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}