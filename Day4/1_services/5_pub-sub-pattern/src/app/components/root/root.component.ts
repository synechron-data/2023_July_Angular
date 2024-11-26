import { Component } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';
import { PubSubService } from 'src/app/services/pub-sub.service';

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css'],
    providers: [AuthorsService, PubSubService]
})
export class RootComponent { }