---
title: Cross Origin Resource Sharing
lead: Cross Origin Resource Sharing (CORS) is an important concept in modern webapplication security. We will try to explain what it is.
author: Robert Larsen
links:
  - title: Cross Origin Resource Sharing
    link: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    body: Quite detailed article about the concept and mechanisms behind
  - title: Understanding CORS
    link: https://medium.com/@baphemot/understanding-cors-18ad6b478e2b
    body: A more brief introduction to the topic
  - title: What is CORS?
    link: https://www.codecademy.com/articles/what-is-cors
    body: Detailed article which also go into some more implementation specific details
---

To understand CORS, we also have to understand the same-origin policy. The same-origin policy states that content retrieved from different origins are isolated from eachother. That is, if a webpage is retrieved from origin X it can interact with other resources on origin X only. Most browsers determine that two resources have the same origin if they have identical protocol, host and port. Internet Explorer is an exception, as it excludes the port from the same-origin check.

To illustrate how important the same-origin policy is, we provide an example. Assume that you have logged into your Facebook account in one browser tab, while you browse a webpage with some harmful JavaScript in it in another tab. While you browse Facebook, your browser makes several AJAX-requests to endpoints on Facebook´s servers. These requests are initiated by JavaScript that your browser has downloaded from Facebook. Thus, the resources initiating the requests have the same origin as the endpoints receiving them, and everything is just fine. However, without the same-origin policy, the Facebook endpoints would happily answer every request, regardless of their origin. The harmful JavaScript on the other webpage could then do everything to your account that you are allowed to do yourself.

But, what if we know what we are doing and intentionally want to make requests between these two origins possible, in a secure and controlled manner? This is where Cross Origin Resource Sharing (CORS) comes in. In its simplest form, it allows servers to specifiy which origins that they will allow access to its resources.

The CORS-standard supports the following HTTP-headers:
* Access-Control-Allow-Origin
* Access-Control-Allow-Credentials
* Access-Control-Allow-Headers
* Access-Control-Allow-Methods
* Access-Control-Expose-Headers
* Access-Control-Max-Age
* Access-Control-Request-Headers
* Access-Control-Request-Method
* Origin

We will not explain each here, but instead focus on the first one, `Allow-Origin`. To allow every origin access, the server can use a wildcard, and return the following header: `Access-Control-Allow-Origin: *`. This wildcard should only be used for a public, open API. If the server hosts an API that is supposed to be private, it should instead specify an allowed domain, or a comma separated list of domains, like `Access-Control-Allow-Origin: https://my-site.com, https://my-site2.com` There are different solutions available for setting these headers. They can be set in the configuration of the webserver or they can be set on the endpoints in your application.

If you develop webapplications, you might have seen this message in your console when you try to make a request somewhere: `Failed to load <some URL>: No 'Access-Control-Allow-Origin' header is present on the requested resource`. This is the same-origin policy in practice. As the message explains, the API is not sending the `Allow-Origin`-header to allow access to the origin that you make the request from. If you or someone you know control the API it is easy, as you can configure the header yourself. If you do not control the API you should try to determine why the API does not send the header. Is the API not supposed to be requested by external consumers? Maybe you have to provide some authorization tokens?

In this post we have only scratched the surface of CORS. If you are interested in learning more you might enjoy looking into the referenced articles. 