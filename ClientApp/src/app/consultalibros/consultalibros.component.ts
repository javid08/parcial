import { Component, OnInit } from '@angular/core';
import { DatoslibrosService } from '../services/datoslibros.service';
import { Datoslibros } from '../models/datoslibros';


@Component({
  selector: 'app-consultalibros',
  templateUrl: './consultalibros.component.html',
  styleUrls: ['./consultalibros.component.css']
})
export class ConsultalibrosComponent implements OnInit {

  datoslibroskj: Datoslibros[];

  constructor(private datoslibrosService: DatoslibrosService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.datoslibrosService.getAll().subscribe(datoslibrosk => this.datoslibroskj = datoslibrosk);
  }

}
