import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ExamsComponent } from './exams/exams.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},  
  {path:'header',component:HeaderComponent},
  {path:'teachers',component:TeachersComponent},
  {path:'exams',component:ExamsComponent},
  {path:'assignments',component:AssignmentsComponent},
  {path:'reports',component:ReportsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
