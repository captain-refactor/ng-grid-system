import {NgModule} from '@angular/core';
import {ContainerComponent} from './container/container.component';
import {RowComponent} from './row/row.component';
import {ColumnComponent} from './column/column.component';


@NgModule({
  declarations: [ContainerComponent, RowComponent, ColumnComponent],
  imports: [],
  exports: [ContainerComponent, RowComponent, ColumnComponent]
})
export class NgGridSystemModule {
}
