export default function PortfolioPage() {
    return (
        <section id="my-work">
            <h2>My Work</h2>
            <hr />
            <div className="projects">
                <div className="main-projects">
                    <a href="https://dog-boarding-made-easy-e9bece2e7102.herokuapp.com/login" target="_blank" className="animate" id="project-one"
                        aria-label="Web application for dog boarding.">
                        <div>
                            <h3>DB Easy</h3>
                            <p>Dog Boarding Made Easy</p>
                        </div>    
                    </a>
                </div>
                <div className="side-projects">
                    <a href="https://www.linkedin.com/in/nick-holder-570110272/" target="_blank" className="animate" id="project-three"
                        aria-label="5 day weather forecast">
                        <div>
                            <h3>Weather Dashboard</h3>
                            <p>Utilizing weather API to see a 5 day forecast</p>
                        </div>
                    </a>
                    <a href="https://github.com/nickholder6425/SQL-Employee-Tracker" target="_blank" className="animate" id="project-four"
                        aria-label="Employee Manager">
                        <div>
                            <h3>Employee Manager</h3>
                            <p>Employee Database App written in MySQL and JavaScript</p>
                        </div>
                    </a>
                    <a href="https://github.com/nickholder6425/Work-Day-Scheduler-Challenge-5" target="_blank" className="animate" id="project-five"
                        aria-label="Work Day Scheduler">
                        <div>
                            <h3>Work Day Scheduler</h3>
                            <p>A simple calendar application that allows user to save events for each hour of a typical work day (9am-5pm).</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}