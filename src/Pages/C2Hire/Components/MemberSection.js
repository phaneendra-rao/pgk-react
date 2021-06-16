import React, { useState } from "react";
import Card from "../Components/Card";
import Modal from "../Components/Modal";
import { teamsAndCredsSummary, memberHeader} from "../constants";

function MemberSection(props) {

    const { type, data } = props;

    const [para1, para2, para3] = teamsAndCredsSummary[type];

    const [member, setMember] = useState({ descriptionParagraphs: [] });
    const [openPopup, setOpenPopup] = useState(false);

    const handleMemberPopup = (memberData) => {
        setMember(memberData);
        setOpenPopup(true);
    }


    return (
        <>
            <section className="c2hirePage-body Team-creds">
                <img
                    className="landing-bg-img2"
                    src="../../../images/c2hire/img/Group 591.svg"
                    alt=""
                    height="240px"
                    width="230px"
                />

                <div className="container">
                    <img
                        className="landing-bg-img1"
                        src="../../../images/c2hire/img/ellipseSquare.svg"
                        height="180px"
                        width="180px"
                        alt=""
                    />
                    <div className="Team-heading ">
                        <h1>{memberHeader[type]}</h1>
                    </div>
                    <div className="container info-container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 left-highlight">
                                <h1 className="highlight-text">
                                   {para1}
                                </h1>
                                <p className="description">
                                    {para2}
                                </p>
                                <p className="desc2">
                                    {para3}
                                </p>
                            </div>
                            <div className="col-lg-6 col-sm-12 right-img">
                                <img
                                    src="../../../images/c2hire/img/teamCredSvg.svg"
                                    alt=""
                                    height="316px"
                                    width="515px"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="container team-container">
                        <div className="our-team">
                            <div>
                                <label className="team-head">
                                    <span>Our</span>&nbsp;<span>{type}</span>
                                </label>
                                <hr />
                            </div>
                            <div className="card-carousel">
                                <Card list={data} openMember={handleMemberPopup} />
                            </div>
                        </div>
                    </div>
                </div>
                {openPopup && <Modal data={member} />}

            </section>
        </>
    )
}

export default MemberSection
