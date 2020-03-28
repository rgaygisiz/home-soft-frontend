import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Person } from '../../models';

@Component({
  selector: 'kosaml-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnChanges {
  @Input()
  data: Person[];

  dataSource = new MatTableDataSource<Person>();
  displayedColumns: string[] = ['firstName', 'lastName', 'birthDate', 'birthPlace'];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.data = this.data;
  }
}
