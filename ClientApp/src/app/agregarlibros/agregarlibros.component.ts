import { Component, OnInit } from '@angular/core';
import { Datoslibros } from '../models/datoslibros';
import { DatoslibrosService } from '../services/datoslibros.service';

@Component({
  selector: 'app-agregarlibros',
  templateUrl: './agregarlibros.component.html',
  styleUrls: ['./agregarlibros.component.css']
})
export class AgregarlibrosComponent implements OnInit {

  constructor(private datoslibrosService: DatoslibrosService) { }
  datoslibrosk: Datoslibros;

  ngOnInit() {
    this.datoslibrosk = { ISBN: 0, Titulo: '', PrecioVenta: 0, popular: false};
  }

  add() {
    this.datoslibrosService.addlibros(this.datoslibrosk)
    .subscribe(datoslibrosk => {
      alert('se agrego un nuevo libro');
    });
  }
}
