import { Component, OnInit } from '@angular/core';
// Must import to use Forms functionality  
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome-page-form',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

    welcomeForm: FormGroup;  

    constructor(private fb: FormBuilder, private router:Router) { 
        this.welcomeForm = fb.group({  
            'userName' : [null, Validators.required],
            'password' : [null, Validators.required]   
          });

    }
    ngOnInit() {
        
    }
    onFormSubmit(form:NgForm){
        console.log(form); 
    }

    goToStudentRegistration(){
      console.log("registration");
      this.router.navigateByUrl('/registerStudent');
    }
   
}