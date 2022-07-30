import { Component, OnInit } from '@angular/core';
import { 
  trigger,
  transition,
  style,
  animate,
  query
} from '@angular/animations';
declare function allInit(): void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations',[
      transition('* <=> *', [
        style({
          pointerEvents: 'none'
        }),
        query(':leave, :enter', [
          style({ 
            position: 'absolute',
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 })
        ], { optional: true }),
        query(':leave', [
          style({ opacity: 1 }),
          animate(300, style({ opacity: 0 })),
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          animate(300, style({ opacity: 1 })),
        ], { optional: true }),
      ]),
    ]),
  ]
})
export class AppComponent implements OnInit{
  title = 'MyLib';
  ngOnInit(){
    allInit();
  }
  prepareRoute(outlet: any) {
    if (outlet.isActivated) {
      return outlet.activatedRoute.snapshot.url;
    } else {
      return null;
    }
  }
}
