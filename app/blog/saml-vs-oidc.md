

# SAML vs OIDC: When to Use Which

When you connect applications to an identity provider, two acronyms come up again and again: `SAML` and `OIDC`. Both are protocols for Single Sign-On (SSO). Both reduce password fatigue. But they’re not the same — and choosing the right one matters for user experience, security, and long-term maintainability.


## The Short Answer

- **SAML** is the veteran: XML-based, enterprise-heavy, widely supported by older SaaS apps.  
- **OIDC** is the modern option: JSON-based, mobile-friendly, built on OAuth 2.0.  

If you’re integrating an enterprise SaaS like Workday or Salesforce, you’ll likely end up with `SAML`. If you’re building or securing a modern web/mobile app, you’ll want `OIDC`.


![Protocol logos comparison](/assets/protocols-compare.png)  
<p align="center"><em>Two SSO protocols. Same goal, different design.</em></p>


## What is SAML?

SAML (Security Assertion Markup Language) has been around since the early 2000s. It uses `XML-based assertions` to tell a service provider (SP) that a user has authenticated with an identity provider (IdP).

Why enterprises love it:
- Broad vendor support.
- Stable, mature, auditor-approved.
- Designed for enterprise SaaS integrations.

Where it struggles:
- XML is verbose and complex.
- Poor mobile support.
- Doesn’t align well with modern API-driven workflows.


![SAML flow diagram](/assets/saml-flow.png)  
<p align="center"><em>User authenticates at IdP, IdP sends a SAML Assertion, SP grants access.</em></p>


## What is OIDC?

OIDC (OpenID Connect) is the modern choice. It’s a thin identity layer on top of `OAuth 2.0` that uses `JSON Web Tokens (JWTs)`.

Why developers love it:
- Lightweight and JSON-native.
- Great for mobile and single-page apps.
- Works naturally with APIs and modern OAuth flows.
- Supports modern security features like PKCE.

Where it struggles:
- Not always supported in older enterprise SaaS.
- Enterprises may need to run OIDC + SAML side by side.


![OIDC flow diagram](/assets/oidc-flow.png)  
<p align="center"><em>User authenticates at IdP, OIDC issues a JWT, app/API validates token.</em></p>



## When to Use Which

**Use SAML when:**
- Connecting to legacy or enterprise SaaS.
- Vendor only supports SAML.
- Compliance teams are already invested in SAML-based audits.

**Use OIDC when:**
- Building or securing new apps (especially mobile).
- Need lightweight, API-friendly integration.
- Developer experience and scalability matter.


## Real-World Example

At one enterprise, we connected Workday and ServiceNow with SAML because the vendor integrations required it. At the same time, we built an internal developer platform with OIDC, because it worked seamlessly with APIs and mobile apps.  

The result? A hybrid environment — and that’s normal. Most organizations run both SAML and OIDC side by side today.


`SAML` isn’t dead. `OIDC` isn’t optional. Enterprises need both.  

- **SAML** will stay relevant as long as legacy SaaS vendors exist.  
- **OIDC** is the future for apps, APIs, and mobile.  




---

*Written by Chidi Ajaezi — IAM Engineer. I design and implement enterprise identity solutions, and I write about practical IAM in the real world.*
