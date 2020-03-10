import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    show; 
    
  onSubmit(firstName,lastName,Email,Password)
  {
    this.show=true;
    console.log("You submitted");
  }
  ngOnInit() {
  }

}
