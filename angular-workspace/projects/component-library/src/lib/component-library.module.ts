import { NgModule } from '@angular/core';
import { MyComponent } from './stencil-generated/components';


const DECLARATIONS = [
  MyComponent
];

@NgModule({
  declarations: [
    DECLARATIONS
  ],
  imports: [
  ],
  exports: [
    DECLARATIONS
  ]
})
export class ComponentLibraryModule { }
