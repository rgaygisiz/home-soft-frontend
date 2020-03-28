import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Account } from '../../models';

@Component({
  selector: 'kosaml-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnChanges {
  @Input()
  data: Account[];

  dataSource = new MatTableDataSource<Account>();
  displayedColumns: string[] = ['number', 'name', 'holder', 'actions'];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource.data = this.data;
  }
}
