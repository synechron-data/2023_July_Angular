import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Author } from 'src/app/models/author.interface';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'author-quote',
  templateUrl: './author-quote.component.html',
  styleUrls: ['./author-quote.component.css']
})
export class AuthorQuoteComponent implements OnInit, OnDestroy {
  selectedAuthor?: Author;
  sac_subscription?: Subscription;

  constructor(private authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.sac_subscription = this.authorsService.SelectedAuthorChanged.subscribe({
      next: (a: Author | undefined) => {
        this.selectedAuthor = a;
      }
    });
  }

  ngOnDestroy(): void {
    this.sac_subscription?.unsubscribe();
  }
}
