import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ContactsAppComponent} from './contacts.component';
import {ContactsHeaderComponent} from './contacts-header';
import {ContactsService} from './contacts.service';

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent],
  imports: [BrowserModule],
  bootstrap: [ContactsAppComponent],
  providers: [
    {
      provide: ContactsService, useClass: ContactsService
    }
  ]
  //ShortHand
  //providers: [ContactsService]
})

export class ContactsModule {
}
