import React from "react";
import { C2HIRE_EMAIL } from "../constants";

function TermsAndConditions() {
  return (
    <section className="c2hirePage-body policy-terms">
      <img
        className="landing-bg-img2"
        src="../../../images/c2hire/img/Group 591.png"
        alt=""
        height="240px"
        width="230px"
      />

      <div className="container container-lg container-md container-xl">
        <img
          className="landing-bg-img1"
          src="../../../images/c2hire/img/ellipseSquare.svg"
          height="180px"
          width="180px"
          alt=""
        />
        <div className="policy-heading">
          <h1>Terms and Conditions</h1>
        </div>
        <div className="container container-lg container-md container-xl policy-paragraphs padspacing terms-para">
          <p>
            <label className="d-block">1. Terms</label>
            By accessing this web site, you are agreeing to be bound by these
            web site Terms and Conditions of Use, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this web site are protected by applicable
            copyright and trade mark law.
          </p>
          <p className="mb-3">
            <label className="d-block">2. Use License</label>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on C2Hire’s web site for
            personal, non-commercial transitory viewing only. This is the grant
            of a license, not a transfer of title, and under this license you
            may not:
            <div>
              <ol className="mb-3">
                <li>modify or copy the materials;</li>
                <li>
                  use the materials for any commercial purpose, or for any
                  public display (commercial or non-commercial);
                </li>
                <li>
                  attempt to decompile or reverse engineer any software
                  contained on C2Hire.;
                </li>
                <li>
                  remove any copyright or other proprietary notations from the
                  materials; or
                </li>
                <li>
                  transfer the materials to another person or “mirror” the
                  materials on any other server.
                </li>
              </ol>
            </div>
            <p>
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by C2Hire at any time.
              Upon terminating your viewing of these materials or upon the
              termination of this license, you must destroy any downloaded
              materials in your possession whether in electronic or printed
              format.
            </p>
          </p>
          <div className="discl">
            <label className="d-block">3. Disclaimer</label>
            <ol>
              <li>
                The materials on C2Hire’s web site are provided “as is”. C2Hire
                makes no warranties, expressed or implied, and hereby disclaims
                and negates all other warranties, including without limitation,
                implied warranties or conditions of merchantability, fitness for
                a particular purpose, or non-infringement of intellectual
                property or other violation of rights. Further, C2Hire does not
                warrant or make any representations concerning the accuracy,
                likely results, or reliability of the use of the materials on
                its Internet web site or otherwise relating to such materials or
                on any sites linked to this site.
              </li>
            </ol>
          </div>
          <p>
            <label className="d-block">4. Limitations</label>
            In no event shall C2Hire or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption,) arising out of the use or
            inability to use the materials on C2Hire’s Internet site, even if
            C2Hire or a C2Hire's authorized representative has been notified
            orally or in writing of the possibility of such damage. Because some
            jurisdictions do not allow limitations on implied warranties, or
            limitations of liability for consequential or incidental damages,
            these limitations may not apply to you.
          </p>
          <p>
            <label className="d-block">5. Revisions and Errata</label>
            The materials appearing on C2Hire’s web site could include
            technical, typographical, or photographic errors. C2Hire does not
            warrant that any of the materials on its web site are accurate,
            complete, or current. C2Hire may make changes to the materials
            contained on its web site at any time without notice. C2Hire does
            not, however, make any commitment to update the materials.
          </p>
          <p>
            <label className="d-block">6. Links</label>
            C2Hire has not reviewed all of the sites linked to its Internet web
            site and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by C2Hire
            of the site. Use of any such linked web site is at the user’s own
            risk.
          </p>
          <p>
            <label className="d-block">
              7. Site Terms of Use Modifications
            </label>
            C2Hire may revise these terms of use for its web site at any time
            without notice. By using this web site you are agreeing to be bound
            by the then current version of these Terms and Conditions of Use.
          </p>
          <p>
            <label className="d-block">8. Governing Law</label>
            Any claim relating to C2Hire's web site shall be governed by the
            laws of the State of India without regard to its conflict of law
            provisions. General Terms and Conditions applicable to Use of a Web
            Site.
          </p>
          <p>
            Contact us:
            <a href="mailto:contact@c2hire.com">{C2HIRE_EMAIL}</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default TermsAndConditions;
