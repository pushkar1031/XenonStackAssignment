import { Card } from "react-bootstrap";

export function AboutUs() {
  return (
    <Card
      style={{
        background: "#ffffe6",
        border: "4px solid red",
        margin: "10px",
        padding: "5px",
      }}
    >
      <center>
        <Card.Img
          variant="top"
          src="\images\about.jpg"
          style={{ width: "40%", padding: "15px" }}
        />
      </center>
      <Card.Body>
        <Card.Text style={{ color: "#000066" }}>
          <h3>
            ‘Orion School’ <br></br>
            <br></br>
            we believe that education is the foundation for building a brighter
            future. Our institution has been a pillar of academic excellence and
            holistic development for students for over [number] years. Our
            dedicated faculty, state-of-the-art facilities, and diverse range of
            programs provide an enriching environment for students to thrive and
            grow. we offer a comprehensive and rigorous academic program that
            encompasses a wide range of subjects, including science, technology,
            engineering, mathematics, humanities, and the arts. Our curriculum
            is designed to challenge and inspire students, fostering their
            intellectual curiosity and love for learning. We also provide ample
            opportunities for extracurricular activities, clubs, and sports to
            ensure a well-rounded education. We invite you to explore our
            website to learn more about the vibrant and dynamic educational
            experience we offer at [School Name]. Join us in shaping the future
            leaders of tomorrow and providing them with the tools they need to
            make a positive impact on the world.
          </h3>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
