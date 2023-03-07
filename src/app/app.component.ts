import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { tap } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'country',
      type: 'input',
      props: {
        label: 'Country',
        placeholder: 'Type Here',
        required: true,
      },
    },
    {
      key: 'city',
      type: 'input',
      props: {
        label: 'City',
        placeholder: 'Check the console log!',
        required: true,
      },
      expressions: {
        // city field is rendered only when `country` is set
        hide: (field: FormlyFieldConfig) => !field.model?.country,
      },
      hooks: {
        onInit: (field) => {
          return field.options.fieldChanges.pipe(
            filter((e) => {
              return (
                e.type === 'expressionChanges' &&
                e.field === field &&
                e.property === 'hide' &&
                e.value === false
              );
            }),
            tap((e) => console.warn('City field is shown', e))
          );
        },
      },
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}

/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */
