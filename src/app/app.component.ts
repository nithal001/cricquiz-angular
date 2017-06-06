import { Component, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

import '../assets/style/styles.scss';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private modalService: NgbModal) {}

    openLoginModal() {
        const modalRef = this.modalService.open(LoginComponent);
    }
}
