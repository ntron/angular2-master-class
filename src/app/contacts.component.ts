import {Component, OnInit} from '@angular/core';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {EventbusService} from "./eventbus.service";
import {Observer} from 'rxjs/Observer';


@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})


export class ContactsAppComponent {

  title:string;

  constructor(private eventbus: EventbusService) {}

  ngOnInit() {
    this.eventbus.observe('titleChange')
      .subscribe(title => this.title = title);
  }


}
