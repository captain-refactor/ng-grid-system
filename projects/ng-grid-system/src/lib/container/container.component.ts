import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'gs-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerComponent implements OnInit {

  // @HostBinding('class') hostClass = "container";

  constructor() {
  }

  ngOnInit(): void {
  }

}
