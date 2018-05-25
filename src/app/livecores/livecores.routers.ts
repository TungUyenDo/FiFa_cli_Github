import { LivecoresComponent } from './livecores.component';
import { DetailMatchesComponent } from './detail-matches/detail-matches.component';
import { ListMatchesComponent } from './list-matches/list-matches.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: LivecoresComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: "list", component: ListMatchesComponent },
            { path: "detail", component: DetailMatchesComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LiveCoresRoutingModule { }
