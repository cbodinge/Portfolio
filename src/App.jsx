import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import PSVGPage from './PSVGPage';
import PyGraphingPage from "./PyGraphingPage";

export default function App() {
    return (
        <Router>
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
