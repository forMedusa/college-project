import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IssueReqComponent } from './issue-req/issue-req.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
  component: LoginComponent
  },
  {
    path: 'addbooks',
    component: AddbooksComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'allBooks',
    component: AllBooksComponent
  },
  {
    path: 'issueReq',
    component: IssueReqComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
