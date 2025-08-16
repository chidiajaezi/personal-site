export default function IamFederation() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Okta-AWS SAML Federation for Enterprise IAM</h1>
        <p className="mb-4">
          Designed a scalable, zero-trust IAM solution to eliminate long-lived AWS keys using Okta SAML 2.0 federation, Terraform automation, and MFA enforcement for a simulated 100-user enterprise across multiple accounts.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Automated AWS resource provisioning with Terraform.</li>
          <li>Centralized identity with Okta, syncing roles via API.</li>
          <li>Enforced MFA and RBAC for compliance.</li>
        </ul>
        <p>
          <a href="/blog/okta-aws-saml" className="text-blue-600 underline">Read the full case study</a> |{' '}
          <a href="https://github.com/<your-username>/personal-site/tree/main/projects/iam-federation/terraform" className="text-blue-600 underline">View Terraform Code</a>
        </p>
        <img src="/assets/okta-aws-diagram.png" alt="Architecture Diagram of Okta-AWS SAML Federation" className="mx-auto max-w-[800px] w-full h-auto my-4 rounded-lg" />
      </div>
    );
  }