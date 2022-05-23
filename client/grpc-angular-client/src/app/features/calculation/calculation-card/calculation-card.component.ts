import { Component } from '@angular/core';
import { map, tap } from 'rxjs';
import { CalculationService } from '../services/calculation.service';

@Component({
  selector: 'app-calculation-card',
  templateUrl: 'calculation-card.component.html',
  styleUrls: ['calculation-card.component.scss']
})
export class CalculationCardComponent {
  progress$ = this.calculationService.progress$;
  constructor(private calculationService: CalculationService) {}

  startCalculation() {
    this.calculationService.startCalculation(100);
  }
}
