import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Components/BasePage/about-us/about-us.component';
import { NavbarComponent } from './Components/BasePage/navbar/navbar.component';
import { FooterComponent } from './Components/BasePage/footer/footer.component';
import { BodyComponent } from './Components/BasePage/body/body.component';
import { UserLoginComponent } from './Components/User/user-login/user-login.component';
import { AdminLoginComponent } from './Components/Admin/admin-login/admin-login.component';
import { LandingComponent } from './Components/BasePage/landing/landing.component';
import { FAQComponent } from './Components/BasePage/faq/faq.component';
import { NGOLandingComponent } from './Components/NGO/ngo-landing/ngo-landing.component';
import { STEPLandingComponent } from './Components/STEP/step-landing/step-landing.component';
import { STEPAboutUsComponent } from './Components/STEP/step-about-us/step-about-us.component';
import { NGOAboutUsComponent } from './Components/NGO/ngo-about-us/ngo-about-us.component';
import { AdminLandingComponent } from './Components/Admin/admin-landing/admin-landing.component';
import { UserRegisterComponent } from './Components/User/user-register/user-register.component';
import { FormsModule } from '@angular/forms';
import { NgoSectionComponent } from './Components/Admin/ngo-section/ngo-section.component';
import { TraineeSectionComponent } from './Components/Admin/trainee-section/trainee-section.component';
import { AdminAboutusComponent } from './Components/Admin/admin-aboutus/admin-aboutus.component';
import { STEPREGISTERComponent } from './Components/STEP/step-register/step-register.component';
import { TrainingSectorsComponent } from './Components/STEP/training-sectors/training-sectors.component';
import { TrainingCoursesComponent } from './Components/STEP/training-courses/training-courses.component';
import { STEPStatusComponent } from './Components/STEP/step-status/step-status.component';
import { NGOCriteriaComponent } from './Components/NGO/ngo-criteria/ngo-criteria.component';
import { NGOOrganizationsComponent } from './Components/NGO/ngo-organizations/ngo-organizations.component';
import { NGOFundingNormsComponent } from './Components/NGO/ngo-funding-norms/ngo-funding-norms.component';
import { NGORegisterComponent } from './Components/NGO/ngo-register/ngo-register.component';
import { NGOStatusComponent } from './Components/NGO/ngo-status/ngo-status.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NGOAddCoursesComponent } from './Components/NGO/ngo-add-courses/ngo-add-courses.component';
import { STEPTakeCourseComponent } from './Components/STEP/step-take-course/step-take-course.component';
import { TraineeTakenCoursesComponent } from './Components/Admin/trainee-taken-courses/trainee-taken-courses.component';
import { UserForgetPasswordComponent } from './Components/User/user-forget-password/user-forget-password.component';
import { CourseTakenComponent } from './Components/STEP/course-taken/course-taken.component';
import { NGOMyProgrammesComponent } from './Components/NGO/ngomy-programmes/ngomy-programmes.component';
import { STEPProfileComponent } from './Components/STEP/step-profile/step-profile.component';
import { NGOProfileComponent } from './Components/NGO/ngo-profile/ngo-profile.component';
import { STEPNavbarComponent } from './Components/STEP/step-navbar/step-navbar.component';
import { STEPHomeComponent } from './Components/STEP/step-home/step-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    UserLoginComponent,
    AdminLoginComponent,
    LandingComponent,
    FAQComponent,
    NGOLandingComponent,
    STEPLandingComponent,
    STEPAboutUsComponent,
    NGOAboutUsComponent,
    AdminLandingComponent,
    UserRegisterComponent,
    NgoSectionComponent,
    TraineeSectionComponent,
    AdminAboutusComponent,
    STEPREGISTERComponent,
    TrainingSectorsComponent,
    TrainingCoursesComponent,
    STEPStatusComponent,
    NGOCriteriaComponent,
    NGOOrganizationsComponent,
    NGOFundingNormsComponent,
    NGORegisterComponent,
    NGOStatusComponent,
    NGOAddCoursesComponent,
    STEPTakeCourseComponent,
    TraineeTakenCoursesComponent,
    UserForgetPasswordComponent,
    CourseTakenComponent,
    NGOMyProgrammesComponent,
    STEPProfileComponent,
    NGOProfileComponent,
    STEPNavbarComponent,
    STEPHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
