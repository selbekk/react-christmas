---
title: Cross Origin Resource Sharing
lead: TBA
author: Robert Larsen
links:
  - title: Cross Origin Resource Sharing
    link: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    body: A detailed article from Mozilla
  - title: Understanding CORS
    link: https://medium.com/@baphemot/understanding-cors-18ad6b478e2b
    body: A more hands-on article describing the concept and different headers.
---

The same-origin policy is an import concept when talking about web application security today. It states that content retrieved from different origins are isolated from eachother. That is, if a webpage is retrieved from server A it can only interact with content that are also on server A. We say that two resources share the same origin if the protocol, host and port are the same for both. An exception is Internet Explorer, where the port is excluded from the same-origin check. 

Todays modern web-applications often requires access to resources residing outside their own origin. Most servers accept HTTP GET-requests from any origin. However, requests that potentially can do harmful things, like PUT or DELETE are typically denied for external origins. For example, we typically do not want that a server B, which we do not know, can delete our content on server A...

But, what if we want that to be possible? Sometimes we want our application to modify resources on different origins. Thanks to CORS (Cross Origin Resource Sharing) we can make that possible in a controlled manner, by using the HTTP-headers.

The CORS-standard adds the following HTTP-headers:

* Access-Control-Allow-Origin
* Access-Control-Allow-Credentials
* Access-Control-Allow-Headers
* Access-Control-Allow-Methods
* Access-Control-Expose-Headers
* Access-Control-Max-Age
* Access-Control-Request-Headers
* Access-Control-Request-Method
* Origin

We will look at the first one more specifically. To allow access from every origin you can simply specify a wilcard, `*`. The header sent from the server will then look like: `Access-Control-Allow-Origin: *`. This wildcard should only be used for a public, open API. If you have an API supposed to be private you should instead specify a specific domain, or a comma separated list of domains, like `Access-Control-Allow-Origin: https://my-site.com, https://my-site2.com`

There are different solutions available for setting these headers. They can be set in the configuration of the webserver or they can be set on the endpoints in your application. 