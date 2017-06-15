import { inject } from "aurelia-framework";
// import { HttpClient } from "aurelia-http-client";

import { HttpRequestBuilder } from "../utilities/http-request-builder";

@inject(HttpRequestBuilder)
export class UserService {
  constructor(private httpRequestBuilder: HttpRequestBuilder) {
  } 

  // return something more meaningful here
  // maybe hold some reference to it
  public login(username: string, password: string): Promise<boolean> {
    // do actual login
    // return this.httpRequestBuilder
    //   .buildAsPost("", { username: username, password: password })
    //   .withBaseUrl("")
    //   .send()
    //   .then(response => response.content);
    return Promise.resolve(true);
  }
}
