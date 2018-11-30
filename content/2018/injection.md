---
title: Injections
lead: Did you know that code could be injected into your application by an attacker, which could retrieve data or do something else that you did not anticipate?
author: Stian Fredrikstad
links:
  - title: OWASP
    link: https://www.owasp.org/index.php/SQL_Injection_Prevention_Cheat_Sheet
    body: SQL Injection Prevention Cheat Sheet
---

Code can be injected in many different contexts. 
In SQL, XML, OS commands, almost every place you get input from a user could possibly be exploited.
This sounds very bad, but luckily the situation is not as bad as it sounds. As long as you are aware of the dangers, these kind of vulnerabilities can be averted.

### SQL injection

SQL injections was a large attack surface for a long time, and still is quite common. 
This is partly because it is easy to probe for, and the power a simple SQL injection gives the attacker.

An SQL injection is done by escaping out of the query string, and add new SQL to the string.
Let us say that you have form with username and password. When submitting this form with `bob` and `1234, the application does this SQL query

```sql
SELECT * FROM users WHERE username = 'bob' AND passowrd = '1234';
```

To check if this is vulnerable, we can input `bob'` instead of `bob`

```sql
SELECT * FROM users WHERE username = 'bob'' AND passowrd = '1234';
```

In this example, the code will throw an error back to us.
We now know that the code is vulnerable, and we can try to inject some SQL.

```sql
SELECT * FROM users WHERE username = 'bob' AND 1 = 1;--' AND passowrd = '1234';
```

Now we wrote `bob' AND 1 = 1;` into the username field. 
This will not throw an error, because it is perfectly valid SQL, and it will find the user `bob` and skip the password check due to `--`, which is a comment in many SQL languages.

By injecting this SQL, we can log in as bob without knowing his password.

This is happening when we concatenate SQL queries with user input, which make it possible to use special characters to break out of the context.
In this instance it is the character `'`, but this depends on the context we get user input.

This can be done secure by using parameterized queries, and an example of the same query would then be

```
String query = "SELECT * FROM users WHERE username = ? AND password = ?";  
PreparedStatement pstmt = connection.prepareStatement( query );
pstmt.setString( 1, "bob");
pstmt.setString( 2, "1234"); 
ResultSet result = pstmt.executeQuery( );
```

The lesson of this post is to always be aware that an attacker will try to write malicious input.
And you should always take care of special characters in your language, and never concatenate user input into places where it can run code.