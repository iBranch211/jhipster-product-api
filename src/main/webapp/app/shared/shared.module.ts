import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HasAnyAuthorityDirective, ProductSharedCommonModule} from './';

@NgModule({
  imports: [ProductSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [ProductSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductSharedModule {
  static forRoot() {
    return {
      ngModule: ProductSharedModule
    };
  }
}
