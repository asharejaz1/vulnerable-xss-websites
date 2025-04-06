Below is the markdown file content with proper formatting:

# Steps to Attempt a Stored (Persistent) XSS Attack

## Submit a Malicious Payload

In the textarea on the main page, enter a script payload such as:

```html
<script>alert('Stored XSS');</script>
```

Click the **Submit** button. This will add the payload to the in-memory messages array.

## Trigger the Vulnerability

After submission, the homepage will reload.

The payload stored in the array will be inserted into the HTML output without any sanitization, triggering the script execution (an alert popup should appear).

## Analyze the Results

Notice that the script is permanently stored (until the server is restarted) and executed on every page load.

This demonstrates how a Stored XSS vulnerability can affect all users who view the compromised page.
