import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { VezbaJhipsterKnjigaSharedModule } from '../../shared';
import {
    PointsService,
    PointsPopupService,
    PointsComponent,
    PointsDetailComponent,
    PointsDialogComponent,
    PointsPopupComponent,
    PointsDeletePopupComponent,
    PointsDeleteDialogComponent,
    pointsRoute,
    pointsPopupRoute,
    PointsResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...pointsRoute,
    ...pointsPopupRoute,
];

@NgModule({
    imports: [
        VezbaJhipsterKnjigaSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        PointsComponent,
        PointsDetailComponent,
        PointsDialogComponent,
        PointsDeleteDialogComponent,
        PointsPopupComponent,
        PointsDeletePopupComponent,
    ],
    entryComponents: [
        PointsComponent,
        PointsDialogComponent,
        PointsPopupComponent,
        PointsDeleteDialogComponent,
        PointsDeletePopupComponent,
    ],
    providers: [
        PointsService,
        PointsPopupService,
        PointsResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VezbaJhipsterKnjigaPointsModule {}
