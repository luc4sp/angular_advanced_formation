import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'
import { Post } from '../../models/post.model'
import { PostsService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {

  posts$!: Observable<Post[]>;

  constructor(private route: ActivatedRoute, private postsService: PostsService){}

  ngOnInit(): void {
    this.posts$ = this.route.data.pipe(
      map(data => data['posts'])
    );
  }

  onPostCommented(postCommented: { comment: string, postId: number }) {
    this.postsService.addNewComment(postCommented);
  }
}
