import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) { }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  goToDetail() {
    let userId = '42';
    this.router.navigate(['/users/detail', userId]);
  }

}
