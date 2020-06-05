import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomePageComponent } from 'src/app/welcome-page/welcome-page-form/welcome-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StudentRegistrationFormComponent } from 'src/app/student-registration/student-registration-form/student-registration-form.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { VideoConferenceComponent } from './video-conferencing/video-conference/video-conference.component';
import { environment } from 'src/environments/environment';
import { NgxAgoraModule } from 'ngx-agora';

//to be removed
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc'; // Add
const agoraConfig: AgoraConfig = {
  AppID: '5788f0cdbac7418caa9baac2eb30b967',
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    StudentRegistrationFormComponent,
    HeaderComponent,
    FooterComponent,
    VideoConferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
   // NgxAgoraModule.forRoot({ AppID: environment.agora.appId }) //uncooment later
    AngularAgoraRtcModule.forRoot(agoraConfig) // remove
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
