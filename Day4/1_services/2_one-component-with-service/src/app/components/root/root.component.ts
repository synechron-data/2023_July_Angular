import { Component, Inject, OnInit } from '@angular/core';
import { authorList } from 'src/app/data/author-list-data';
import { env } from 'src/app/data/env-data';
import { Author } from 'src/app/models/author.interface';
import { AuthorsService } from 'src/app/services/authors.service';
import { NAuthorsService } from 'src/app/services/nauthors.service';
import { AUTHORS_NEW_TOKEN, AUTHORS_TOKEN } from 'src/app/utilities/tokens/di-tokens';

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css'],
    providers: [
        // { provide: 'Authors', useValue: authorList }
        // { provide: AUTHORS_TOKEN, useValue: authorList }

        // { provide: AUTHORS_TOKEN, useValue: authorList },
        // { provide: AUTHORS_NEW_TOKEN, useExisting: AUTHORS_TOKEN }

        // { provide: AuthorsService, useClass: AuthorsService }
        // AuthorsService

        // AuthorsService, NAuthorsService

        { provide: 'ENVIORNMENT', useValue: env },
        {
            provide: AuthorsService, useFactory: (enviorment: any) => {
                if (enviorment['production']) {
                    return new NAuthorsService();
                } else {
                    return new AuthorsService();
                }
            }, deps: ['ENVIORNMENT']
        },
    ]
})
export class RootComponent implements OnInit {
    list?: Array<Author>;
    selectedAuthor?: Author;

    // constructor(@Inject('Authors') private authors: Array<Author>) { }
    // constructor(@Inject(AUTHORS_TOKEN) private authors: Array<Author>) { }
    // constructor(@Inject(AUTHORS_NEW_TOKEN) private authors: Array<Author>) { }

    // ngOnInit() {
    //     this.list = this.authors;
    // }

    // constructor(private authorsService: AuthorsService) { }
    // ngOnInit() {
    //     this.list = this.authorsService.Authors;
    // }

    // constructor(private authorsService: AuthorsService, private nAuthorsService: NAuthorsService) { }
    // ngOnInit() {
    //     this.list = this.authorsService.Authors;
    //     this.list = this.nAuthorsService.Authors;
    // }

    constructor(private authorsService: AuthorsService) { }

    ngOnInit() {
        this.list = this.authorsService.Authors;
    }

    selectAuthor(a: Author) {
        this.selectedAuthor = a;
    }

    isSelected(a: Author) {
        return this.selectedAuthor === a;
    }
}