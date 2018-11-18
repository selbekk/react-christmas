---
title: Error messages and information leakage
lead:  Did you know that your application may be giving valuable clues to an attacker if an error occurs? 
author: Tia Firing
links:
  - title: Improper Error Handling
    link: https://www.owasp.org/index.php/Improper_Error_Handling
    body: Short introduction to improper error handling and why it matters
  - title: Error Handling
    link: https://www.owasp.org/index.php/Error_Handling
    body: Further reading about error handling and logging
---
It is always easier and less time consuming to attack or exploit an application that you know something about. If you know which application server it runs on or what kind of database server is being used, this information narrows down the number of relevant attacks considerably. If you are in luck (as an attacker, that is!), you may find that this version of the application server has some vulnerability that you can take advantage of. 

One of the most common ways to gather information about an application and the surrounding infrastructure is by provoking errors. For instance, if you have some text input field, an attacker may try to input characters like `'`, `;` or other characters that means something to a database to see if the application will return an error message. If the application is poorly secured, the attacker may even get the complete SQL query in the error message, which can be extremely useful. 

**How can we avoid helping the attacker and stop providing internal information through error messages?** 

NEVER show stacktraces or internal error messages to the user (or to the frontend application). You should always show the user a generic error message when something unexpected happens. In addition to not leaking information, this will also provide a better user experience. The generic error message can say something like "Something went wrong", and should not contain any information about what actually went wrong. This is also important to remember for the login page: If the user types the wrong password, the error message should not say that "The password is incorrect" as that gives away that the user id was in fact a valid user id. To make sure that all errors are replaced with the generic error message you can have a filter that takes care of this at the outer boundary of the application, one that all responses passes through. 

Another thing that is easy to forget is to remove comments from the frontend code. As the frontend code is visible to the user, the comment about the API usage that was nice to have during development is not something that you want an attacker to see. 

As probing for errors is a common way to gather information prior to an attack, you should always pay attention to your application logs with regards to any suspicious activity. 
