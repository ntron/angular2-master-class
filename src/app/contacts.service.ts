import { Http } from '@angular/http';
import {Injectable} from '@angular/core';
//import {CONTACT_DATA} from './data/contact-data';

@Injectable()
export class ContactsService {

  private API_ENDPOINT = 'http://localhost:4201/api';


  constructor(private http: Http ) {  }

  getContact(id: string) {
    return this.http.get(`${this.API_ENDPOINT}/contacts/${id}`)
      .map((res) => { return res.json(); })
      .map((data) => { return data.item; });
  }

  getContacts() {
    return this.http.get(`${this.API_ENDPOINT}/contacts/`)
      .map((res) => { return res.json(); })
      .map((data) => { return data.items; });
  }
}
