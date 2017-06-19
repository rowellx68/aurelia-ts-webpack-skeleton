import { inject } from "aurelia-framework";

import { HttpRequestBuilder } from "../utilities/http-request-builder";

@inject(HttpRequestBuilder)
export class UserService {
  constructor(private httpRequest: HttpRequestBuilder) {
  } 

  // return something more meaningful here
  // maybe hold some reference to it
  public login(username: string, password: string): Promise<boolean> {
    // do actual login
    // return this.httpRequest
    //   .buildAsPost("", { username: username, password: password })
    //   .send()
    //   .then(response => response.content);
    return Promise.resolve(true);
  }
}
