import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'gs-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
