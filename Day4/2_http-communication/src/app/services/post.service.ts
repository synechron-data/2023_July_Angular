// import { HttpClient, HttpErrorResponse } from "@angular/common/http";
// import { Post } from "../models/post.model";
// import { Injectable } from "@angular/core";
// import { Observable, catchError, delay, retry, throwError } from "rxjs";

// @Injectable({
//     providedIn: 'root'
// })
// export class PostService {
//     url: string = 'https://jsonplaceholder.typicode.com/posts';

//     constructor(private httpClient: HttpClient) { }

//     // getAllPosts() {
//     //     return this.httpClient.get<Array<Post>>(this.url);
//     // }

//     getAllPosts() {
//         return this.httpClient.get<Array<Post>>(this.url).pipe(
//             delay(3000),
//             retry(3),
//             catchError(this._handleError('getAllPosts', []))
//         )
//     }

//     deletePost(id: number) {
//         return this.httpClient.delete(`${this.url}/${id}`).pipe(
//             delay(3000),
//             retry(3),
//             catchError(this._handleError('deletePost'))
//         )
//     }

//     private _handleError<T>(operation = 'operation', result?: T) {
//         return (err: HttpErrorResponse): Observable<T> => {
//             // Error Logging / Reporting
//             console.log(`${operation} failed: ${err.message}`);
//             switch (err.status) {
//                 case 403:
//                 case 404:
//                     return throwError(() => err.error.message);
//                 case 500:
//                     return throwError(() => err.statusText);
//                 default:
//                     return throwError(() => "Connection Error, please try again later...");
//             }
//         }
//     }
// }

// -------------------------------------- Using Configuration to Read URL

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Post } from "../models/post.model";
import { Injectable } from "@angular/core";
import { Observable, catchError, delay, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    url: string = environment.postsApiUrl;

    constructor(private httpClient: HttpClient) { }

    getAllPosts() {
        return this.httpClient.get<Array<Post>>(this.url).pipe(
            delay(3000),
            retry(3),
            catchError(this._handleError('getAllPosts', []))
        )
    }

    deletePost(id: number) {
        return this.httpClient.delete(`${this.url}/${id}`).pipe(
            delay(3000),
            retry(3),
            catchError(this._handleError('deletePost'))
        )
    }

    private _handleError<T>(operation = 'operation', result?: T) {
        return (err: HttpErrorResponse): Observable<T> => {
            // Error Logging / Reporting
            console.log(`${operation} failed: ${err.message}`);
            switch (err.status) {
                case 403:
                case 404:
                    return throwError(() => err.error.message);
                case 500:
                    return throwError(() => err.statusText);
                default:
                    return throwError(() => "Connection Error, please try again later...");
            }
        }
    }
}