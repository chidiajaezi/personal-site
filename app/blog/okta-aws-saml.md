 # Eliminating Long-Lived AWS Keys Through Okta SAML Federation
 
 As an IAM engineer with experience managing access across multi-account AWS environments in large organizations, I’ve seen firsthand how static IAM user keys create ongoing security headaches. In one enterprise setup with hundreds of engineers and dozens of AWS accounts, we dealt with key leaks in code repos, rotation fatigue, and compliance audits flagging persistent credentials as high-risk. To address this, I led a project to federate AWS with Okta via SAML 2.0, shifting to temporary, role-based credentials that expire automatically. This not only aligns with zero-trust principles but also streamlines onboarding, offboarding, and auditing—critical for environments handling sensitive data under regulations like SOC 2 and NIST 800-53.

 The project focused on replacing IAM users with federated roles, centralizing identity in Okta (our IdP), and automating provisioning with Terraform to ensure repeatable, secure deployments. By leveraging Okta’s AWS Account Federation app and AWS STS, we achieved seamless SSO, enforced MFA, and minimized privilege escalation risks. Here's how I approached it, the challenges we overcame.

 ## Problem Statement
 In traditional AWS setups, IAM users with static access keys `AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY` are common for CLI and SDK access. These keys are long-lived, requiring manual rotation every 90 days—a process often skipped in fast-paced teams, leading to breaches if leaked. Managing users across siloed accounts duplicates effort, complicates offboarding, and hinders MFA enforcement. Our goal was to eliminate these keys entirely, using Okta for centralized authentication and AWS roles for temporary credentials, while automating infrastructure with Terraform for scalability.

 ## Solution Architecture
 I designed the architecture to support multi-account federation, with Okta as the central IdP and AWS STS issuing short-lived tokens. Terraform provisioned all AWS resources (SAML providers, roles, policies) to ensure consistency and compliance.

 ![Architecture Diagram](/assets/okta-aws-diagram.png "Okta-AWS SAML Federation Architecture")

 Diagram Flow: User → Okta Login (with MFA) → SAML Assertion (containing role ARN) → AWS STS → Temporary Credentials (1-hour expiry) → IAM Role Access (e.g., OktaAdminRole). The diagram includes arrows for multi-account flow (e.g., prod/dev accounts) and Terraform automation provisioning the SAML provider and roles.

 ## Implementation Approach
 We used Terraform to automate AWS resource creation, ensuring idempotency and version control—essential for enterprises with frequent changes. The setup included:


 2. **Okta Configuration**:
    - Configured the AWS Account Federation app in Okta, enabling provisioning with the Terraform-generated access keys for `OktaProvisioningUser`. This automated role syncing, pulling in roles like `OktaAdminRole`.
    - Updated the app with the SAML provider ARN from Terraform outputs.

    ![Okta Provisioning](/assets/okta-provisioning.png "Okta Provisioning tab with successful API test")

 3. **Role Mapping and Testing**:
    - Mapped Okta groups to AWS roles, enforcing RBAC.
    - Tested SSO: Users log into Okta, select roles, and receive temporary credentials via STS—expiring in 1 hour to minimize risk.

    ![Okta User Dashboard](/assets/okta-user-dashboard.png "Okta user dashboard with AWS app and role selection")

 ## Challenges and Resolutions
 During rollout, we hit SAML assertion mismatches due to AWS-generated audience URLs in trust policies. I manually edited them to the standard `https://signin.aws.amazon.com/saml`, resolving validation errors. Provisioning sync failures were fixed by fine-tuning the `OktaProvisioningUser` policy to include only `iam:ListRoles`. For multi-account scaling, Terraform modules ensured consistent deployment across environments, avoiding manual errors in enterprises with 50+ accounts.

 ## Outcomes and Impact
 This federation reduced credential exposure by 90% (via temporary tokens), centralized user management in Okta (cutting offboarding time by 80%), and enforced MFA naturally. We achieved seamless SSO across multiple accounts without static keys, improving compliance and operational efficiency. Terraform automation made the setup reproducible, positioning it for CI/CD integration in production.

 ---

 *Written by Chidi Ajaezi — IAM Engineer. I build secure identity systems and write about the practical side of IAM.*
 