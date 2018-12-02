---
title: Predictable HTTP-responses
lead: 
author: Henrik Walker Moe
links:
  - title: What is HTTPS?
    link: https://www.instantssl.com/ssl-certificate-products/https.html
    body: Explaining the benefits of HTTPS

  - title: Swiping on Tinder? Beware, Someone Might be Watching Your Swipes and Matches
    link: https://www.thesslstore.com/blog/swiping-tinder-beware-someone-might-watching/
    body: On how Tinder were having HTTP-problems (by not using HTTPS)
---

Many of us tend to think that if we just slap on end-to-end encryption with a SSL-/TLS-certificate and use HTTPS on our website, then that makes our website secure. It is true that this enables a secure encrypted connection between the client and the server so that no one can view the TCP-packet's data passing in between. It's a good security infrastructure to start off with, and [Let's Encrypt](https://letsencrypt.org/) will even give you this for free!

But what happens if you have an app that uses API-endpoints that undermine this encryption? An attacker can still infer sensitive user information by *analyzing the size* of the **TCP-packets** in the HTTP-responses.

Lets look at an [example from Tinder](https://www.theregister.co.uk/2018/01/23/tinder_security_vulnerabilities/) and see why we should, in some cases, prevent deterministic HTTP-responses.

## Got Love For Sale

First of all, Tinder weren't using HTTPS and obviously this opens up a lot of attack vectors and introduces vulnerabilities because anyone what were watching the traffic between the app and the server could view all of the contents being sent to and from the APIs! Watching traffic between users and servers is [easier that you might think](https://www.troyhunt.com/the-beginners-guide-to-breaking-website/).

But let's assume that they had HTTPS. The primary features on the Tinder-app is the "Left swipe"/"Right swipe" feature, which is the same as saying "I don't like this person" or "I like this person". The ones you like might result in a match if the feeling is mutual.

### C'mon And Love Me

These swipe-actions triggered API-calls that responded with **different HTTP-response sizes**, meaning if someone were watching the traffic they could infer that response sizes of **x** bytes is a *left swipe*, **y** bytes is a *right swipe* and a *match* is **z** bytes. An attacker could exploit this vulnerability by mapping actions and aggregating the different sizes of the HTTP-responses, perhaps for own gain to *get more matches* or to *sell it to third parties*. 

### Sure Know Something

We can mitigate the risk for this attack vector by making sure that the most sensitive API-endpoints we have use some kind of protective mechanism to ensure unique or equal byte sizes in the HTTP-responses, e.g.:

* **HTTP-response fuzzing**: adding randomness to each HTTP-response results in unique HTTP-response sizes
* **HTTP-response padding**: ensure that all of your sensitive API-endpoints return equal HTTP-response sizes
* **Use nonces between client and server**: adding a unique one-time-use cryptographic token (nonce) per HTTP-response results in unique HTTP-response sizes, and a known secret that the client and server share per HTTP-request.

These techniques will make the API-responses less deterministic and inferring anything based on HTTP-responses alone will be much more difficult.

## I Stole Your Love

Tinder and dating aside, this kind of security vulnerability has more serious implications on our private economy or demographic society when you use the same attack vector on APIs and apps for **banking** or even **government voting**...

Identify your most important API-endpoints that handles sensitive user actions and information, and **ensure they are non-deterministic** in their behavior!