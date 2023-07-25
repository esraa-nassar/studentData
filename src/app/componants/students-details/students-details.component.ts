import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent {
  ID:any;
  constructor(myRoute:ActivatedRoute){
    // console.log(myRoute.snapshot.params['id']);
    this.ID = myRoute.snapshot.params['id']

  }

}
