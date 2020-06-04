import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page-form/welcome-page.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [WelcomePageComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class WelcomePageModule { }
