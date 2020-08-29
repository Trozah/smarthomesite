import React from 'react'

export const Footer = () => (
    <footer className="site-footer my-4">
    <div className="container">
        <div className="row">
        <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Account</a>
            </li>
            <li>
                <a href="#">Forum</a>
            </li>
            <li>
                <a href="/contactus.html">Contact</a>
            </li>
            </ul>
        </div>
        <div className="col-6 col-sm-5 text-center">
            <h5>Please Follow</h5>
            <a
            className="btn btn-social-icon btn-instagram"
            href="http://instagram.com/"
            >
            <i className="fa fa-2x fa-instagram" />
            </a>
            <a
            className="btn btn-social-icon btn-facebook"
            href="http://facebook.com/"
            >
            <i className="fa fa-2x fa-facebook" />
            </a>
            <a
            className="btn btn-social-icon btn-twitter"
            href="http://twitter.com/"
            >
            <i className="fa fa-2x fa-twitter" />
            </a>
            <a
            className="btn btn-social-icon btn-google"
            href="http://youtube.com/"
            >
            <i className="fa fa-2x fa-youtube" />
            </a>
        </div>
        <div className="col-sm-4 text-center">
            <a role="button" className="btn btn-link" href="tel:+12065551234">
            <i className="fa fa-phone" />
            1-309-515-1224
            </a>
            <br />
            <a className="btn btn-link" href="mailto:campsites@nucamp.co">
            <i className="fa fa-envelope-o" />
            portfolio@nucamp.co
            </a>
        </div>
        </div>
    </div>
    </footer>
)
