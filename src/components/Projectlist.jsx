import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import netfliximage from '../assets/images/netflix.jpg'
import DisneyImage from '../assets/images/Disney.png'
import msm from '../assets/images/msm.png'
import "../pages/style.css";


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                title="Netflix-Clone"
                description="This project is a simplified front-end clone of Netflix. It was created with React js. It uses TMDB (The Movie Data Base ) API and uses the Axios tool. Users can click movie images with embedded YouTube trailers or related videos about the movie."
                ghLink="https://rambhai007.github.io/Netflix_clone/"
              />
              
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={DisneyImage}
                title="Disney-CLone"
                description="This project is a simplified front-end clone of Disney. It was created with vite+React js. It uses TMDB (The Movie Data Base ) API and uses the Axios tool. "
                ghLink="https://rambhai007.github.io/DisneyClone/"
                />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={msm}
                title="MSM-Unify"
                description="MSM Unify is a student marketplace that connects students with educational institutions and recruitment partners worldwide. We unify and allow everyone in the industry to work collaboratively to reach the world's curious learners and provide them with various options regarding their education."
                ghLink="https://www.msmunify.com/"
                />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
