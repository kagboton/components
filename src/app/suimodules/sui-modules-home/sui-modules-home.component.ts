import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sui-modules-home',
  templateUrl: './sui-modules-home.component.html',
  styleUrl: './sui-modules-home.component.css'
})
export class SuiModulesHomeComponent {

  modalOpen = false;

  onClick = () => { 
    this.modalOpen = !this.modalOpen;
  }

  accordionItems = [
    { title: "Why is sky blue?", content: "Sky Blue" },
    { title: "What is the sun?", content: "The Sun" },
    { title: "Whats like an orange taste like", content: "It taste sweet" }
  ];
}
