import React from "react";



export default () => {
    let data = [
        {
            name: "Kunchacko Thomas",
            profile: "./images/kunju.jpg",
            cover: "./images/cover-4.jpg",
            position: "Coordinator",
            mobile: "+919562593720",
            email: "kunchackothomas@gmail.com",
            facebook: "https://www.facebook.com/kunchac.ko.5",
            text: "ECE4"

        }, {
            name: "Ajith V Saju",
            profile: "./images/aji.jpeg",
            cover: "./images/rotating_card_thumb.png",
            position: "Sports Secretary",
            mobile: "‪+918228903733‬",
            email: "ajith3075saju@gmail.com",
            facebook: "https://www.facebook.com/ajith.saju.37",
            text: "CSE4"
        },
        {
            name: "Jaick Joseph",
            profile: "./images/Jaick.jpg",
            cover: "./images/rotating_card_thumb3.png",
            position: "Coordinator",
            mobile: "+917025432057",
            email: "",
            facebook: "https://www.facebook.com/jaick.joseph.7",
            text: "CSE4"

        },
        {
            name: "Aby Joseph",
            profile: "./images/Abi.jpg",
            cover: "./images/dd.jpg",
            position: "Coordinator",
            mobile: "+918281793889",
            email: "",
            facebook: "https://www.facebook.com/aby.joseph.7737",
            text: "EEE4"

        },
        {
            name: "Sandeep P V",
            profile: "./images/Sandeep.jpg",
            cover: "./images/aa.jpg",
            position: "Coordinator",
            mobile: "+918156951584",
            email: "sandeeppv96@gmail.com",
            facebook: "https://www.facebook.com/sandeep.pradeep.75",
            text: "CSE4"

        },
        {
            name: "Sourav R Krishna",
            profile: "./images/sou.jpg",
            cover: "./images/pp.jpg",
            position: "Coordinator",
            mobile: "+919544231285",
            email: "souravrkrishna0@gmail.com",
            facebook: "https://www.facebook.com/profile.php?id=100006788475733&ref=br_rs",
            text: "EEE4"

        }];

    return (
        <div>
            <div className="agileits-about-top-heading agileits-w3layouts-choose-heading">
                <h3>Coordinators</h3>
            </div>
            <div className="agile-choose-grids">
                {
                    data.map((single, i) => (
                        <Template key={i} {...single } />
                    ))
                }
            </div>
        </div>
    );
};

let Template = (props) => {
    return (
        <div className="col-sm-4 agile-choose-grid">

            <div className="card-container manual-flip">
                <div className="card">
                    <div className="front">
                        <div className="cover">
                            <img src={props.cover} />
                        </div>
                        <div className="user">
                            <img className="img-circle" src={props.profile} />
                        </div>
                        <div className="content">
                            <div className="main">
                                <h3 className="name">{props.name}</h3>
                                <p className="profession">
                                    {props.position}
                                </p>
                                <p className="text-center">
                                    {props.text}
                                </p>
                                <div className="social-links text-center">
                                    <a href={"mailto:" + props.email} className="facebook">
                                        <img className="userIcons" src="images/icon/email.svg" />
                                    </a>
                                    <a href={"tel:" + props.mobile} className="google">
                                        <img className="userIcons" src="images/icon/mobile-phone.svg" />
                                    </a>
                                    <a href={props.facebook} className="twitter">
                                        <img className="userIcons" src="images/icon/facebook.svg" />
                                    </a>
                                </div>
                            </div>
                            {/* <div className="footerProfile">
                                <i className="fa fa-mail-forward"></i> Auto Rotation
										</div> */}
                        </div>
                    </div>

                    <div className="back">
                        <div className="header">
                            <h5 className="motto">"To be or not to be, this is my awesome motto!"</h5>
                        </div>
                        <div className="content">
                            <div className="main">
                                <h4 className="text-center">Job Description</h4>
                                <p className="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...</p>

                                <div className="stats-container">
                                    <div className="stats">
                                        <h4>235</h4>
                                        <p>
                                            Followers
													</p>
                                    </div>
                                    <div className="stats">
                                        <h4>114</h4>
                                        <p>
                                            Following
													</p>
                                    </div>
                                    <div className="stats">
                                        <h4>35</h4>
                                        <p>
                                            Projects
													</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="footerProfile">
                            <div className="social-links text-center">
                                <a href="http://creative-tim.com" className="facebook">
                                    <i className="fa fa-facebook fa-fw"></i>
                                </a>
                                <a href="http://creative-tim.com" className="google">
                                    <i className="fa fa-google-plus fa-fw"></i>
                                </a>
                                <a href="http://creative-tim.com" className="twitter">
                                    <i className="fa fa-twitter fa-fw"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};