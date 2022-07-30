import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function allInit(): void;
@Component({
  selector: 'app-ripple',
  templateUrl: './ripple.component.html',
  styleUrls: ['./ripple.component.scss']
})
export class RippleComponent implements OnInit {
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
