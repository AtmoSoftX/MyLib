import { Component, OnInit } from '@angular/core';
declare function allInit(): void;

@Component({
  selector: 'app-components-home',
  templateUrl: './components-home.component.html',
  styleUrls: ['./components-home.component.scss']
})
export class ComponentsHomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    allInit();
  }

}
