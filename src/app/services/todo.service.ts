import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Todo } from "../models/Todo";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todosUrl: string =
    "https://my-json-server.typicode.com/Madz96/angular-crash-todolist/todos";
  todosLimit = "?_limit=5";

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
}
