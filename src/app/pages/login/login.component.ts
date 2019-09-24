import { Component, OnInit } from '@angular/core';

import { faSignInAlt, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faSignInAlt: IconDefinition = faSignInAlt;

  constructor() { }

  ngOnInit() {
  }

}
