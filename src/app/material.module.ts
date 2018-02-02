import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatCardModule, MatSidenavModule,
    MatFormFieldModule, MatInputModule, MatTooltipModule
} from '@angular/material';

const materialModules = [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
];

@NgModule({
    imports: [...materialModules],
    exports: [...materialModules],
})

export class MaterialModule {

}