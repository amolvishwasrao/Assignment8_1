import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  public Name="";
  constructor() {  console.log("Ctor of Two Way Binding")}

  ngOnInit() {
    console.log("Init of Two Way binding")
  }

  ngOnDestroy()
  {
    console.log("Destroy of two way binding");
    
  }

}
