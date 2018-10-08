import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const element = window.document.getElementById('roomii');
    element.focus();
  }
}
