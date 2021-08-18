import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { BaseDynamicControl } from './model';
import { DynamicControlService } from './services/dynamicControl.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  textBoxes$: Observable<BaseDynamicControl<any>[]>;
  constructor(private dynamicControlService: DynamicControlService) {}

  ngOnInit() {
    this.textBoxes$ = this.dynamicControlService.getTextBoxes();
  }
}
