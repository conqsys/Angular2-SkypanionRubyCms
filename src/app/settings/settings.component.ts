import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app-unit'
  selector: 'app-settings',  // <app-unit></app-unit>
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './settings.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
  // Set our default values
  public localState = { value: '' };
  public cars:Array<Object>=[];
  // TypeScript public modifiers
  constructor(
    public appState: AppState
   
  ) {

     this.cars=['BMW','Audi' ]
  }

  public ngOnInit() {
    console.log('hello `Unit` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
