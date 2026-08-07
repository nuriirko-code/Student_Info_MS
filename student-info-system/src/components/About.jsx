function About() {
    // 1. The data array (array of objects)
const features = [
    { 
        title: "Add Student",
        description: "Admin can register new students.",
        icon: "fas fa-user-plus"
    } ,
    {
        title: "View Records",
         description: "Search and find student data anytime.",
        icon: "fas fa-users"
    },
    {
        title: "Statistics",
        description: "View student statistics and reports.",
        icon: "fas fa-chart-bar"
    }
];

return (
    <section className="about" id="about">
        <div className="container">
            <h2>About Us</h2>
            <p>SIMS helps schools manage student information efficiently.</p>

            <div className="features">
                {/* Map through the features array and render each feature */}
                {features.map((item, index) => (
                    <div className="feature-box" key={index}>
                        <i className={`fas ${item.icon}`}></i>
                         <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
               ) )}
            </div>
        </div>

    </section>
);
}
export default About;