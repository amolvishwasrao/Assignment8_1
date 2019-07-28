import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-hooks',
  templateUrl: './angular-hooks.component.html',
  styleUrls: ['./angular-hooks.component.css']
})
export class AngularHooksComponent implements OnInit {

  constructor() {console.log("Ctor of Angular hooks") }

  ngOnInit()
  {
    console.log("Init of component Angular Hook")
  }

  ngOnDestroy()
  {
    console.log("Destroy of Angular hooks");
    
  }

  ngOnChanges()
  {
    console.log("Chnages of Angular hooks");
    
  }

}
