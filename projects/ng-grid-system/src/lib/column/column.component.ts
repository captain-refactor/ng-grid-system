import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'gs-col',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColumnComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
