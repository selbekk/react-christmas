---
title: Cross Site Request Forgery
lead: Have you ever wondered how someone could steal money from your internet bank, or post as you on Facebook? That is called Cross Site Request Forgery (CSRF), and we will try to explain what it is, and how you protect your website.
author: Stian Fredrikstad
links:
  - title: CSRF OWASP
    link: https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
    body: An explanation of CSRF by OWASP
---

Todays web applications have a lot of functionality. E.g. a banking website can transfer money, handle your portfolio and much more, but what if an attacker could do this on your behalf? Let us present Cross Site Request Forgery, popularly shortened CSRF.

When you want to transfer money to another account, you go to https://www.bank.com and log in. The bank would likely do a request like this when you press the transfer button:

```
POST /transfer_money
to_account=98765432109&
amount=1000
```

The bank will then transfer 1000 from your account, to the account given in `to_account`.

But what if you visit a malicious website while you are logged in? If that website tries to send the same request, but the malicious website will set the parameter `to_account` to the account of the attacker. The browser will by design accept to send the request, and it will even supply your session cookie. When the server in the bank will receive the request, and transfer the money to attacker because it does not distinguish a request sent from https://www.bank.com and the malicious website. This is called Cross Site Request Forgery.

Although the case is a simple example, there has been at least one bank where this actually happened.

### How do you protect your users against this attack?

The main goal of protection your users against this attack, is to distinguish a legitimate request and a malicious request. To accomplish this, the server needs to check the validity of something that the malicious website can't spoof. The most widely used technique, is to generate a token and use it in all requests from the website. The server can then check the validity of the token on the server. Due to the same origin policy that all browsers obey, a malicious website can't read the content of the website and extract the value in token.

It is important that this token is generated uniquely for each session, which can be accomplished in multiple ways. The server can generate a random token and stored in the session, which make it easy to check it. Another technique which eliminate the state on the server, is to generate it from the something that identifies the user and a secret key on the server. This does not need to be stored in session, because it can always be regenerated on the server and checked against the request. Most modern frameworks has one of these, or a similar technique built in, and it is highly recommended to use it.

These techniques will protect your users against CSRF, but only when the the website does requests with a request body. Which means that it will not protect against a malicious website doing `GET` requests on the users behalf. This is intentionally, because a `GET` request should not change state, and thus will not need the protection against CSRF. Another consideration, is that if you put the token in a `GET` request, all websites you link to can potentially see the token in the referrer header.


Hopefully you have learned something about CSRF by reading this post, and if you want to now more, we suggest that you read at [OWASP CSRF](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29). We hope to see you back tomorrow.
