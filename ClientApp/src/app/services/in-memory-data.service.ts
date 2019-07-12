import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Datoslibros } from '../models/datoslibros';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
createDb() {
  const libros = [
    {ISBN: 11, Titulo: 'la maria', Precioventa: 3000, Popular: true},
    {ISBN: 12, Titulo: 'la maria', Precioventa: 3000, Popular: true},
    {ISBN: 13, Titulo: 'la maria', Precioventa: 3000, Popular: true},
    {ISBN: 14, Titulo: 'la maria', Precioventa: 3000, Popular: false},
  ];
  return {libros};
}

genId(tasks: Datoslibros[]): number {
  return tasks.length > 0 ? Math.max(...tasks.map(task => task.ISBN)) + 1 : 11;
}
}
