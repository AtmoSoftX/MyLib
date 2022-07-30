import { Component , OnInit } from '@angular/core';
declare function allInit(): void;
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    allInit();
  }

}