import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare function allInit(): void;
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private router: Router) { }

  toElement(id: string){
    this.router.navigate([], {
      fragment: id
    });
    let element = document.getElementById(id);
    if(element){
      element.scrollIntoView();
    }
  }
  
  ngOnInit(): void {
    allInit();
  }

}
