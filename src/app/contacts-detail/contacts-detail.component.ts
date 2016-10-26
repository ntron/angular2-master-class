import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactsService} from "../contacts.service";
import {Contact} from "../models/contact";

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {

  contact:Contact;

  constructor(private route: ActivatedRoute, private contactService: ContactsService) {

  }

  ngOnInit() {
   this.contact = this.contactService.getContact(this.route.snapshot.params['id']);
  }

}