import React from 'react'

export const Home = () => (
    <div>
        <div className="container mt-4">
            <div className="row">
                <div className="col col-6 ">
                    <div className="text-left align-middle">
                    <h1 className="my-6 mt-5">Smart Home Concierge</h1>
                    <h4 className="text-wrap d-none d-sm-block">
                        Quickly find the next smart home <br /> device you didn't know you
                        needed.
                    </h4>
                    <button
                        type="button"
                        id="Eco"
                        name="Ecosystem"
                        className="btn btn-outline mx-auto mt-5"
                    >
                        Search by Ecosytem
                    </button>
                    <button
                        type="button"
                        id="device"
                        name="device"
                        className="btn btn-outline-secondary  ml-4 mt-5"
                    >
                        Search by Device
                    </button>
                    </div>
                </div>
                <div className="col col-sm ">
                    <img className="d-block d-flex ml-3 img-fluid" src="http://localhost:3003/img/stephan-bechert-yFV39g6AZ5o-unsplash.jpg" />
                </div>
                </div>
            </div>
            <div className="row row-content mt-5 ">
                <div className="col text-center">
                <h3 className="row-header">Ecosystems</h3>
                <hr className="mt-4 line" />
                <hr className="mb-4 line-short" />
                </div>
            </div>
            <div className="row row-cols-md-3 row-cols-sm-1 mt-5 mb-5">
                <div className="col text-center \">
                <a className="btn" href="homekit.html">
                    <i className="mx-5 fa fa-apple fa-3x" aria-hidden="true" />
                    <h5 className="mt-2">Apple HomeKit</h5>
                </a>
                </div>
                <div className="col text-center ">
                <a className="btn" href="#">
                    <i className="mx-5 fa fa-amazon fa-3x " aria-hidden="true" />
                    <h5 className="mt-2">Amazon Alexa</h5>
                </a>
                </div>
                <div className="col text-center ">
                <a className="btn" href="google.html">
                    <i className="mx-5 fa fa-google fa-3x" aria-hidden="true" />
                    <h5 className="mt-2">Google Nest</h5>
                </a>
                </div>
            </div>
            <div className="row row-content mt-5 ">
                <div className="col text-center">
                <h3 className="row-header">Device Types</h3>
            </div>
                    {
        /*Card Deck*/
        }
        <div className="row row-col">
        <div className="card-deck mx-sm-3 mx-auto">
            <div
            className="card border-secondary mb-3 text-center"
            style={{ maxWidth: "28rem" }}
            >
            <img
                src="https://cdn.pixabay.com/photo/2020/03/05/17/36/smart-home-4905026__340.jpg"
                className="card-img-top p-2"
                alt="..."
                style={{ maxHeight: 200 }}
            />
            <div className="card-body">
                <h5 className="card-title">Automation</h5>
                <p className="card-text">
                This text will explain benefits of home automation and the types of
                devices available today. This section will also give a few examples of
                how vistors can automate thnigs in thier home.
                </p>
            </div>
            </div>
            <div
            className="card border-secondary mb-3 text-center"
            style={{ maxWidth: "28rem" }}
            >
            <img
                src="https://cdn.pixabay.com/photo/2018/12/14/11/48/smart-3874907_960_720.jpg"
                className="card-img-top p-2"
                alt="..."
                style={{ maxHeight: 200 }}
            />
            <div className="card-body">
                <h5 className="card-title">Security</h5>
                <p className="card-text">
                This text will explain benefits of automating home Security and the
                types of devices available today. This section will also give a few
                examples of how vistors can automate home security in thier home.
                </p>
            </div>
            </div>
            <div
            className="card border-secondary mb-3 text-center"
            style={{ maxWidth: "28rem" }}
            >
            <img
                src="https://cdn.pixabay.com/photo/2017/08/10/00/41/home-2616543__340.jpg"
                className="card-img-top p-2"
                alt="..."
                style={{ maxHeight: 200 }}
            />
            <div className="card-body">
                <h5 className="card-title">Entertainment</h5>
                <p className="card-text">
                This text will explain benefits of using lights and speakers to
                enhance home automation and the types of devices available today. This
                section will also give a few examples of how vistors can automate
                entertainment in thier home.
                </p>
            </div>
            </div>
        </div>
        </div>;

        </div>
    </div>

)

export default Home;
