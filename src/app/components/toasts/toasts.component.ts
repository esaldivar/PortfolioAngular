import { Component } from '@angular/core';
import { AppToastService } from '../../services/toasts.service';
import { NgTemplateOutlet } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toasts',
  imports: [NgbToastModule, NgTemplateOutlet],
  templateUrl: './toasts.component.html',
  styleUrl: './toasts.component.scss'
})
export class ToastsComponent {
  constructor(public toastService: AppToastService){}
}
