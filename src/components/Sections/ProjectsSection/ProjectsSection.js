import "../Section.css";
import Project from "../../Project/Project";

const projects = [
    {
        id: 1,
        projectName: "Rateit",
        description: "A website where users can find and rate programming tools based on different characteristics.",
        previewImg: "rateit",
        deployLink: "https://rateit-e0014fad4ba9.herokuapp.com",
        repoLink: "https://github.com/JimmyJr77/rateit",
        toolsUsed: ['Handlebars', 'Sequelize', 'Express', 'Node', 'Bootsrap', 'JavaScript', 'CSS'],
    },
    {
        id: 2,
        projectName: "TotK Bingo",
        description: "A bingo board of randomly generated challenges for Tears of the Kingdom. Players can create virtual rooms and race each other in real time.",
        previewImg: "totkBingo",
        deployLink: "https://totkbingo-728f1f6f6e8d.herokuapp.com",
        repoLink: "https://github.com/jacob-medina/totk-bingo",
        toolsUsed: ['Socket.io', 'Express', 'Node', 'jQuery', 'Bootsrap', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        id: 3,
        projectName: "Stackology",
        description: "A community run blog for full stack developers. Users can sign in to write blog posts and create comments.",
        previewImg: "stackology",
        deployLink: "https://stackology-ac660c15f415.herokuapp.com",
        repoLink: "https://github.com/jacob-medina/stackology",
        toolsUsed: ['Handlebars', 'Sequelize', 'Express', 'Node', 'Bootsrap', 'JavaScript'],
    },
    {
        id: 4,
        projectName: "Pixel Bee",
        description: "A community pixel art drawing board where each drawing fills a cell in the beehive.",
        previewImg: "pixelBee",
        deployLink: "https://pixelbee-cad6c3eb77b1.herokuapp.com",
        repoLink: "https://github.com/jacob-medina/pixel-bee",
        toolsUsed: ['Express', 'Node', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        id: 5,
        projectName: "Odd Quote Odd: Kanye Edition",
        description: "A quiz game where players spot quotes from Kanye West hidden among a pool of other quotes. Players can save quotes they see along the way for future review.",
        previewImg: "oddQuoteOut",
        deployLink: "https://iab-19.github.io/odd_quote_out_kanye_edition",
        repoLink: "https://github.com/iab-19/odd_quote_out_kanye_edition",
        toolsUsed: ['jQuery', 'Materialize', 'JavaScript', 'HTML', 'CSS'],
    },
];

export default function ProjectsSection() {
    return (
        <section id="project-section" className="section-light">
            <h2>My Projects.</h2>

            {projects.map(p =>
                <Project 
                    key={p.id}
                    projectName={p.projectName}
                    description={p.description}
                    previewImg={p.previewImg}
                    deployLink={p.deployLink}
                    repoLink={p.repoLink}
                    toolsUsed={p.toolsUsed}
                />
            )}
        </section>
    )
}