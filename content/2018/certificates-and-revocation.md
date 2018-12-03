
---
title: Revoking of certificates
lead: Managing certificates, and rotating them in due time can quickly get out of hand.
author: Didrik Sæther
links:
  - title: No, don't enable revocation checking
    link: https://www.imperialviolet.org/2014/04/19/revchecking.html
    body: Revocation checking is a complex topic and there's a fair amount of misinformation around. In short, it doesn't work ...
  - title: SSL certificate revocation and how it is broken in practice
    link: https://medium.com/@alexeysamoshkin/how-ssl-certificate-revocation-is-broken-in-practice-af3b63b9cb3
    body: Explore certificate revocation solutions: CRL, OCSP, OCSP stapling, must-staple, CRLSets.
  - title: Revocation still doesn't work
    link: https://www.imperialviolet.org/2014/04/29/revocationagain.html
    body: It's clear that someone is downloading CRLs because Cloudflare are spending half a million dollars a month to serve CRLs.

---
As a follow-up to Tia Firings [article](https://security.christmas/2018/2) on certificates we present an article on how to manage the certificates when they are issued.

Managing certificates and keys is a difficult task with many pitfalls. Without proper lifecycle management it will quickly scale to something that is unmanageable. An old saying is that **_If a certificate got issued, it will have to be rotated_**. Cisco has stated that they use on average more than four hours per certificate , just maintaining and rotating it. This is on top of the fact that manual management is more prone to human error, which in turn results in security and operational risk.

So why do we need to rotate certificates? Some of the reasons can be that the certificate is nearing its expiration date, or that the private key that signed the certificate has been compromised, and has to be revoked.
Previous practices for revoking a certificate involved using a certificate revocation list (CRL) to hold a list of all revoked certificates. The nature of this list is to grow in size, and what do developers do when things grow? We cache them! So now users are making security decisions based on stale data.

There has been done attempts at fixing revocation. We have _OCSP_, _OCSP Stapling_, and _OCSP must-staple_. All of which are prone to MITM-attacks.

As early as in 1998 elimination of certificate revocation was proposed. Instead we should use short lived certificates, and if we have to do revocation, use _OCSP must-staple_. This is because expiration is revocation in it self. So what is a short lived certificate? A certificate has an expiration date, the same way as the milk in your fridge has one. Today certificates live for years, but why should they? Often are certificate problems related to a mismatch between the certificate expiration date and the clients clock. Everyone knows that fresh milk tastes better!


The solution is to automate the certificate rotation of certificates, and with it, we get short lived certificates.
