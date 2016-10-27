import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Contact} from "../models/contact";
import {ContactsService} from "../contacts.service";
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(private contactsService: ContactsService) {
  }

  search(term: string) {
    this.contacts = this.contactsService
      .search(term)
  }

  ngOnInit() {

    this.contacts = this.terms$.debounceTime(400) //Observable<string>
      .distinctUntilChanged()
      .switchMap((term)=> this.contactsService.search(term))//Observable<Array<Contact>>
      //.merge(this.contactsService.getContacts().delay(5000).takeUntil(this.terms$));
      .merge(this.contactsService.getContacts());



   /* Variante 2

      let searchObs   = this.terms$.debounceTime(400) //Observable<string>
      .distinctUntilChanged()
      .switchMap((term)=> this.contactsService.search(term))//Observable<Array<Contact>>
      let initObs = this.contactsService.getContacts();
      this.contacts = Observable.merge(searchObs);
      */
  };



}
