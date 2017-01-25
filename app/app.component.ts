import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { CarPartsComponent } from './car-parts.component';

@Component({
  selector: 'racing-app',
  template:`
      <car-parts></car-parts>
      `
})

class AppComponent {
  heading = "Ultra Racing Schedule"

}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, CarPartsComponent ],
  bootstrap: [ AppComponent, CarPartsComponent ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
