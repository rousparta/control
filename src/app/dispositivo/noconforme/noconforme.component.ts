import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noconforme',
  templateUrl: './noconforme.component.html',
  styleUrls: ['./noconforme.component.css']
})
export class NoconformeComponent implements OnInit {

  data={
    dispositivos:[]
  };
  constructor() {
    this.data=JSON.parse(localStorage.getItem('tmpQA'));
    // if(this.data==null) this.data=[];
    //console.log(this.data);
  }

  ngOnInit() {
  }

}
