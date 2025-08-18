export const metadata = {
  title: "SCIM in Plain English: The Protocol Every IAM Engineer Should Know",
  description: "What SCIM is, why it matters, and how it fits with SSO in modern IAM.",
}

# SCIM in Plain English: The Protocol Every IAM Engineer Should Know

Identity and Access Management isn’t just about logging in. It’s about making sure people get **the right accounts at the right time**—and lose them when they shouldn’t have them anymore. That’s the job SCIM does well.

**SCIM** (System for Cross-domain Identity Management) is a simple, standard way for your identity provider (Okta, Entra ID/Azure AD, Ping) to `create`, `update`, and `deactivate` user accounts in other systems (Slack, Zoom, AWS, your internal apps). No more CSVs. No more click-fests.


## What SCIM really does

- **Onboarding**: HR adds a new hire → IdP tells apps to create an account with the right attributes.
- **Changes**: Role, department, or manager changes → apps get updated automatically.
- **Offboarding**: Termination → apps are deactivated or deleted immediately.

It’s a `REST API` + `JSON` standard both sides agree on. That’s the magic: predictable, repeatable automation.

![SCIM Architecture Flow](/assets/scim-architecture.png)
*IdP drives account lifecycle into SaaS apps via SCIM.*


## Why IAM teams care

1. **Security & hygiene**: Fewer “ghost” accounts. Faster de-provisioning.
2. **Scale**: Works across dozens of apps without custom scripts.
3. **Compliance**: Clean audit trail for joiners/movers/leavers.
4. **Time back**: Stop doing spreadsheets. Start doing architecture.

![Before vs After with SCIM](/assets/scim-before-after.png)
*Manual app-by-app provisioning vs automated SCIM push from the IdP.*


## SCIM vs SSO (and why you need both)

- **SSO** = how people sign in (authentication).  
- **SCIM** = who exists in the app and what they should have (lifecycle).

If you only enable SSO, you’ve solved `login`, not `lifecycle`.  
If you only enable SCIM, you’ve solved `accounts`, not `authentication`.  
Together, you get the full identity picture.

![SSO vs Lifecycle](/assets/scim-sso-vs-lifecycle.png)
*SSO handles sign-in; SCIM handles lifecycle. The overlap is where IAM shines.*


## How the flow looks (end-to-end)

1. **HR** hires, changes, or terminates a user.  
2. **IdP** receives that change from HR (direct integration or import).  
3. **SCIM** calls go out to apps to create/update/deactivate the user.  
4. **App** applies its local roles/groups based on what the IdP sent.

![Lifecycle sequence](/assets/scim-sequence.png)
*HR → IdP → SCIM → App. Create, update, and deactivate travel the same pipeline.*


## Practical notes from the field

- **Attributes matter**: Standard SCIM attributes (userName, name, emails) + custom attributes power real RBAC in apps.
- **Provisioning windows**: Some apps process in near real-time; others batch. Set expectations with stakeholders.
- **Conflict rules**: Decide who wins when attributes differ (HR vs IdP).
- **Break-glass**: Keep an emergency access path that doesn’t depend on SCIM/SSO.



## TL;DR

If you’re rolling out SSO without SCIM, you’re only halfway there. SCIM is the boring-but-beautiful backbone of identity lifecycle at scale. Learn it, use it, and your future self (and your auditors) will thank you.

---

*Written by Chidi Ajaezi — IAM Engineer. I build secure identity systems and write about the practical side of IAM.*
