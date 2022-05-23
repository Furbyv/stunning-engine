import { Injectable } from '@angular/core';
import { ReplaySubject, Subject, switchMap } from 'rxjs';
import { Calculation } from 'src/app/protos/calculate.pb';
import { CalculatingClient } from 'src/app/protos/calculate.pbsc';

@Injectable({ providedIn: 'root' })
export class CalculationService {
  private startCalculation$$: Subject<number> = new ReplaySubject<number>(1);
  progress$ = this.startCalculation$$.pipe(
    switchMap(task =>
      this.calculationClient.calculate(new Calculation({ taskSize: task }))
    )
  );

  constructor(private calculationClient: CalculatingClient) {}

  startCalculation(taskSize: number) {
    this.startCalculation$$.next(taskSize);
  }
}
