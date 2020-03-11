import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   @Input() show; 
    
  onSubmit(firstName,lastName,Email,Password)
  {
    this.show=true;
    console.log("You submitted");
  }
  onClear()
  {
    this.show=false;
  }
  onConf()
  {
    confirm("Successfully registered");
  }
  ngOnInit() {
  }

}
