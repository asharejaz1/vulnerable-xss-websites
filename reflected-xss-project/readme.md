Below is the markdown file content with proper formatting:

# Steps to Attempt a Reflected (Non-Persistent) XSS Attack

## Locate the Vulnerable Parameter

The demo website reflects the value of the search query parameter directly into the HTML without any sanitization.

## Craft a Malicious URL

In your browser, modify the URL to include a script payload. For example:

```php-template
http://localhost:3000/?search=<script>alert('Reflected XSS');</script>
```

Press Enter to load the modified URL.

## Observe the Behavior

If the payload is executed, you will see a JavaScript alert box with the message "Reflected XSS".

This demonstrates that the application is vulnerable to Reflected XSS since the input is directly inserted into the output without proper encoding.

## Experiment and Document

Try different payloads or variations to further understand how input is handled.

Take notes on the behavior and results for your university project.
