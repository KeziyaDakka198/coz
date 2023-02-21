import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  constructor(private router:Router){}
    goToAssignment(assignmentName:String):void{
      this.router.navigate([`${assignmentName}`]);
    }
}
