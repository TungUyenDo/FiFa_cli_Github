import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../components/header/header.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent,
        CommonModule, FormsModule]
})
export class SharedModule { }