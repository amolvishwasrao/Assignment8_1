import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-listner',
  templateUrl: './event-listner.component.html',
  styleUrls: ['./event-listner.component.css']
})
export class EventListnerComponent implements OnInit {

  public Name="";
  public temp:number;
  constructor() { }

  ngOnInit() {
  }

  fun(value:string)
  {
    this.Name=value;
    this.temp=  this.Name.length;

  }

}
