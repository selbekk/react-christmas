---
title: Public key certificates
lead: Most developers will sooner or later have to deal with certificates. But what is a certificate, really? It's got something to do with authentication, right..? In this post we will try to explain what a certificate actually is! 
author: Tia Firing
links:
  - title: Public-key cryptography
    link: https://en.wikipedia.org/wiki/Public-key_cryptography
    body: An explanation of Public-key cryptography
  - title: TLS Handshake Protocol
    link: https://docs.microsoft.com/en-us/windows/desktop/secauthn/tls-handshake-protocol
    body: An explanation of the TLS Handshake Protocol
  - title: Public key infrastructure
    link: https://en.wikipedia.org/wiki/Public_key_infrastructure
    body: Suggested further reading about public key infrastructure
---

Usually we come across certificates when we want our application to communicate with some new API that we haven't used before. As a responsible and security aware developer you of course use HTTPS for all communication, and the first time you try to connect to this new API you may get an error: "Certificate not trusted".  

A certificate is one of the parts of a public key infrastructure (PKI). Public key cryptography, like RSA, allows two parties to set up an encrypted connection without having to share a secret encryption key in advance. In public key cryptography all communicating parties will have a public key and a private key. If Alice wants to send an encrypted message to Bob, Alice will encrypt the message using Bob's public key. This message can now be decrypted only if you have Bob's private key (and as the private key should never be shared this means only Bob should be able to decrypt the message). 

But how can Alice know that a public key belongs to Bob, and not to someone else who wants her to think that they are Bob? Enter certificates! A certificate is something that contains Bob's public key and says that "this is Bob's public key". But, to make this claim trustworthy, we need some trusted third party that can guarantee that this actually is Bob's public key. This is what a certificate authority (CA), like Buypass, Let's Encrypt and DigiCert, is meant to be, and their job is to verify that the public key actually belongs to the claimed owner, and then issue the certificate that says so. If we trust the CA that has issued the certificate, then we can trust that this actually is Bob's public key and that it really is Bob we are talking to if he is able to decrypt messages that are encrypted with his public key. 

Public key cryptography is unfortunately very resource consuming. TLS (or HTTPS, which simply means HTTP encrypted with TLS/SSL) use public key cryptography only during the initial handshake for agreeing on a secret symmetrical encryption key and for authenticating who they are talking to. The authentication in the handshake is based on the parties being able to decrypt messages that was encrypted with their public key, not in their ability to present valid certificates (the certificates are public information). 

The solution to the "Certificate not trusted" problem mentioned initially is, as you may already know, to add the CA certificate that has issued the certificate presented by the API to your application's truststore, if this is a CA that you trust. 
