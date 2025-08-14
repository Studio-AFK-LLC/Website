const PrinciplesSection = () => {
  return (
    <section id="principles" className="section bg-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-highlight/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="text-highlight">Principles</span></h2>
          <p className="text-text-secondary text-lg">
            The core values that guide our development process and product decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Privacy First",
              description: "We collect the bare minimum data, and we're transparent about it. Your personal information is yours alone.",
              icon: (
                <svg className="w-16 h-16 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              ),
            },
            {
              title: "Problem-Solving Design",
              description: "Every feature we build aims to solve a real problem. We focus on creating genuinely useful tools and experiences.",
              icon: (
                <svg className="w-16 h-16 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              ),
            },
            {
              title: "Iterative Development",
              description: "We build, test, and improve based on real feedback. Our products evolve through continuous refinement.",
              icon: (
                <svg className="w-16 h-16 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
              ),
            },
          ].map((principle, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-primary rounded-full">
                {principle.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
              <p className="text-text-secondary">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
