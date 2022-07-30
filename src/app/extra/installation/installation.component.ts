import { Component, OnInit } from '@angular/core';
declare function allInit(): void;
@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss']
})
export class InstallationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    allInit();
  }

}