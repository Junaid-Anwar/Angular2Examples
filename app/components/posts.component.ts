import { Component } from '@angular/core';

import { PostsService } from '../services/posts.service';
import { IPost } from '../models/Post';

@Component({
    moduleId: module.id,
    selector: 'posts',
    templateUrl: '../templates/posts.html'
})

export class PostsComponent {
    title = 'Posts';
    posts: IPost[];

    constructor(private postsService: PostsService) {
        this.postsService.getPosts().subscribe(posts => { this.posts = posts });
    }
}