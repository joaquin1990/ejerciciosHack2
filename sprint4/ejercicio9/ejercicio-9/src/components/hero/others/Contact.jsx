import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <section className="container my-5">
        <h1 className="text-center text-danger mb-4">Contact Us</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label for="message" className="form-label">
                  Message
                </label>
                <textarea className="form-control" id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <Link to="/" className="mt-5">
        <button className="btn btn-danger bg-transparent btn-arrow-left text-danger ms-5 fw-bold ">
          <i class="fa-solid fa-arrow-left"></i> Back{" "}
        </button>
      </Link>
    </div>
  );
}
