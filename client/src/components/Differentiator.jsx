import React from 'react';

function Differentiator() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">What sets THINK41 apart ?</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <img src="poc-to-production.jpg" alt="POC to Production" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">POC to Production</h3>
          </div>
          <div className="text-center">
            <img src="conversational-ai-at-scale.jpg" alt="Conversational AI at Scale" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Conversational AI at Scale</h3>
          </div>
          <div className="text-center">
            <img src="custom-agent-development.jpg" alt="Custom Agent Development" className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Custom Agent Development</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Differentiator;
