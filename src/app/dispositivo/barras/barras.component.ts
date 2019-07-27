import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.css']
})
export class BarrasComponent implements OnInit {
  data={
    dispositivos:[]
  };
  constructor() {
    this.data=JSON.parse(localStorage.getItem('tmpLote'));
  }
  ngOnInit() {
    setTimeout(() => {
      window.print();
      window.history.go(-1);
    }, 500);
  }

}
