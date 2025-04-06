Below is the markdown file content with proper formatting:

# Steps to Attempt a DOM-Based XSS Attack

## Set Up the Demo

Open the demo_xss_demo.html file in a web browser (e.g., by double-clicking it or using `file:///` in the address bar).

## Craft a Malicious URL

In the browser’s address bar, modify the URL to include a malicious payload in the hash fragment.

For example, change the URL to:

```php-template
file:///path/to/dom_xss_demo.html#<script>alert('DOM XSS');</script>
```

**Note:** Replace `file:///path/to/` with the actual file path on your system.

## Trigger the Vulnerability

Press Enter after modifying the URL.

Since the script directly injects the unsanitized hash value into the page’s HTML, the malicious payload will execute, triggering the alert with the message "DOM XSS".

## Analyze the Impact

Observe that the payload is executed entirely on the client side, without any server-side involvement.

Document your observations, noting how the unsanitized input leads to script execution.
