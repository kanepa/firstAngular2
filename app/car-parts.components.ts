import { Component } from '@angular/core';



import { CarPart } from './car-parts';
import { CARPARTS } from './mocks';




@Component({
  selector: 'car-parts',
  moduleId: module.id,
  templateUrl: 'app/car-parts.component.html',
  styles:['h2 {color:green;}']

    })
    export class CarPartsComponent {
    races : CarPart[];

    ngOnInit(){
      this.carParts = CARPARTS;
    }
  totalCarParts(){
    return 10;

  };
  }
