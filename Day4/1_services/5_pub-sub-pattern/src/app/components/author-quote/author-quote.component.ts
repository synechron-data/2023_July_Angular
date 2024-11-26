import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Author } from 'src/app/models/author.interface';
import { AuthorsService } from 'src/app/services/authors.service';
import { PubSubService } from 'src/app/services/pub-sub.service';

@Component({
  selector: 'author-quote',
  templateUrl: './author-quote.component.html',
  styleUrls: ['./author-quote.component.css']
})
export class AuthorQuoteComponent implements OnInit, OnDestroy {
  selectedAuthor?: Author;
  sac_subscription?: Subscription;

  constructor(private authorsService: AuthorsService, private pubSubService: PubSubService) { }

  ngOnInit(): void {
    this.sac_subscription = this.pubSubService.on('author-selected').subscribe({
      next: () => {
        this.selectedAuthor = this.authorsService.SelectedAuthor;
      }
    });
  }

  ngOnDestroy(): void {
    this.sac_subscription?.unsubscribe();
  }
}
