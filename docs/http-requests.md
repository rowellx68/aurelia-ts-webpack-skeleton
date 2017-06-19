# Http Requests

[Aurelia Documentation](http://aurelia.io/hub.html#/doc/article/aurelia/fetch-client/latest/http-services/3)

>Generally, we recommend that you don't litter your application code with usage of the HttpClient. Instead, we reccommend that you create one or more service classes that encapsulate all HTTP access behind a friendly, application-specific API.


Following the suggestion from the Aurelia's documentation, we have created the `http-request-builder`. Using the request builder, we are able to customise a request and not worry about the HTTP client will have some setting we do not need.

