import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h2 className="text-uppercase">
              <b>Our Vision</b>
            </h2>

            <p>
              <h3>
                <ul>
                  <li>
                    {" "}
                    Embracing Technology to Enhance Learning and Collaboration.
                  </li>
                  <li>
                    Our vision for school websites is to create a dynamic and
                    inclusive online learning environment that empowers
                    students, educators, and parents. Through the integration of
                    technology, we aim to enhance educational experiences,
                    foster collaboration, and promote lifelong learning.
                  </li>
                  <li>
                    “Empowering Students with Digital Skills for the Future.
                  </li>
                </ul>
              </h3>
            </p>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
            <h2 className="text-uppercase">
              <b>Our Mission</b>
            </h2>

            <p>
              <h3>
                <ul>
                  <li>
                    To provide a user-friendly and intuitive platform that
                    enables seamless access to educational resources, empowering
                    students to explore, learn, and excel.
                  </li>
                  <li>
                    “To foster effective communication and collaboration between
                    students, parents, teachers, and administrators, creating a
                    strong partnership in the educational journey.”
                  </li>
                  <li>
                    To showcase the achievements, talents, and diverse
                    experiences of our school community, promoting a sense of
                    pride and unity.
                  </li>
                </ul>
              </h3>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://mdbootstrap.com/">
          OrionSchool.com
        </a>
      </div>
    </MDBFooter>
  );
}
