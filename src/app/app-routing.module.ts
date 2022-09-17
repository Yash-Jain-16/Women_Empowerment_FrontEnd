import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminAboutusComponent } from './Components/Admin/admin-aboutus/admin-aboutus.component';
import { AdminLandingComponent } from './Components/Admin/admin-landing/admin-landing.component';
import { AdminLoginComponent } from './Components/Admin/admin-login/admin-login.component';
import { NgoSectionComponent } from './Components/Admin/ngo-section/ngo-section.component';
import { TraineeSectionComponent } from './Components/Admin/trainee-section/trainee-section.component';
import { TraineeTakenCoursesComponent } from './Components/Admin/trainee-taken-courses/trainee-taken-courses.component';
import { AboutUsComponent } from './Components/BasePage/about-us/about-us.component';
import { FAQComponent } from './Components/BasePage/faq/faq.component';
import { LandingComponent } from './Components/BasePage/landing/landing.component';
import { NavbarComponent } from './Components/BasePage/navbar/navbar.component';
import { NGOAboutUsComponent } from './Components/NGO/ngo-about-us/ngo-about-us.component';
import { NGOAddCoursesComponent } from './Components/NGO/ngo-add-courses/ngo-add-courses.component';
import { NGOCriteriaComponent } from './Components/NGO/ngo-criteria/ngo-criteria.component';
import { NGOFundingNormsComponent } from './Components/NGO/ngo-funding-norms/ngo-funding-norms.component';
import { NGOLandingComponent } from './Components/NGO/ngo-landing/ngo-landing.component';
import { NGOOrganizationsComponent } from './Components/NGO/ngo-organizations/ngo-organizations.component';
import { NGOProfileComponent } from './Components/NGO/ngo-profile/ngo-profile.component';
import { NGORegisterComponent } from './Components/NGO/ngo-register/ngo-register.component';
import { NGOStatusComponent } from './Components/NGO/ngo-status/ngo-status.component';
import { NGOMyProgrammesComponent } from './Components/NGO/ngomy-programmes/ngomy-programmes.component';
import { CourseTakenComponent } from './Components/STEP/course-taken/course-taken.component';
import { STEPAboutUsComponent } from './Components/STEP/step-about-us/step-about-us.component';
import { STEPLandingComponent } from './Components/STEP/step-landing/step-landing.component';
import { STEPProfileComponent } from './Components/STEP/step-profile/step-profile.component';
import { STEPREGISTERComponent } from './Components/STEP/step-register/step-register.component';
import { STEPStatusComponent } from './Components/STEP/step-status/step-status.component';
import { STEPTakeCourseComponent } from './Components/STEP/step-take-course/step-take-course.component';
import { TrainingCoursesComponent } from './Components/STEP/training-courses/training-courses.component';
import { TrainingSectorsComponent } from './Components/STEP/training-sectors/training-sectors.component';
import { UserForgetPasswordComponent } from './Components/User/user-forget-password/user-forget-password.component';
import { UserLoginComponent } from './Components/User/user-login/user-login.component';
import { UserRegisterComponent } from './Components/User/user-register/user-register.component';

const routes: Routes = [
  { path:  '', redirectTo:'/home', pathMatch:  'full' },
  {path:"home",component:LandingComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"homefaq",component:FAQComponent},
  // STEP Routes=====================================================
  {path:"stepaboutus",component:STEPAboutUsComponent},
  {path:"steplanding",component:STEPLandingComponent},
  {path:"stepregister",component:STEPREGISTERComponent},
  {path:"steptrainingcourses",component:TrainingCoursesComponent},
  {path:"steptrainingsectors",component:TrainingSectorsComponent},
  {path:"stepstatus",component:STEPStatusComponent},
  {path:"steptakecourse",component:STEPTakeCourseComponent},
  {path:"coursetaken",component:CourseTakenComponent},
  {path:"stepmyprofile",component:STEPProfileComponent},
  // NGO Routes======================================================================
  {path:"ngolanding",component:NGOLandingComponent},
  {path:"ngoaboutus",component:NGOAboutUsComponent},
  {path:"ngocriteria",component:NGOCriteriaComponent},
  {path:"ngoorganizations",component:NGOOrganizationsComponent},
  {path:"ngoFundingNorms",component:NGOFundingNormsComponent},
  {path:"ngoregister",component:NGORegisterComponent},
  {path:"ngostatus",component:NGOStatusComponent},
  {path:"ngoaddcourses",component:NGOAddCoursesComponent},
  {path:"ngoprogrammes",component:NGOMyProgrammesComponent},
  {path:"ngomyprofile",component:NGOProfileComponent},
  // User Route =====================================================================
  {path:"userlogin",component:UserLoginComponent},
  {path:"userregister",component : UserRegisterComponent},
  {path:"forgetpassword",component:UserForgetPasswordComponent},
  // Admin Routes ====================================================================
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"adminaboutus",component:AdminAboutusComponent},
  {path:"adminlanding",component:AdminLandingComponent},
  {path:"adminngosection",component:NgoSectionComponent},
  {path:"admintraineesection",component:TraineeSectionComponent},
  {path:"admintraineetakencourse",component:TraineeTakenCoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
