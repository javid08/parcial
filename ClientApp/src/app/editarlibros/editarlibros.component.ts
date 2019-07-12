import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatoslibrosService } from '../services/datoslibros.service';
import { Datoslibros } from '../models/datoslibros';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editarlibros',
  templateUrl: './editarlibros.component.html',
  styleUrls: ['./editarlibros.component.css']
})
export class EditarlibrosComponent implements OnInit {
  datoslibrosk: Datoslibros;
  stask: string;

  constructor(private route: ActivatedRoute,
    private datoslibrosService: DatoslibrosService,
    private location: Location) { }

  ngOnInit() {
   this.get();
  }

  get(): void {
    const ISBN = +this.route.snapshot.paramMap.get('ISBN');
    this.datoslibrosService.get(ISBN)
      .subscribe(hero => this.datoslibrosk = hero);
  }

  update(): void {
    this.datoslibrosService.update(this.datoslibrosk)
    .subscribe(() => this.goBack());
  }

  delete(): void {
    this.datoslibrosService.delete(this.datoslibrosk)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
