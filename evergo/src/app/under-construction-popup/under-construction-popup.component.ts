import { Component, OnInit,TemplateRef,ViewChild, Directive } from '@angular/core';
import {NgbModal,NgbActiveModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Directive({selector: 'child-directive'})

class ChildDirective {
}

@Component({
  selector: 'app-under-construction-popup',
  templateUrl: './under-construction-popup.component.html',
  styleUrls: ['./under-construction-popup.component.css']
})
export class UnderConstructionPopupComponent implements OnInit {
  closeResult: string;
  
  constructor(private modalService: NgbModal,public activeModal: NgbActiveModal) { }

  @ViewChild('content') myModal: any;

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  template1:any
  ngOnInit() {
    this.modalService.open(this.myModal, {ariaLabelledBy: 'modal-basic-title'})
   
    
    //ViewChild('content')  template1:TemplateRef<any>;
  }
  onChanges(){

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
