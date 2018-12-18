---
title: Best practice for passwords
lead: There are numerous techniques for cracking passwords, and already cracked passwords are floating around the web waiting to be used by threat actors. How can we reduce the risks concerning passwords ?
links:
  - title: Digital Identity Guidelines - Authentication and Lifecycle Management
    link: https://pages.nist.gov/800-63-3/sp800-63b.html
    body: Digital Identity Guidelines - Authentication and Lifecycle Management
---

As a result of recent data breaches like the Dropbox and LinkedIn breaches in 2012 and the Kickstarter breach in February 2014, passwords and login details were leaked to the public. Sites like https://haveibeenpwnd.com have been established to let users search for their e-mail address to see if their password has been pawned. Post-breach analysis have shown that many people use simple passwords that are vulnerable to dictionary attacks. Also many people re-use their credentials on several sites, increasing the risk if their password is compromised. 

With this in mind, how can we reduce the risks concerning passwords ?  


# Passphrases instead of passwords
Passwords should be avoided for several reasons. Many people tend to choose (if possible) simple dictionary words that are easily cracked by openly available hacker tools. Secondly, the usual requirements for passwords are numbers, capital/non-capital and special characters, making the passwords unmemorable for humans. This may lead to passwords being written on a paper or a post-it, which again leads to less secure passwords.     

A better solution is to use a passphrase. A passphrase is longer than a password and can be a sentence with spaces in between words, like for instance "Correct horse battery staple". The main reason for using passphrases is that it's easy to remember while still being hard to guess or crack.  The longer passphrase may also satisfy requirements like punctuations and capital/non-capital letters as those appear natural in a sentence. Leading Operating Systems like Windows, Mac and Linux all support longer passphrases.
    

# Avoid frequent password changes
A common security principle has been to enforce password updates periodically. This means that users have had to update their password typically every 60 or 90 days. Furthermore, historic passwords were stored to prevent users from re-using old passwords. Although this was measures to enhance security, recent studies have shown that forcing password updates may be counterproductive to security. With periodic password updates, users tend to rewrite old passwords by changing just a letter or a number, and some users write down their different passwords on a paper. None of these methods lead to better password security.

[The National Institute of Standards and Technology (NIST)](https://www.nist.gov/) provide guidelines for best practice security. Their recent guidelines for handling passwords [recommend](https://pages.nist.gov/800-63-3/sp800-63b.html#reqauthtype) memorized secrets _not_ to be changed arbitrarily. NIST recommends password changes only in the event of compromise.   

# Two-factor authentication
Although you are using a strong passphrase, your credentials can still be compromised. Using the same passphrase on different sites increases your risk in the event of such compromise. A recommended way to lower the risk is to enable "two-factor authentication" (2FA). 

2FA means that the user provides two pieces of evidence for authentication, typically a password/passphrase (first factor) and a code (second factor) received in a different channel. In the event of a compromised password/passphrase, your account is still safe as the attacker does not have access to your code. 

All major service providers like Google, Microsoft, Apple, Facebook, and many more, have support for 2FA. For deeper understanding of 2FA, read Hans Kristian Henriksens [article](https://security.christmas/2018/6).

  