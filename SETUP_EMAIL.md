# Email Setup Instructions

## 1. Install EmailJS
Run this command in your client directory:
```bash
cd client
npm install @emailjs/browser
```

## 2. EmailJS Setup Steps

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with your email
3. Verify your email address

### Step 2: Create Email Service
1. Go to Email Services
2. Click "Add New Service"
3. Choose Gmail
4. Connect your Gmail account (vishalbhaliya54@gmail.com)
5. Copy the Service ID (e.g., 'service_gjtecho')

### Step 3: Create Email Template
1. Go to Email Templates
2. Click "Create New Template"
3. Use this template:

**Template Name:** Contact Form
**Template ID:** template_contact

**Subject:** New Contact Form Submission - {{from_name}}

**Content:**
```
Hello,

You have received a new contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interested: {{service}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

### Step 4: Get Public Key
1. Go to Account Settings
2. Copy your Public Key

### Step 5: Update Code
Replace these values in Contact.js:
- `'service_gjtecho'` → Your Service ID
- `'template_contact'` → Your Template ID  
- `'your_public_key'` → Your Public Key

## 3. Test the Form
After setup, test the contact form to ensure emails are being sent to vishalbhaliya54@gmail.com

## 4. Email Template Variables Used:
- {{from_name}} - Customer's name
- {{from_email}} - Customer's email
- {{phone}} - Customer's phone
- {{service}} - Service they're interested in
- {{message}} - Their message
- {{to_email}} - Your email (vishalbhaliya54@gmail.com)