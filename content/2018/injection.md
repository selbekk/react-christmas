---
title: Injections
lead: Did you know that code could be injected into your application by an attacker, which could retrieve data or do something else that you did not anticipate?
author: Stian Fredrikstad
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
This will not throw an error, because it is perfectly valid SQL, but it will find the user `bob` and skip the password check due to `--` which is a comment in many SQL languages.