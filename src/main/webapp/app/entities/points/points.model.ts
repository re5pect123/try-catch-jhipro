import { BaseEntity } from './../../shared';

export class Points implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public surname?: string,
    ) {
    }
}
