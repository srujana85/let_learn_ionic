import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.page.html',
  styleUrls: ['./twoway.page.scss'],
})
export class TwowayPage implements OnInit {

  constructor(private router: Router) { }
  data = {
    name: 'Unknown',
    age: 18,
    dob: new Date().toJSON().slice(0, 10).replace(/-/g, '-')
  }
  ngOnInit() {
  }
  letNavigate() {
    console.log(this.data);
    if (this.data.age < 18) {
      Swal.fire("Age cannot Be below 18");
    } else {
      const result = this.data;
      const navigationExtras = {
        state: {
          result
        }
      };
      this.router.navigate(['http'], navigationExtras);
    }

  }



}
