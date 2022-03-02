import { Component, OnInit, ViewChild } from '@angular/core'
import {
  DataGridComponent,
  GridCellCoordinates,
  GridCellValue,
  GridImplementationFactory,
  IGridCellValue,
  IGridRow,
  TColumnKey,
} from '@blueshiftone/ngx-grid-core'
import { filter } from 'rxjs'

import {
  categoryOptions,
  colors,
  demoGridDataSource,
  gridUserRows,
  randomDate,
  randomFromArray,
  randomIntFromInterval,
  randomLipsum,
} from './dummy-data'

@Component({
  selector: 'app-data-grid-demo',
  templateUrl: './data-grid-demo.component.html',
  styleUrls: ['./data-grid-demo.component.scss']
})
export class DatagGridDemoComponent implements OnInit {

  @ViewChild('grid', { read: DataGridComponent, static: true }) public gridComponent!: DataGridComponent

  public readonly dataSource = demoGridDataSource

  public eventLog: string[] = [];

  constructor() { }

  ngOnInit(): void {

    this.gridComponent.events.eventStream.pipe(filter(e => !e.eventName.includes('MouseEntered'))).subscribe(e => {
      this.eventLog.unshift(e.eventName)
    })

    const finalRows: IGridRow[] = []

    for (let i = 0; i < 3000; i++) {
      
      const rowKey = this._random()
      finalRows.push(GridImplementationFactory.gridRow(
        this.dataSource.primaryColumnKey,
        new Map<TColumnKey, IGridCellValue>(([
          [ 'GUID', rowKey ],
          [ 'RecordID', i+1 ],
          [ 'Code', randomLipsum(2).replace(/\s/g, '_').toUpperCase() ],
          [ 'Description', randomLipsum(4) ],
          [ 'IsVisible', Math.random() > 0.5 ],
          [ 'Amount', parseFloat(`${randomIntFromInterval(1, 9999)}.${randomIntFromInterval(1, 999)}`) ],
          [ 'Percent', Math.random().toPrecision(3) ],
          [ 'Volume', parseFloat(`${randomIntFromInterval(1, 99999)}.${randomIntFromInterval(1, 99999)}`) ],
          [ 'Date', randomDate() ],
          [ 'Notes', `<p>${randomLipsum(6)}</p>` ],
          [ 'Category', Math.random() < 0.65 ? randomFromArray(categoryOptions).value : null ],
          [ 'Users', Math.random() < 0.65 ? randomFromArray(gridUserRows).rowKey : null ],
          [ 'UsersMulti', Math.random() < 0.65 ? [ randomFromArray(gridUserRows).rowKey, randomFromArray(gridUserRows).rowKey ]: null ],
          [ 'Colors', Math.random() < 0.50 ? this._distinctValues([ randomFromArray(colors), randomFromArray(colors) ]) : ( Math.random() < 0.25 ? this._distinctValues([ randomFromArray(colors), randomFromArray(colors), randomFromArray(colors) ]) : null) ],
        ] as const).map<[string, IGridCellValue]>(v => [v[0], new GridCellValue(new GridCellCoordinates(rowKey, v[0]), v[1])]))
      ))

      this.dataSource.data.next({
        columns: finalRows[0].valuesArray.map(item => item.columnKey),
        rows: finalRows
      }) 

    }
    
  }

  private _random(): string {
    return Math.random().toString(36).substr(2)
  }

  private _distinctValues<T>(input: Array<T>): Array<T> {
    return Array.from(new Set(input))
  }

}
