import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Contact} from "../models/contact";
import {ContactsService} from "../contacts.service";
import {EventbusService} from "../eventbus.service";

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {

  contact: Contact;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private contactsService: ContactsService,
              private eventbusService: EventbusService) {
  }

  ngOnInit() {
    this.contactsService.getContact(this.route.snapshot.params['id'])
      .subscribe(
        contact => {
          this.contact = contact;
          this.eventbusService.emit('titleChange', contact.name);
        }
      );
  }

  private navigateToEditor(contact) {
    this.router.navigate(['/contact', contact.id, 'edit']);
  }


  private navigateToList() {
    this.router.navigate(['/']);
  }

}
