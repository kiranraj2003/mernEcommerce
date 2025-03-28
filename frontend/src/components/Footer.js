export default function Footer() {
  return (
    <footer class="text-center text-lg-start bg-body-tertiary text-muted">
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex flex-col ">
          <a href="#" class="px-4 text-reset">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#" class="px-4 text-reset">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#" class="px-4 text-reset">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="#" class="px-4 text-reset">
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
      </section>
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fa fa-shopping-cart me-3"></i> GenMart
              </h6>
              <p>Your one-stop online shopping destination.</p>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#" class="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#" class="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#" class="text-reset">
                  Help
                </a>
              </p>
            </div>
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="fa fa-envelope me-3"></i> kiran25042003@gmail.com
              </p>
              <p>
                <i class="fa fa-phone me-3"></i> +91 6382837147
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        class="text-center p-4"
        style={{"background-color":" rgba(0, 0, 0, 0.05)"}}
      >
        &copy; 2025 GenMart. All rights reserved.
      </div>
    </footer>
  );
}
