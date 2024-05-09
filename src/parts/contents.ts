import { Conf } from "../core/conf";
import { Func } from "../core/func";
import { MyDisplay } from "../core/myDisplay";
import { Param } from "../core/param";
import { Tween } from "../core/tween";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  private _selectTg: HTMLSelectElement

  constructor(opt:any) {
    super(opt)

    this._selectTg = document.querySelector('.l-main select') as HTMLSelectElement

    this._selectTg.innerHTML = ''
    const len = 100
    for (let i = 0; i < len; i++) {
      const opt = document.createElement('option')
      opt.value = i.toString()
      opt.text = i.toString()
      this._selectTg.appendChild(opt)

      if(i % 3 === 0) {
        this._selectTg.appendChild(document.createElement('hr'))
      }
    }
  }

  protected _update(): void {
    super._update()


  }
}