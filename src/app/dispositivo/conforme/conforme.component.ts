import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conforme',
  templateUrl: './conforme.component.html',
  styleUrls: ['./conforme.component.css']
})
export class ConformeComponent implements OnInit {
  data=[];
  constructor() {
    this.data=JSON.parse(localStorage.getItem('tmpQA'));
    if(this.data==null) this.data=[];
  }

  ngOnInit() {
    
  }

}
