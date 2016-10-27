import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import {ContactsAppComponent} from './contacts.component';
import {ContactsHeaderComponent} from './contacts-header';
import {ContactsService} from './contacts.service';
import {RouterModule} from '@angular/router';
import {ContactsAppRoutes} from './app.routes';
import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {ContactsDetailComponent} from './contacts-detail/contacts-detail.component';
import {FormsModule} from '@angular/forms';
import {ContactsEditorComponent} from './contacts-editor/contacts-editor.component';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent, ContactsListComponent, ContactsDetailComponent, ContactsEditorComponent, ContactsDetailViewComponent],
  imports: [BrowserModule, RouterModule.forRoot(ContactsAppRoutes), HttpModule, FormsModule],
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
