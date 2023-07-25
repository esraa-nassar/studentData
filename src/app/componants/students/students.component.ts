import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnDestroy {
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    // console.log("hi");
  }

}
