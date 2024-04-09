export default function PortfolioPage() {
    return (
        <section id="my-work">
            <h2>My Work</h2>
            <hr />
            <div className="projects">
                <div className="main-projects">
                    <a href="https://dog-boarding-made-easy-e9bece2e7102.herokuapp.com/login" target="_blank" className="animate" id="project-one"
                        aria-label="A login page for my dog business software">
                        <div>
                            <h3>DB Easy</h3>
                            <p>Dog Boarding Made Easy</p>
                        </div>
                    </a>
                    <a href="https://warhawk1950.github.io/Zesty-Bytes/" target="_blank" className="animate" id="project-one-2"
                        aria-label="A food recipe website">
                        <div>
                            <h3>Zesty Bytes</h3>
                            <p>Quick Recipe Search App</p>
                        </div>
                    </a>
                </div>
                <div className="side-projects">
                    <a href="https://andruegage.github.io/webapi-timed-quiz/" target="_blank" className="animate" id="project-two"
                        aria-label="Coding Quiz">
                        <div>
                            <h3>Timed Coding Quiz</h3>
                            <p>A Timed Quiz Challenge</p>
                        </div>
                    </a>
                    <a href="https://andruegage.github.io/weather-dashboard/" target="_blank" className="animate" id="project-three"
                        aria-label="5 day weather forecast">
                        <div>
                            <h3>Weather Dashboard</h3>
                            <p>Utilizing weather API to see a 5 day forecast</p>
                        </div>
                    </a>
                    <a href="https://github.com/AndrueGage/employee-tracker" target="_blank" className="animate" id="project-four"
                        aria-label="Employee Manager">
                        <div>
                            <h3>Employee Manager</h3>
                            <p>Employee Database App written in MySQL and JavaScript</p>
                        </div>
                    </a>
                    <a href="https://andruegage.github.io/work-day-scheduler/" target="_blank" className="animate" id="project-five"
                        aria-label="Work Day Scheduler">
                        <div>
                            <h3>Work Day Scheduler</h3>
                            <p>A Single Page App To Organize Your Work Day</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}