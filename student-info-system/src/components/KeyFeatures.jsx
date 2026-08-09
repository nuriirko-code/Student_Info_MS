function KeyFeatures() {

   const features = [
  {
    title: "Attendance Tracking",
    desc: "Monitor student and staff daily attendance in real-time.",
    icon: "fa-calendar-check"
  },
  {
    title: "Grade & Report Cards",
    desc: "Generate accurate report cards and track academic progress automatically.",
    icon: "fa-chart-bar"
  },
  {
    title: "Parent Communication",
    desc: "Send instant updates, announcements, and performance alerts to parents.",
    icon: "fa-envelope"
  },
  {
    title: "Fee & Payment Tracking",
    desc: "Manage tuition collection, outstanding balances, and digital receipts effortlessly.",
    icon: "fa-money-bill-wave"
  }
];



return (
<section className = "features-section">
    <div className = "container">
        <h2>Key Features</h2>
        <p>Everything you need to streamline school operations, empower teachers and engage partners</p>
       <div className ="key-features-grid">
            {features.map((item,index) => (
              <div className="feature-card" key={index}>
                   <i className ={`fas ${item.icon}`}></i>
                  <h3>{item.title}</h3>
                   <p>{item.desc}</p>

                </div>
         
           
            ) ) }
    
        </div>
    </div>
</section> 
);
}
export default KeyFeatures;