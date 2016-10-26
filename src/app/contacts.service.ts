import { Http } from '@angular/http';
import {Injectable} from '@angular/core';
import { Contact } from './models/contact';

//import {CONTACT_DATA} from './data/contact-data';

@Injectable()
export class ContactsService {

  private API_ENDPOINT = 'http://localhost:4201/api/contacts/';


  constructor(private http: Http ) {  }

  getContact(id: string) {
    return this.http.get(`${this.API_ENDPOINT}${id}`)
      .map((res) => { return res.json(); })
      .map((data) => { return data.item; });
  }

  getContacts() {
    return this.http.get(`${this.API_ENDPOINT}`)
      .map((res) => { return res.json(); })
      .map((data) => { return data.items; });
  }

  updateContact(contact: Contact) {
    return this.http.put(`${this.API_ENDPOINT}${contact.id}`, contact);
  }
}
