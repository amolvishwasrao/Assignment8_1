import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  templateUrl: './child-parent.component.html',
  styleUrls: ['./child-parent.component.css']
})
export class ChildParentComponent implements OnInit {

  public message="";
  @Output() public obj = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fun()
  {
    this.message="click and going to parent"
    this.obj.emit(this.message);    
    
  }
}
