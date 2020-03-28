import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Bank } from '../../models';

@Component({
  selector: 'kosaml-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss'],
})
export class BanksComponent implements OnChanges {
  @Input()
  data: Bank[];

  dataSource = new MatTableDataSource<Bank>();
  displayedColumns: string[] = ['name', 'bic', 'blz', 'actions'];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.data = this.data;
  }
}
