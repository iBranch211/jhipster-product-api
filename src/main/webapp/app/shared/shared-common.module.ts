import {NgModule} from '@angular/core';

import {FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent, ProductSharedLibsModule} from './';

@NgModule({
  imports: [ProductSharedLibsModule],
  declarations: [FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ProductSharedLibsModule, FindLanguageFromKeyPipe, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProductSharedCommonModule {}
