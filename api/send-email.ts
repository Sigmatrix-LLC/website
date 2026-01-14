import type { VercelRequest, VercelResponse } from '@vercel/node';

// Resend API configuration
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_API_URL = 'https://api.resend.com/emails';

interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  type: string;
  message?: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const formData: ContactFormData = req.body;

    // Validate required fields
    if (!formData.name || !formData.email || !formData.type) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check if API key is configured
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    // Prepare email content
    const inquiryType = {
      demo: 'Requesting a Demo',
      partnership: 'Partnership Discussion',
      enterprise: 'Enterprise Solutions',
      general: 'General Inquiry'
    }[formData.type] || formData.type;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #008bff 0%, #0066cc 100%);
      color: white;
      padding: 30px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-top: none;
      padding: 30px;
      border-radius: 0 0 8px 8px;
    }
    .field {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #f3f4f6;
    }
    .field:last-child {
      border-bottom: none;
    }
    .label {
      font-weight: 600;
      color: #008bff;
      margin-bottom: 5px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .value {
      color: #1f2937;
      font-size: 16px;
    }
    .message {
      background: #f9fafb;
      padding: 15px;
      border-radius: 6px;
      margin-top: 10px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      font-size: 12px;
      color: #6b7280;
      text-align: center;
    }
    .badge {
      display: inline-block;
      background: #eff6ff;
      color: #008bff;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🏥 New Contact Form Submission</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">InterEx Healthcare Platform</p>
  </div>
  
  <div class="content">
    <div class="field">
      <div class="label">Inquiry Type</div>
      <div class="value">
        <span class="badge">${inquiryType}</span>
      </div>
    </div>

    <div class="field">
      <div class="label">Name</div>
      <div class="value">${formData.name}</div>
    </div>

    <div class="field">
      <div class="label">Email</div>
      <div class="value">
        <a href="mailto:${formData.email}" style="color: #008bff; text-decoration: none;">
          ${formData.email}
        </a>
      </div>
    </div>

    ${formData.organization ? `
    <div class="field">
      <div class="label">Organization</div>
      <div class="value">${formData.organization}</div>
    </div>
    ` : ''}

    ${formData.message ? `
    <div class="field">
      <div class="label">Message</div>
      <div class="message">${formData.message}</div>
    </div>
    ` : ''}
  </div>

  <div class="footer">
    <p>This email was sent from the Sigmatrix LLC contact form.</p>
    <p>© ${new Date().getFullYear()} Sigmatrix LLC. All rights reserved.</p>
  </div>
</body>
</html>
    `;

    const textContent = `
New Contact Form Submission - InterEx Healthcare Platform

Inquiry Type: ${inquiryType}
Name: ${formData.name}
Email: ${formData.email}
${formData.organization ? `Organization: ${formData.organization}` : ''}

${formData.message ? `Message:\n${formData.message}` : 'No message provided'}

---
This email was sent from the Sigmatrix LLC contact form.
© ${new Date().getFullYear()} Sigmatrix LLC. All rights reserved.
    `.trim();

    // Send email via Resend API
    const response = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'InterEx Platform <no-reply@support.sigmatrixllc.com>',
        to: ['support@sigmatrixllc.com'],
        cc: [formData.email], // CC the person who submitted the form
        reply_to: formData.email,
        subject: `New Contact Form: ${inquiryType} - ${formData.name}`,
        html: htmlContent,
        text: textContent,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', data);
      return res.status(response.status).json({ 
        error: 'Failed to send email', 
        details: data 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      id: data.id 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
