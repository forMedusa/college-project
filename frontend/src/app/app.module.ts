import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ApiServiceService } from './api-service.service';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { StudentsComponent } from './students/students.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { IssueReqComponent } from './issue-req/issue-req.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    AddbooksComponent,
    StudentsComponent,
    AllBooksComponent,
    IssueReqComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
