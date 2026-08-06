function HowItWorks()
 {
   const steps = [
                  {
                    title: "Login", 
                   description: "Access your account by logging in with your credentials.",
                   icon: "fa-sign-in-alt"
                  },


                  {
                   title: "Manage records",
                    description: "Update and maintain student information and academic records.",
                   icon: "fa-tasks"
                  },
      
                  { 
                     title: "Analyse data",
                      description: "view statistics and generate reports to make informed decisions.",
                     icon: "fa-chart-pie"
                   }
  
                ];
          
                return (
                    <section className = "how-it-works">
                        <div className="container">
                            <h2>How SIMS Works</h2>
                            <p className="section-subtitle">Three simple steps to manage your schools</p>
                            <div className="steps">
                                { steps.map((step,index) => (
                                    <div className="step" key={index}>
                                    <div className="step-number">{index + 1}</div>
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                        <i className={`fas ${step.icon}`}></i>
                                    </div>
                                  )  )

                                }
                            </div>
                        </div>
                    </section>
                )

 }
 export default HowItWorks;