import { DOCUMENT } from '@angular/common'
import { Component, Inject, OnInit, ViewChild } from '@angular/core'
import {
  DataGridComponent,
  GridCellCoordinates,
  GridCellValue,
  GridImplementationFactory,
  IGridCellValue,
  IGridRow,
  TColumnKey,
} from '@blueshiftone/ngx-grid-core'

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

  public themeMode = 'light'

  constructor(@Inject(DOCUMENT) private readonly doc: Document,) { }

  ngOnInit(): void {

    // this.gridComponent.events.eventStream.subscribe(e => {
    //   console.log(e.eventName)
    // })

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
          [ 'Colors', Math.random() < 0.50 ? this._distinctValues([ randomFromArray(colors), randomFromArray(colors) ]) : ( Math.random() < 0.25 ? this._distinctValues([ randomFromArray(colors), randomFromArray(colors), randomFromArray(colors) ]) : null) ],
          [ 'Amount', parseFloat(`${randomIntFromInterval(1, 9999)}.${randomIntFromInterval(1, 999)}`) ],
          [ 'Percent', Math.random().toPrecision(3) ],
          [ 'IsVisible', Math.random() > 0.5 ],
          [ 'Volume', parseFloat(`${randomIntFromInterval(1, 99999)}.${randomIntFromInterval(1, 99999)}`) ],
          [ 'Users', Math.random() < 0.65 ? randomFromArray(gridUserRows).rowKey : null ],
          [ 'Date', randomDate() ],
          [ 'Category', Math.random() < 0.65 ? randomFromArray(categoryOptions).value : null ],
          [ 'UsersMulti', Math.random() < 0.65 ? [ randomFromArray(gridUserRows).rowKey, randomFromArray(gridUserRows).rowKey ]: null ],
          [ 'Notes', `<p>${randomLipsum(6)}</p>` ],
        ] as const).map<[string, IGridCellValue]>(v => [v[0], new GridCellValue(new GridCellCoordinates(rowKey, v[0]), v[1])]))
      ))

      this.dataSource.data.next({
        columns: finalRows[0].valuesArray.map(item => item.columnKey),
        rows: finalRows
      }) 

    }
    
  }

  public ToggleThemeMode(): void {
    this.doc.documentElement.classList.remove(`${this.themeMode}-theme`)
    this.themeMode = this.themeMode === 'light' ? 'dark' : 'light'
    this.doc.documentElement.classList.add(`${this.themeMode}-theme`)
    this.doc.documentElement.style.setProperty('color-scheme', this.themeMode)
  }

  private _random(): string {
    return Math.random().toString(36).substr(2)
  }

  private _distinctValues<T>(input: Array<T>): Array<T> {
    return Array.from(new Set(input))
  }

}
