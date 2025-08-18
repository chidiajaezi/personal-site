export default function OktaOidcMfa() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Okta OIDC + MFA Integration</h1>
      <p className="mb-4">
        Implemented modern authentication with adaptive MFA using Okta OIDC, enabling secure, context-aware access control for applications and APIs in a multi-user environment.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Seamless OIDC integration for standards-based auth flows.</li>
        <li>Adaptive MFA policies based on risk signals like location and device.</li>
        <li>Improved security and user experience with step-up authentication.</li>
      </ul>
      <p>
        <a href="/projects/okta-oidc-mfa" className="text-blue-600 underline">Full case study coming soon</a>
      </p>
      <img src="/assets/okta-oidc-diagram.png" alt="Architecture Diagram of Okta OIDC + MFA Integration" className="mx-auto max-w-[800px] w-full h-auto my-4 rounded-lg" />
    </div>
  );
}