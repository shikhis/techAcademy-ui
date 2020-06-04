import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentRegistrationFormComponent } from 'src/app/student-registration/student-registration-form/student-registration-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page-form/welcome-page.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomePageComponent},
  { path: '', redirectTo: 'sign', pathMatch: 'full'},
  { path: 'registerStudent', component: StudentRegistrationFormComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 appRoutingModule = RouterModule.forRoot(routes);
}
