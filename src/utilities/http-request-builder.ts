import { computedFrom, inject } from "aurelia-framework";
import { HttpClient, Interceptor, RequestBuilder } from "aurelia-http-client";

@inject(HttpClient)
export class HttpRequestBuilder {
  constructor(private http: HttpClient) {
    // setup http client here
    // this.http.configure(c => {
    //   c.withBaseUrl("");
    //   c.withHeader("", "");
    // });
  }

  @computedFrom("http")
  get client(): HttpClient {
    return this.client;
  }

  /**
   * A generic request builder. Add .withBaseUrl() before using .send().
   * @param {string} resource - Resource URI
   * @param {Interceptor=} interceptor - Optional interceptor.
   * @returns {RequestBuilder}
   */
  buildRequest(resource: string, interceptor?: Interceptor): RequestBuilder {
    const request = this.http
      .createRequest(resource);

    if (interceptor) {
      request.withInterceptor(interceptor);
    }

    return request;
  }

  /**
   * A request builder as DELETE. Add .withBaseUrl() before using .send().
   * @param {string} resource - Resource URI
   * @param {Interceptor=} interceptor - Optional interceptor.
   * @returns {RequestBuilder}
   */
  buildAsDelete(resource: string, interceptor?: Interceptor): RequestBuilder {
    return this.buildRequest(resource, interceptor)
      .asDelete();
  }

  /**
   * A request builder as GET. Add .withBaseUrl() before using .send().
   * @param {string} resource - Resource URI
   * @param {Interceptor=} interceptor - Optional interceptor.
   * @returns {RequestBuilder}
   */
  buildAsGet(resource: string, interceptor?: Interceptor): RequestBuilder {
    return this.buildRequest(resource, interceptor)
      .asGet();
  }

  /**
   * A request builder as PUT. Add .withBaseUrl() before using .send().
   * @param {string} resource - Resource URI.
   * @param {any} content - Content to send.
   * @param {Interceptor=} interceptor - Optional interceptor.
   * @returns {RequestBuilder}
   */
  buildAsPut(resource: string, content: any, interceptor?: Interceptor): RequestBuilder {
    return this.buildRequest(resource, interceptor)
      .asPut()
      .withContent(content);
  }

  /**
   * A request builder as PATCH. Add .withBaseUrl() before using .send().
   * @param {string} resource - Resource URI.
   * @param {any} content - Content to send.
   * @param {Interceptor=} interceptor - Optional interceptor.
   * @returns {RequestBuilder}
   */
  buildAsPatch(resource: string, content: any, interceptor?: Interceptor): RequestBuilder {
    return this.buildRequest(resource, interceptor)
      .asPatch()
      .withContent(content);
  }

  /**
   * A request builder as POST. Add .withBaseUrl() before using .send().
   * @param {string} resource - Resource URI.
   * @param {any} content - Content to send.
   * @param {Interceptor=} interceptor - Optional interceptor.
   * @returns {RequestBuilder}
   */
  buildAsPost(resource: string, content: any, interceptor?: Interceptor): RequestBuilder {
    return this.buildRequest(resource, interceptor)
      .asPost()
      .withContent(content);
  }
}
