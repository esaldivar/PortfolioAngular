import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'work-nav',
	imports: [NgbNavModule, NgbNavModule],
	templateUrl: './nav.component.html',
})
export class NgbdNavVertical {
	active = 1;
}