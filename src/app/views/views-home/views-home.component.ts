import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent {

  stats = [
    { value: 22, label: 'Fave' }, 
    { value: 35, label: 'Followers' },
    { value: 15, label: 'Likes' },
    { value: 50000, label: 'Subscribers' }
  ];

  items = [
    { image: 'assets/images/couch.jpeg', title: 'Couch', description: 'Fantastic couch' },
    { image: 'assets/images/dresser.jpeg', title: 'Dresser', description: 'Great dresser' },
  ]
}
