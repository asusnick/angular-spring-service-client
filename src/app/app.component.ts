import {Component, Input} from '@angular/core';
import { NgModule } from '@angular/core';
import { UserInputTableComponent } from './components/user-input-table/user-input-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input()
  firstName: String;
  title = 'app';
}
