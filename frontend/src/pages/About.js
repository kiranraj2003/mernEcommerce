import React from 'react'

const About = () => {
  return (
    <>
      <section class="py-3 py-md-5">
        <div class="container">
          <div class="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div class="col-12 col-lg-6 col-xl-5">
              <img
                class="img-fluid rounded"
                loading="lazy"
                src="https://as2.ftcdn.net/v2/jpg/06/13/33/21/1000_F_613332177_rdl36d2CnlqC1tqGQE3CizEJdu9G2Ltj.jpg"
                alt="About kbkb1"
              />
            </div>
            <div class="col-12 col-lg-6 col-xl-7">
              <div class="row justify-content-xl-center">
                <div class="col-12 col-xl-11">
                  <h2 class="mb-3">Who Are We?</h2>
                  <p class="lead fs-4 text-secondary mb-3">
                    We help people to build incredible brands and superior
                    products. Our perspective is to furnish outstanding
                    captivating services.
                  </p>
                  <p class="mb-5">
                    We are a fast-growing company, but we have never lost sight
                    of our core values. We believe in collaboration, innovation,
                    and customer satisfaction. We are always looking for new
                    ways to improve our products and services.
                  </p>
                  <div class="row gy-4 gy-md-0 gx-xxl-5X">
                    <div class="col-12 col-md-6">
                      <div class="d-flex">
                        <div class="me-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            class="bi bi-gear-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                          </svg>
                        </div>
                        <div>
                          <h2 class="h4 mb-3">Versatile Brand</h2>
                          <p class="text-secondary mb-0">
                            We are crafting a digital method that subsists life
                            across all mediums.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="d-flex">
                        <div class="me-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="currentColor"
                            class="bi bi-fire"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
                          </svg>
                        </div>
                        <div>
                          <h2 class="h4 mb-3">Digital Agency</h2>
                          <p class="text-secondary mb-0">
                            We believe in innovation by merging primary with
                            elaborate ideas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5 bg-light">
        <div class="container">
          <h2 class="text-center mb-4">Our Vision, Our Mission, Our Values</h2>
          <div class="row">
            <div class="col-md-12">
              <div class="p-4 bg-white shadow rounded">
                <p class="lead">
                  Our vision is to be a leading force in innovation and
                  excellence, creating impactful solutions that enhance lives
                  and shape a better future. Our mission is to deliver
                  high-quality and sustainable solutions tailored to our
                  customers' needs, foster a culture of innovation,
                  collaboration, and continuous growth, and empower individuals
                  and businesses with cutting-edge technology.
                </p>
                <p>
                  We are guided by our core values:
                  <strong>Integrity</strong>, ensuring honesty and transparency
                  in all our actions;
                  <strong>Innovation</strong>, driving us to stay ahead with
                  creative and technology-driven solutions;
                  <strong>Customer-Centricity</strong>, keeping our clients at
                  the heart of everything we do;
                  <strong>Excellence</strong>, maintaining high standards in our
                  work; and
                  <strong>Collaboration</strong>, fostering teamwork and strong
                  partnerships to achieve success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About