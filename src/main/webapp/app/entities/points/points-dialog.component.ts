import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Points } from './points.model';
import { PointsPopupService } from './points-popup.service';
import { PointsService } from './points.service';

@Component({
    selector: 'jhi-points-dialog',
    templateUrl: './points-dialog.component.html'
})
export class PointsDialogComponent implements OnInit {

    points: Points;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private pointsService: PointsService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.points.id !== undefined) {
            this.subscribeToSaveResponse(
                this.pointsService.update(this.points));
        } else {
            this.subscribeToSaveResponse(
                this.pointsService.create(this.points));
        }
    }

    private subscribeToSaveResponse(result: Observable<Points>) {
        result.subscribe((res: Points) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Points) {
        this.eventManager.broadcast({ name: 'pointsListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-points-popup',
    template: ''
})
export class PointsPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private pointsPopupService: PointsPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.pointsPopupService
                    .open(PointsDialogComponent as Component, params['id']);
            } else {
                this.pointsPopupService
                    .open(PointsDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
