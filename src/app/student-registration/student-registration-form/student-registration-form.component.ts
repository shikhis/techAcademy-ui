import { Component, OnInit } from '@angular/core';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from 'src/app/shared/Validators/must-match.validator';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
    selector: 'app-student-registration-form',
    templateUrl: './student-registration-form.component.html',
    styleUrls: ['./student-registration-form.component.css']
  })
export class StudentRegistrationFormComponent implements OnInit {
  studentRegistrationForm: FormGroup;  
  
      constructor(private fb: FormBuilder, private router:Router) { 
          this.studentRegistrationForm = fb.group({  
              'userName' : [null, Validators.required],
              'password' : [null, Validators.required],   
              'name' : [null, Validators.required],
              'phoneno' : [null, Validators.required],
              'email' : [null, [Validators.required, Validators.email]],
            });
  
      }
      ngOnInit() {
          
      }
      onFormSubmit(form:NgForm){
          console.log(form); 
      }

     
  }