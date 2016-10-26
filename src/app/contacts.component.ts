import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';


@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  /*template: `
    <ul class="collection">
      <li class="collection-item avatar" *ngFor="let contact of contacts">
        <img [src]=contact.image alt="" class="circle">
        <span class="title" [title]=contact.name >{{contact.name}}</span>
      </li>
    </ul>`,*/
  styleUrls: ['contacts.component.css']
})

export class ContactsAppComponent {
  contacts: Contact[] = CONTACT_DATA;
}

/*
export class ContactsAppComponent {
  title = 'Angular 2 Master Class setup works!';
  contact: Contact = {
    id: 7,
    name: 'Diana Ellis',
    email: '',
    phone: '',
    birthday: '',
    website: '',
    image: '/assets/images/6.jpg',
    address: {
      street: '6554 park lane',
      zip: '43378',
      city: 'Rush',
      country: 'United States'
    }
  }
}*/

