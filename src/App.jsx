import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import PSVGPage from './PSVGPage';
import PyGraphingPage from "./PyGraphingPage";

export default function App() {
    return (
        <Router basename={"Portfolio"}>
            <Routes>
                <Route path="/" element={<Portfolio/>}/>
                <Route path="/psvg" element={<PSVGPage/>}/>
                <Route path="/pygraphing" element={<PyGraphingPage/>}/>
            </Routes>
        </Router>
    );
}

function Portfolio() {
    return (
        <div className="p-6 space-y-8 bg-science-black min-h-screen">
            <header className="text-center section">
                <h1 className="text-4xl font-bold text-science-primary">Carter Bodinger</h1>
                <p className="text-lg text-science-muted">Data Integration Specialist • Scientific Software Engineer •
                    LIMS Architect</p>
                <p className="text-md text-gray-500">Little Rock, AR • (479) 567-4483 •
                    carterallenbodinger@yahoo.com</p>
                <div className="flex gap-4 justify-center">
                    <a href="https://github.com/cbodinge" target="_blank" aria-label="GitHub"
                       className="hover:fill-science-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                             className="w-6 h-6 fill-science-info">
                            <path
                                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.35-1.76-1.35-1.76-1.1-.76.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.5.12-3.13 0 0 1-.32 3.3 1.23a11.49 11.49 0 0 1 6 0C17 5.47 18 5.79 18 5.79c.66 1.63.24 2.83.12 3.13.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z"/>
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/carter-bodinger" target="_blank" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="science-info"
                             className="w-6 h-6 fill-science-info"
                             viewBox="0 0 24 24">
                            <path
                                d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.7v2.17h.07c.65-1.24 2.23-2.54 4.59-2.54 4.9 0 5.8 3.23 5.8 7.43V24h-5v-6.83c0-1.63-.03-3.72-2.27-3.72-2.28 0-2.63 1.78-2.63 3.61V24h-5V8z"/>
                        </svg>
                    </a>

                </div>

            </header>

            <section className="section">
                <h2 className="text-2xl font-semibold mb-4 text-science-info border-b border-gray-700 pb-1">Featured
                    Projects</h2>
                <div className="grid-two">

                    <ProjectCard
                        title="PSVG – Declarative SVG Generation"
                        tech="Python, Declarative SVG, Scientific Visualization"
                        highlights={[
                            'Authored & maintain a published Python library for programmatic SVG generation',
                            'Used in scientific and automated reporting pipelines',
                            'Supports graph-based DOM modeling, layout control, and publication-quality vector output',
                            'Over 50,000 installs via PyPI; pure Python with zero dependencies'
                        ]}
                        link="/psvg"
                    />

                    <ProjectCard
                        title="PyGraphing – Scientific SVG Plotting Engine"
                        tech="Python, SVG, Data Visualization, Custom DSL"
                        highlights={[
                            'Chainable, declarative syntax for plot construction',
                            'SVG-first rendering engine with no matplotlib dependency',
                            'Used in toxicology validation reports and automated pipelines',
                            'Custom modules for layout, axes, frames, legends, and bezier smoothing'
                        ]}
                        link="/pygraphing"
                    />

                    <ProjectCard
                        title="Scientific Data Platform for Toxicology Validation"
                        tech="Python, Django, PostgreSQL, AWS EC2/RDS"
                        highlights={[
                            'Automated report generation for toxicology validations',
                            'Reduced turnaround time by 80%',
                            'Processed 1M+ data points/day from LC-MS/MS'
                        ]}
                    />

                    <ProjectCard
                        title="Consumables Inventory System"
                        tech="Python, Django ORM, PostgreSQL"
                        highlights={[
                            'Real-time reagent tracking and forecasting',
                            '50% improvement in process efficiency',
                            'Integrated with existing LIMS'
                        ]}
                    />

                    <ProjectCard
                        title="Automated Lab Workflow Suite"
                        tech="Python, Shell, Django Admin"
                        highlights={[
                            'Automated sample ingestion pipelines',
                            'Boosted sample throughput by 50%',
                            'Connected with LabDAQ and LabNexus'
                        ]}
                    />

                    <ProjectCard
                        title="LC-MS/MS Data Analysis Pipeline"
                        tech="Python, NumPy, SciPy"
                        highlights={[
                            'Automated instrument data parsing and reporting',
                            'Real-time quality alerts and calibration checks',
                            'Ensured reproducibility for accreditation'
                        ]}
                    />

                    <ProjectCard
                        title="Toxicological Validation Database"
                        tech="PostgreSQL, Django Admin"
                        highlights={[
                            'Centralized all validation parameters and histories',
                            'Enabled cross-project statistical analysis',
                            'Provided secure access control'
                        ]}
                    />


                </div>
            </section>

            <section className="section">
                <h2 className="text-2xl font-semibold mb-4 text-science-info border-b border-gray-700 pb-1">Skills</h2>
                <ul className="grid-two text-science-muted list-disc">
                    <li className="pill">Python</li>
                    <li className="pill">Django</li>
                    <li className="pill">PostgreSQL</li>
                    <li className="pill">SQLite</li>
                    <li className="pill">Git</li>
                    <li className="pill">HTML/CSS</li>
                    <li className="pill">wxPython</li>
                    <li className="pill">AWS EC2 & RDS</li>
                    <li className="pill">LabDAQ / LabNexus</li>
                    <li className="pill">LC-MS/MS</li>
                </ul>
            </section>

            <section className="section">
                <h2 className="text-2xl font-semibold mb-4 text-science-info border-b border-gray-700 pb-1">Education</h2>
                <ul className="text-science-muted">
                    <li><strong className="text-science-primary">Rice University</strong> – MCS, 2023–2024</li>
                    <li><strong className="text-science-primary">University of Arkansas</strong> – BS in Chemical
                        Engineering, 2013–2017
                    </li>
                </ul>
            </section>
        </div>
    );
}

function ProjectCard({title, tech, highlights, link}) {
    const card = (
        <div
            className="card bg-science-surface border border-gray-700 rounded-2xl p-5 shadow-md hover:border-science-primary transition-colors">
            <h3 className="text-xl font-bold text-science-primary mb-1">{title}</h3>
            <p className="text-sm italic text-science-accent mb-2">Tech: {tech}</p>
            <ul className="list-disc list-inside space-y-1 text-science-muted">
                {highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                ))}
            </ul>
        </div>
    );

    return link ? <Link to={link} className="block">{card}</Link> : card;
}
