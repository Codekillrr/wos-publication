import React from "react";

import NavBar from "@/components/NavBar";
import PopSide from "@/components/ui/PopSide";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div>
      <header className="z-10 relative">
        <NavBar />
      </header>
      <main className="">
        <PopSide />
        <div className="py-40 lg:mx-50 sm:mx-20 m-6">
          <h1 className="text-5xl font-bold text-yellow-300 py-4">
            {" "}
            Terms & Conditions
          </h1>
          <div className="p-4">
            <h4 className="text-2xl">General</h4>
            <div className="p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  Any references to "we," "us," "our," "I" refer to WOS
                  Publication. The Services are wholly offered and provided by
                  WOS Publication.
                </li>
                <li>
                  When you access, browse, or use this Site, you accept, without
                  limitation or qualification, the below mentioned terms and
                  conditions and notices stated herein, as updated from time to
                  time (“Terms and Conditions” or “T&Cs”). As long as you comply
                  with the Terms and Conditions, we grant you a non-exclusive,
                  non-transferable, limited right to enter, view, and use this
                  Site. If you do not want to be bound by the T&Cs, you agree to
                  immediately discontinue your use of this Site.
                </li>
                <li>
                  In addition to these Terms of Use, your use of our website is
                  also governed by the following policies:
                  <ul className="list-decimal px-6">
                    <li>
                      Our privacy policy, which is available here. The Privacy
                      policy governs our use of your personal information. It
                      sets out the types of personal information we collect, the
                      reasons we collect it for, how we use it, where we may
                      pass it on to any third parties, in what circumstances,
                      and for what reasons, and any other relevant information
                      relating to our use and/or processing of your personal
                      information and your rights in relation to your personal
                      information.
                    </li>
                    <li>
                      Our cookies policy governs our use of cookies and similar
                      technologies on our website. It sets out the types of
                      cookies we use, the purposes for which we use them, the
                      circumstances in which we may place cookies on your
                      computer, device, or browser, and other relevant
                      information relating to cookies, such as how to change
                      your preferences to accept or reject cookies.
                    </li>
                  </ul>
                </li>
                <li>
                  By accessing and using our website, you agree to be bound by
                  the terms and conditions contained in these Terms of Use, you
                  consent to our processing of your personal information in
                  accordance with our privacy policy, and your consent to our
                  use of cookies in accordance with our cookies policy.
                </li>
                <li>
                  If you do not consent to the practices set out in these Terms
                  of Use, our privacy policy and/or our cookies policy, you must
                  not use our webiste.
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-2xl">
              Purpose of This Site and the Content Therein
            </h4>
            <div className="  p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  All the information presented on this Site (“Content”) is for
                  informational purposes only and does not create a business or
                  professional services relationship between us. A service
                  relationship may be established when you place a request for
                  the Services through the Site and the same is accepted in
                  writing by WOS Publication.
                </li>
                <li>
                  We reserve the right to undertake all necessary steps to
                  ensure that the security, safety, and integrity of our systems
                  as well as its users' interests are and remain,
                  well–protected. Towards this end, we may take various steps to
                  verify and confirm the authenticity, enforceability, and
                  validity of service orders placed by you.
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-2xl">Fees and Invoicing</h4>
            <div className="  p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  We will issue you a valid tax invoice in respect of each
                  service. We will notify you as soon as the deliverable is
                  ready for download. You will be required to pay all fees
                  before downloading of the deliverable. Except as specified
                  herein or in the Order Form (i) fees are based on the Services
                  requested / purchased and not actual usage, (ii) payment
                  obligations are non-cancellable and fees are non-refundable.
                </li>
                <li>
                  Payment shall be made: (a) in full without set-off,
                  counterclaim or withholding of any kind (save where and to the
                  extent that this cannot by law be excluded); and (b) in the
                  currency mentioned in the order confirmation.
                </li>
                <li>
                  You are responsible for providing complete and accurate
                  billing and contact information to us and notifying us of any
                  changes to such information.
                </li>
                <li>
                  We will re-issue any invoice if any error is later discovered.
                  If you have overpaid as a result of a billing error, your
                  account will be credited with the overpayment or, if you have
                  stopped acquiring the Service from us, we will refund the
                  overpayment promptly after your request and after deduction of
                  any other amounts due by you to us.
                </li>
                <li>
                  Billing Dispute - You may dispute an amount invoiced by us but
                  only if you do so in accordance with these clauses:
                  <ul className="list-decimal px-6">
                    <li>
                      Except to the extent you raise a valid billing dispute in
                      respect of our invoice, you agree that the invoice is
                      valid and payable (and you must pay any undisputed amount
                      included in the invoice in accordance with this clause
                      "Fees and Invoicing”)
                    </li>
                    <li>
                      To raise a valid billing dispute, you must (i) make a good
                      faith request to us to investigate the specific charges or
                      invoice, providing at the same time specific evidence
                      which demonstrates that a particular charge or invoice is
                      incorrect; and (ii) make any such request to us within 1
                      month of the date of the relevant invoice.
                    </li>
                    <li>
                      On receiving good faith dispute request from you, we will
                      conduct investigations which are reasonably necessary and
                      appropriate in the circumstances of the dispute. At the
                      end of these investigations, you will pay any outstanding
                      amount within five Business Days.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-2xl">Refunds/Cancellation Policy</h4>
            <div className="  p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  Please be notified that we do not entertain refund requests if
                  you change your mind. Once an order is delivered you are no
                  longer eligible to ask for a 100% refund. Once an order has
                  been started, the hours put into the project cannot be
                  recuperated and thus we will not provide a refund. The
                  Products and Services offered are non-refundable and come with
                  no warranties, expressed or implied. However, you may ask for
                  up to three revisions free of charge. In case you are not 100%
                  satisfied with the quality of the product/ services, you may
                  ask for a 50% refund against the paid fee amount. We will
                  process the refund of the 50% fee amount subject to
                  verification of the quality concerns you would claim. In case
                  you have a special complaint scenario and demand a full fee
                  amount refund then your case shall be forwarded to the
                  evaluation committee and they will take an impartial decision
                  based upon facts and shreds of evidence.
                </li>
                <li>
                  We will process the refund of the 50% fee amount subject to
                  verification of the quality concerns you would claim. In case
                  you have a special complaint scenario and demand a full fee
                  amount refund then your case shall be forwarded to the
                  evaluation committee and they will take an impartial decision
                  based upon facts and shreds of evidence.
                </li>
                <li>
                  Please be notified that you are NOT eligible for a 100% refund
                  once an order is completed and delivered. You may request
                  three revisions in total if the provided product or service
                  does not meet your expectations/ project requirements. You may
                  file a partial refund request if ONLY we have your feedback in
                  written communication followed by disapproved revisions from
                  your end. If you fail to produce any such communication trail,
                  we won't entertain any refund claims.
                </li>
                <li>
                  In case a customer submits a charge-back without approaching
                  WOS Publication for a refund or to discuss the case with the
                  Account Manager, the customer will become ineligible for a
                  refund after that, and WOS Publication reserves the right to
                  not entertain the refund request.
                </li>
                <li>
                  is not responsible for a refund, if the client’s preferred
                  journal choice rejects his/ her submission. In instances where
                  the journal rejects the paper, for any reason whatsoever, be
                  it, plagiarism, formatting, journal will not be accountable
                  for a full refund.
                </li>
                <li>
                  No cancellation requests will be accepted for confirmed
                  orders.
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-2xl">Intellectual Property</h4>
            <div className="  p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  The Content presented on this Site (including but not limited
                  to text, design, software, graphics, audio, video, HTML code,
                  and data) is protected by copyright law, trademark law, and
                  other applicable intellectual property laws and is the
                  exclusive property of us. You agree to follow all instructions
                  on this Site limiting the way you may use the Content.
                </li>
                <li>
                  We reserve all rights to this Site and its Content. This
                  Content may not be copied, reproduced, republished, uploaded,
                  posted, transmitted, or distributed in any way whatsoever,
                  without our prior written consent. You may use the Content for
                  your limited personal and non-commercial purposes in
                  accordance with applicable law governing intellectual property
                  rights. You may download and print one copy of any Content
                  expressly specified as available for download solely for your
                  personal, non-commercial use. Provided however, that you
                  hereby agree not to modify the Content so downloaded, in any
                  way whatsoever and that you shall not alter any copyright,
                  trademark, and other proprietary notices or symbols
                  attached/affixed to such Content. Any other use or
                  modification of the Content without our prior written
                  authorization is expressly prohibited.
                </li>

                <li>
                  Trademarks, logos, and service marks displayed on this Site
                  are our sole and exclusive property. Nothing contained in this
                  Site shall be construed as conferring any license or right to
                  any copyright, trademark, logo, service mark, or other
                  proprietary interest of us or any third party.
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-2xl">Use of The Site</h4>
            <div className="  p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  You hereby agree not to use contact information provided on
                  the Site for any unauthorized purposes, including but not
                  limited to marketing. You shall not use any hardware or
                  software intended to damage or interfere with the proper
                  working of the Site or to surreptitiously intercept any
                  system, data, personal information, or Content on the Site.
                  You agree not to interrupt or attempt to interrupt the
                  operation of the Site in any manner whatsoever. We hereby
                  reserve the right, in its sole discretion, to limit or
                  terminate your access to or use of the Site at any time
                  without notice to you.
                </li>
                <li>
                  You agree and undertake to use the Site appropriately. By way
                  of example, and not as a limitation, you agree and undertake
                  that when using the Site, you will not:
                  <ul className="list-decimal lg:pl-6 pl-3">
                    <li>
                      host, display, modify, transmit, update, publish, post,
                      upload, distribute, disseminate, or share (collectively
                      “Post”) any information that is knowingly false and/or
                      defamatory, grossly harmful, harassing, blasphemous,
                      inaccurate, abusive, obscene, pornographic, pedophilic,
                      libelous, indecent, vulgar, sexually-oriented, hateful or
                      racially, ethnically objectionable, threatening, profane,
                      lewd, seditious, invasive of a person's privacy,
                      disparaging, relating or encouraging money laundering or
                      gambling, illegal, harmful, derogatory, or unlawful or
                      violates any law in force or adversely affects our
                      reputation or goodwill, or otherwise unlawful in any
                      manner;
                    </li>
                    <li>Post information that harms minors;</li>
                    <li>
                      Stalk, or otherwise violate the legal rights of other
                      users;
                    </li>
                    <li>
                      Post information that infringes any patent, trademark,
                      copyright, or other proprietary/intellectual property
                      rights of another person or Post information that belongs
                      to another person and to which you do not have any rights
                      to;
                    </li>
                    <li>
                      Post files that contain viruses, Trojan horses, worms,
                      keystroke loggers, spyware, adware or corrupted files, or
                      any other computer code, files or programs designed to
                      interrupt, destroy, harm, or limit the functionality of
                      the Site or another user's computer, computer
                      system/network/database or user’s data or software;
                    </li>
                    <li>
                      Conduct or forward surveys, contests, pyramid schemes, or
                      chain letters on the Site;
                    </li>
                    <li>
                      Post information that threatens the unity, integrity,
                      defense, security, sovereignty, friendly relations with
                      foreign states, or public order or causes incitement to
                      the commission of any cognizable offence or prevents
                      investigation of any offense or is insulting any other
                      nation;
                    </li>
                    <li>
                      Download any file Posted by another user that you know, or
                      reasonably should know, cannot be legally distributed in
                      such a manner;
                    </li>
                    <li>
                      Post any information that deceives or misleads the
                      addressee about the origin of such messages or
                      impersonates another person or communicates any
                      information that is grossly offensive or menacing in
                      nature;
                    </li>
                    <li>
                      Violate any applicable laws or regulations for the time
                      being in force;
                    </li>
                    <li>
                      Make the Site available over a network where it could be
                      used by multiple devices or multiple users at the same
                      time.
                    </li>
                  </ul>
                </li>
                <li>
                  You shall be solely responsible for complying with the laws of
                  the country from which you are accessing this Site and you
                  agree that you will not access or use the information on this
                  Site in violation of such laws. In addition, you may not use
                  this Site:
                  <ul className="list-decimal lg:pl-6 pl-3">
                    <li>
                      In a way that breaches any applicable local, national, or
                      international law or regulation;
                    </li>
                    <li>
                      In a way that is unlawful or fraudulent, or has any
                      unlawful or fraudulent purpose or effect;
                    </li>
                    <li>
                      Reject a user from registering on the Site without
                      assigning any reason thereof;
                    </li>
                    <li>
                      To transmit, or procure the sending of, any unsolicited or
                      unauthorized advertising or promotional material or any
                      other similar form of solicitation (spam) or any material
                      that you are not authorized to use, disclose, distribute,
                      or share;
                    </li>
                    <li>
                      To transmit, or procure the sending of, any unsolicited or
                      unauthorized advertising or promotional material or any
                      other similar form of solicitation (spam) or any material
                      that you are not authorized to use, disclose, distribute,
                      or share.
                    </li>
                  </ul>
                </li>
                <li>
                  You guarantee, warrant, and certify that you are the owner of
                  the content that you Post on the Site (“User Content”) or are
                  otherwise authorized to use the User Content and that the User
                  Content does not infringe upon the property rights,
                  intellectual property rights, or any other rights of any other
                  person. You further warrant that to your knowledge, no action,
                  suit, proceeding, or investigation has been instituted or
                  threatened relating to any User Content, including trademark,
                  trade name service mark, and copyright formerly or currently
                  used by you in connection with the User Content.
                </li>
                <li>
                  You hereby agree that access to certain areas of this Site may
                  be available only to registered users. To become a registered
                  user, you may be required to answer certain questions and
                  provide some personal information. Answers to such questions
                  may be mandatory and/or optional. You hereby represent and
                  warrant that all information supplied to the Site is true,
                  complete, and accurate.
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-2xl">Regulatory Powers</h4>
            <div className="  p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  You hereby acknowledge and agree that we reserve the right to:
                  <ul className="list-decimal lg:pl-6 pl-3">
                    <li>
                      limit, deny, or restrict the use or access to the Site in
                      entirety or certain portions of the Site to specific
                      users, including yourself, at its sole discretion;
                    </li>
                    <li>
                      reject a user from registering on the Site without
                      assigning any reason thereof;
                    </li>
                    <li>
                      suspend/cancel/deactivate any user’s account/registration
                      for any reason that we shall deem fit, or
                    </li>
                    <li>
                      Use your name, logo or any other trademark for marketing
                      and promotional activities if you’ve availed any
                      service(s) from our website. Such usage shall be in a
                      manner that does not derogate your rights in your
                      trademarks, names and logos by us.
                    </li>
                    <li>
                      Use your data to analyze, develop and build services,
                      tools and systems for customers benefits.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4">
            <h4 className="text-2xl">Confidentiality</h4>
            <div className="  p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  We shall maintain complete confidentiality of user data,
                  including manuscript uploaded on this platform. All vendors
                  are contractually obliged to maintain strict confidentiality
                  of user data and have agreed not to disclose such confidential
                  information to unauthorized. Access to the user data is
                  limited to the person who is in charge or required to work on
                  the document. We also assure compliance with applicable laws
                  concerning the protection of personal information and promise
                  to handle Customer's personal information with great care.
                </li>
                <li>
                  The information collected from the users by us shall be held
                  and maintained in accordance with our "Privacy Policy".
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4">
            <h4 className="text-2xl">BREACH OF T&Cs</h4>
            <div className="  p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  We shall maintain complete confidentiality of user data,
                  including manuscript uploaded on this platform. All vendors
                  are contractually obliged to maintain strict confidentiality
                  of user data and have agreed not to disclose such confidential
                  information to unauthorized. Access to the user data is
                  limited to the person who is in charge or required to work on
                  the document. We also assure compliance with applicable laws
                  concerning the protection of personal information and promise
                  to handle Customer's personal information with great care.
                  <ul className="list-decimal lg:pl-6 pl-3">
                    <li>
                      Immediate, temporary, or permanent withdrawal of your
                      right to use the Site;
                    </li>
                    <li>Issuance of a warning to you;</li>
                    <li>
                      Initiation of legal proceedings against you for
                      reimbursement of all resulting costs and expenses suffered
                      by us on an indemnity basis (including but not limited to
                      reasonable administrative and legal costs);
                    </li>
                    <li>
                      Disclosure of such information to law enforcement
                      authorities as is reasonably necessary.
                    </li>
                  </ul>
                </li>
                <li>
                  We hereby expressly disclaim all liability for any and all
                  actions taken by us in response to a breach of the T&Cs
                  committed by you.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4">
            <h4 className="text-2xl">Indemnity</h4>
            <div className="  p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  You hereby agree to indemnify, defend, and hold harmless us
                  and our affiliates and their directors, employees,
                  contractors, agents, licensors, service providers,
                  subcontractors, and suppliers from and against any and all
                  losses, liabilities, expenses, damages, and costs, including
                  reasonable legal fees and court costs, arising or resulting
                  from your use of the Site and any violation of these Terms and
                  Conditions. If you cause a technical disruption of the Site or
                  the systems transmitting the Site to you or others, you agree
                  to be responsible for any and all losses, liabilities,
                  expenses, damages, and costs, including reasonable legal fees
                  and court costs, arising or resulting from that disruption.
                </li>
                <li>
                  Unless otherwise explicitly agreed in writing, we neither
                  warrant nor make any representations regarding the quality,
                  accuracy, or completeness of any Content on the Site. In no
                  event shall we or any of our employees, directors,
                  shareholders, or representatives be liable for any direct,
                  indirect, punitive, incidental, special, consequential
                  damages, or for any lost profits or revenues, business
                  interruption, loss of data, or any other damages resulting
                  from: (a) the use or the inability to use the Site or reliance
                  on any Content contained in this Site; (b) unauthorized access
                  to or alteration of the user's transmissions or data; (c)
                  damages for loss of use, data or profits, arising out of or in
                  any way connected with the use or performance of the Site; (d)
                  any delay or inability to use the Site or related services
                  provided on the Site; (e) non-availability of the Site during
                  periodic maintenance operations or any unplanned suspension of
                  access to the Site that may occur due to technical reasons or
                  for any reason beyond our control; (f) any interruption or
                  delay in provisions of any services or access to this Site,
                  due to any force majeure event beyond our reasonable control,
                  including but not limited to acts of God, flood, fire,
                  blockades, riots, embargoes, government actions, regulatory
                  sanctions, power outages, unavailability or non-functioning of
                  payment gateway services, disruption of communication services
                  in any country or area, etc. (g) any other matter relating to
                  the Site or the services available on the Site, or otherwise
                  arising out of the use of the Site, whether based on contract,
                  tort, negligence, strict liability, or otherwise.
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-2xl">Changes to the Site and These Terms</h4>
            <div className="  p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  We may alter or modify the features of the Site with respect
                  to different user(s), or change any of the features or
                  introduce new features on the Site without prior notice to any
                  user.
                </li>
                <li>
                  We reserve the right, at our sole discretion, to change,
                  modify, add, or remove any portion of these T&Cs, in whole or
                  in part, at any time, temporarily or permanently, without
                  notice and without liability, by posting revised terms on the
                  Site. You hereby agree that it is your responsibility to check
                  periodically for any changes made to these T&Cs. Your
                  continued use of the Site after any changes to these T&Cs
                  signifies your acceptance of the updated T&Cs.
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-2xl">Age Restrictions</h4>
            <div className="  p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  Our website is not intended for use by individuals under the
                  age of 18 for any products or services available on or via the
                  websites.
                </li>
                <li>
                  We do not knowingly or intentionally process the personal
                  information of any individual under the age of 18.
                </li>
                <li>
                  You must not use our website, purchase or attempt to purchase
                  any of our products or services, or submit any personal
                  information to us, if you are under the age of 18.
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-2xl">
              Disclaimers and Limitation of Liability
            </h4>
            <div className="  p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  While we will use reasonable efforts to provide reliable
                  Content through this Site, we do not warrant that this Site is
                  free of inaccuracies, errors, and/or omissions. This Site may
                  contain certain historical information, which is provided for
                  your reference only. We reserve the right to modify the
                  Content presented on this Site at any time, without notice to
                  you.
                </li>
                <li>
                  The Site may contain links to other websites ("Embedded
                  Sites"). The Embedded Sites are not under our control and we
                  are not responsible for the contents of any Embedded Site,
                  including without limitation any link contained in an Embedded
                  Site, or any changes or updates to an Embedded Site. We are
                  not responsible for any form of transmission, whatsoever,
                  received by you from any Embedded Site. We are providing these
                  links or allowing users to provide you these links only as a
                  convenience, and the inclusion of any link does not imply
                  endorsement by us of the Embedded Sites or of any information
                  contained in the Embedded Site or any association with the
                  operators or owners of the Embedded Site
                </li>
                <li>
                  You hereby expressly acknowledge that internet transmissions
                  are never completely private or secure. You understand that
                  any message or information sent by you to us or Posted on the
                  Site may be read or intercepted by others unless there is a
                  special notice that a particular message (for example, credit
                  card information) is encrypted (sent in code). It is expressly
                  clarified that we do not bear any additional responsibility
                  towards you on account of your sending a message to us.
                </li>
                <li>
                  For the avoidance of doubt, it is clarified that except as
                  otherwise expressly provided in these T&Cs, we make no
                  representations, guarantees, or warranties, written or oral,
                  express or implied, to the user or to any other person or
                  entity regarding the services, the Content on the Site, any
                  hardware, or software. To the user or to any other person or
                  entity regarding the services, the Content on the Site, any
                  hardware, or software.
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4">
            <h4 className="text-2xl">Grievance Redressal</h4>
            <div className="  p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  Should you have any grievance or complaints in relation to
                  your use of the Site, please contact us, at{" "}
                  <a
                    href="mailto:help@wospublications.co.uk"
                    className="link link-hover text-blue-600"
                  >
                    help@wospublications.co.uk
                  </a>
                  {", "} who shall respond to your grievance within 14 days.
                </li>
              </ul>
            </div>
          </div>

          {/* outer */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
