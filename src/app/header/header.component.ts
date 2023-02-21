import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router){}
    goToTeacher(teacherName:any):void{
      this.router.navigate([`${teacherName}`]);
    }
    goToExam(examName:String):void{
      this.router.navigate([`${examName}`]);
    }
    goToAssignment(assignmentName:any):void{
      this.router.navigate([`${assignmentName}`]);
    }
    goToReport(reportName:any):void{
      this.router.navigate([`${reportName}`]);
    }
}
