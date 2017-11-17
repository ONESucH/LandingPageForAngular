import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.less']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      console.log($);
  }

}
