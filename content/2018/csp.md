---
title: Content Security Policy
lead: Use Content Security Policy (CSP) headers to prevent loading of untrusted resources and mitigate cross-site scripting (XSS) attacks 
author: Henrik Walker Moe
image: https://images.unsplash.com/photo-1524624969736-b53186755368?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b088f1e2fadf4cb4ec6a58b696ec337&auto=format&fit=crop&w=1834&q=80
links:
    - title: How to Prevent Cross-Site Scripting Attacks
      link: https://resources.infosecinstitute.com/how-to-prevent-cross-site-scripting-attacks/#gref
      body: An article about how to Prevent Cross-Site Scripting Attacks

    - title: Content Security Policy Reference
      link: https://content-security-policy.com/
      body: A CSP quick reference guide

    - title: CSP documentation at Mozilla Developer Network (MDN)
      link: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
      body: MDN's guide on CSP

    - title: CSP report-uri as a service
      link: https://report-uri.com
      body: Real-time report your CSP-violations to a hosted service

    - title: CSP cheat sheet
      link: https://scotthelme.co.uk/csp-cheat-sheet
      body: A good cheat sheet for CSP and directives
---

Did you know that your website might be at risk of loading untrusted external scripts? If your website doesn't explicitly trust the sources for all of its JavaScript, CSS, images etc., an attacker might be able to exploit this vulnerability by injecting a malicious script and possibly extract sensitive information from your website and your users.

CSP is a built-in browser security feature that is designed to prevent this ["attack-vector"](#attack-vector) and is luckily one of the low-hanging fruits you can apply to secure your site.

## Definitions

Before moving ahead let's define a few key concepts in this article.

### Attack-vector

An attacker exploits a vulnerability by using a technical approach or method to access/inject/scan assets. This approach is often referred to as a **vector**. There might be one or more vectors for any given vulnerability, varying in difficulty to execute.

### Source-origins

If your website's webserver hosts your JavaScript, CSS, images etc. then those are "own origin" or "self origin".

If your website uses third-party resources then those have "external origins".

CSP's directives supports `self` for own origins and URLs for external origins.

## Get started

Your server should return the HTTP response header:

```javascript
Content-Security-Policy: <directives>
```

The header is made up of one or more [directives (Directive Reference)](https://content-security-policy.com) for trusting [source origins](#source-origins) for JavaScript (`script-src`), CSS (`style-src`), fonts (`font-src`), frames (`frame-src`) and more.

>[Server-side configuration](https://content-security-policy.com) will vary depending on your server. [Helmet for Express.js](https://helmetjs.github.io/docs/csp/) is a great option for those running a JavaScript/Node stack.

If you want to start with just trusting your own resources, use:

```javascript
Content-Security-Policy: default-src 'self'
```

This tells your browser "hey, just load resources from my own domain/origin.". This mitigates Cross-Site Scripting (XSS) attacks where an attacker is trying to exploit a vulnerability on your website by injecting a script into your website from e.g. `http://www.evil.com/evil.js`.

Go to [Content-Security-Policy.com](https://content-security-policy.com) or [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) to learn more about other types of directives and their use.

## Advanced techniques

### Report CSP-violations

When a browser attempts to load a resource but is blocked by the CSP-rules, it can report the CSP-violation by posting to a URL using the `report-uri` directive:

```javascript
Content-Security-Policy: report-uri '/some-url'
```

This lets you identify if someone's attempting something malicious or if you just forgot to whitelist one of your resources. Either way it's a useful tool to monitor your CSP-rules in production.

You need to implement a back-end to consume the report or use an external service, e.g. [report-uri as a service](https://report-uri.com/).

### Nonces

A cryptographic `nonce` (number used once) can be used to make exemptions to your CSP-rules. By generating a unique one-time use value on the server-side and providing it to the front-end, you can trust that the content you are allowing to pass-through your CSP-rules is yours and trusted.

Using just `unsafe-inline` as a broad catch-all method of allowing all inline JavaScript (or CSS for that matter) is not advisable:

```javascript
Content-Security-Policy: script-src 'unsafe-inline';
```

A better way of making exemptions is to provide a value to the `nonce` attribute on the `<script>` blocks that are the inline JavaScript you need to whitelist:

1. Generate the random one-time use `nonce` value server-side
2. Provide the value in your Document Object Model (DOM) `<script>` block as the `nonce` attribute value:

```javascript
<script nonce="2726c7f26c">
  var inline = 1;
</script>
```

3. Add it to your CSP-rule:

```javascript
Content-Security-Policy: script-src 'nonce-2726c7f26c';
```

As long as the two `nonce` values match it will not be possible to inject JavaScript that doesn't have `2726c7f26c` as `nonce` value. 

Remember to **re-generate the value per page-load** and **keep the `nonce` value random.**

Another `nonce` technique is to use SHA256 to [hash the inline JavaScript (Hashes)](https://scotthelme.co.uk/csp-cheat-sheet/).
