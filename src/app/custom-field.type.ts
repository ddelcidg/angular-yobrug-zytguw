import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-custom-input',
  template: ` <input [type]="type" [formControl]="formControl" [formlyAttributes]="field" /> `,
})
export class CustomFieldType extends FieldType<FieldTypeConfig> {
  get type() {
    return this.props.type || 'text';
  }
}


/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */