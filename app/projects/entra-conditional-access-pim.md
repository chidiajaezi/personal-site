export default function EntraConditionalAccessPim() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Entra ID Conditional Access + PIM</h1>
      <p className="mb-4">
        Developed a risk-based access control system using Entra ID Conditional Access and Privileged Identity Management (PIM) for just-in-time (JIT) privilege escalation, enhancing security in enterprise environments with dynamic policy enforcement.
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Risk-based conditional access policies for real-time evaluations.</li>
        <li>JIT privilege assignment via PIM to minimize standing access.</li>
        <li>Integration with auditing and compliance tools for oversight.</li>
      </ul>
      <p>
        <a href="/projects/entra-conditional-access-pim" className="text-blue-600 underline">Full case study coming soon</a>
      </p>
      <img src="/assets/entra-pim-diagram.png" alt="Architecture Diagram of Entra ID Conditional Access + PIM" className="mx-auto max-w-[800px] w-full h-auto my-4 rounded-lg" />
    </div>
  );
}