# EmailJS Key Replacement Guide

## Current Code (Lines 45-49 in Contact.js):
```javascript
await emailjs.send(
  'service_gjtecho',    // Replace with YOUR Service ID
  'template_contact',   // Replace with YOUR Template ID  
  templateParams,
  'your_public_key'     // Replace with YOUR Public Key
);
```

## After Getting Your Keys from EmailJS:

### 1. Service ID (from EmailJS Dashboard > Email Services)
Replace `'service_gjtecho'` with your actual Service ID
Example: `'service_abc123'`

### 2. Template ID (from EmailJS Dashboard > Email Templates) 
Replace `'template_contact'` with your actual Template ID
Example: `'template_xyz789'`

### 3. Public Key (from EmailJS Dashboard > Account > General)
Replace `'your_public_key'` with your actual Public Key
Example: `'user_abcd1234efgh5678'`

## Final Code Example:
```javascript
await emailjs.send(
  'service_abc123',        // Your Service ID
  'template_xyz789',       // Your Template ID
  templateParams,
  'user_abcd1234efgh5678'  // Your Public Key
);
```

## Where to Find These Keys:

1. **Login to EmailJS**: https://www.emailjs.com/
2. **Service ID**: Dashboard → Email Services → Copy Service ID
3. **Template ID**: Dashboard → Email Templates → Copy Template ID  
4. **Public Key**: Dashboard → Account → General → Copy Public Key

## Important Notes:
- Keep the single quotes around each key
- Don't change `templateParams` - that stays the same
- Make sure there are no extra spaces or characters
- Save the file after making changes