import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  languages = ["Javascript", "HTML5", "CSS"]

  constructor() { }

  ngOnInit() {
  }

}
