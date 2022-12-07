import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
// import {} from '@a'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  loginFunc(item:any){
    console.log(item)
  }

  loginForm = new FormGroup({
    name: new FormControl(' ')
  })
  buttonSubmit(){
    console.log(this.loginForm.value)
  }
}
