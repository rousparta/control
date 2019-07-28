import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css']
})
export class CertificadoComponent implements OnInit {

  data={
    dispositivos:[]
  };

  ahora = new Date();
  constructor() {
    this.data=JSON.parse(localStorage.getItem('tmpQA'));
    // if(this.data==null) this.data=[];
    console.log(this.data);
  }

  ngOnInit() {
  }

}
