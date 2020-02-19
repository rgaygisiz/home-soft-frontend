import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared';
import { BodyComponent, ContentComponent, HeaderComponent, ProjectComponent, SidebarComponent } from './components';
import { AppComponent } from './containers';
import { fromSite } from './reducers';
import { SiteRoutingModule } from './site-routing.module';

export const COMPONENTS = [
    HeaderComponent,
    BodyComponent,
    ProjectComponent,
    ContentComponent,
    SidebarComponent,
    AppComponent
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        MatIconModule,
        MatToolbarModule,
        SharedModule,
        MatSidenavModule,
        MatListModule,
        MatTreeModule,
        MatButtonModule,
        SiteRoutingModule,
        StoreModule.forFeature(fromSite.siteFeatureKey, fromSite.reducer)
    ],
    exports: [
        HeaderComponent,
        BodyComponent,
    ]
})
export class SiteModule {

}