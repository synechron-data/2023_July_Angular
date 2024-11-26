import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author.interface';
import { AuthorsService } from 'src/app/services/authors.service';
import { PubSubService } from 'src/app/services/pub-sub.service';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  list?: Array<Author>;
  selectedAuthor?: Author;

  constructor(private authorsService: AuthorsService, private pubSubService: PubSubService) { }

  ngOnInit() {
    this.list = this.authorsService.Authors;
  }

  selectAuthor(a: Author) {
    this.authorsService.SelectedAuthor = a;
    this.selectedAuthor = this.authorsService.SelectedAuthor;
    this.pubSubService.publish('author-selected');
  }

  isSelected(a: Author | undefined) {
    return this.selectedAuthor === a;
  }
}
