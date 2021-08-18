import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseDynamicControl } from '../model';
import { DynamicControlService } from '../services/dynamicControl.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [DynamicControlService]
})
export class DynamicFormComponent implements OnInit {
  @Input() textBoxes: BaseDynamicControl<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: DynamicControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.textBoxes as BaseDynamicControl<
      string
    >[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
