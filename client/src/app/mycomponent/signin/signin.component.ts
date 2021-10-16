import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  formGroup:FormGroup

  constructor(private authService:AuthServiceService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.formGroup= new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }
  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.status){
          console.log(result)
          alert(result.message)
        }else{
          alert(result.message)
        }
      })
    }
  }

}
