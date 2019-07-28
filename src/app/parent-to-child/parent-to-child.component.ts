import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.css']
})
export class ParentToChildComponent implements OnInit {

  constructor() { }
  @Input() public Send;
  @Output() public ev= new EventEmitter();
  ngOnInit() {
    
  }
  fun()
  {
    this.ev.emit("Hello from child");
  }

}
