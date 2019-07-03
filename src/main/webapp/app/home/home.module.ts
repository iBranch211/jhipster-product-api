import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ProductSharedModule} from 'app/shared';
import {HOME_ROUTE, HomeComponent} from './';

@NgModule({
  imports: [ProductSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductHomeModule {}
