import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ContactsAppComponent} from './contacts.component';
import {ContactsHeaderComponent} from './contacts-header';
import {ContactsService} from './contacts.service';
import {RouterModule} from '@angular/router';
import {ContactsAppRoutes} from './app.routes';
import {ContactsListComponent} from './contacts-list/contacts-list.component';

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent, ContactsListComponent],
  imports: [BrowserModule, RouterModule.forRoot(ContactsAppRoutes)],
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
