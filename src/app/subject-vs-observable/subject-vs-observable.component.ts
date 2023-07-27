import { Component } from '@angular/core';
import { noop, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-vs-observable',
  templateUrl: './subject-vs-observable.component.html',
  styleUrls: ['./subject-vs-observable.component.css']
})
export class SubjectVsObservableComponent {
  subjectData1: number| undefined;
  subjectData2: number| undefined
  observableData1: number| undefined
  observableData2: number| undefined



  getObservableData() {
    let observable$ = new Observable<number>( observer=> {
      observer.next(Math.random() * 100 + 1)
    });

    observable$.subscribe(data => { 
      this.observableData1 = data;
    });

    observable$.subscribe(data => { 
      this.observableData2 = data;
    });
  }

  getSubjectData(){
    let subject$ = new Subject();

    // subject$.subscribe( (data) => {
    //   this.subjectData1 = <number>data;
    // }, noop, ()=> console.log)

    // subject$.subscribe( (data) => {
    //   this.subjectData2 = <number>data;
    // }, noop, ()=> console.log)

    subject$.subscribe({
      complete: () => {  }, // completeHandler
      error: () => {  },    // errorHandler 
      next: (data) => { this.subjectData1 = <number>data  },     // nextHandler
    })

    subject$.subscribe({
      complete: () => {  }, // completeHandler
      error: () => {  },    // errorHandler 
      next: (data) => { this.subjectData2 = <number>data  },     // nextHandler
    })
    subject$.next(Math.random() * 100 + 1);
  }
}
