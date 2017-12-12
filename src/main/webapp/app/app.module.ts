import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { VezbaJhipsterKnjigaSharedModule, UserRouteAccessService } from './shared';
import { VezbaJhipsterKnjigaAppRoutingModule} from './app-routing.module';
import { VezbaJhipsterKnjigaHomeModule } from './home/home.module';
import { VezbaJhipsterKnjigaAdminModule } from './admin/admin.module';
import { VezbaJhipsterKnjigaAccountModule } from './account/account.module';
import { VezbaJhipsterKnjigaEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        VezbaJhipsterKnjigaAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        VezbaJhipsterKnjigaSharedModule,
        VezbaJhipsterKnjigaHomeModule,
        VezbaJhipsterKnjigaAdminModule,
        VezbaJhipsterKnjigaAccountModule,
        VezbaJhipsterKnjigaEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class VezbaJhipsterKnjigaAppModule {}
