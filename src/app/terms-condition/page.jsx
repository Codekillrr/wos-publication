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
            <p className="text-lg p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  Any references to "we," "us," "our," "I" refer to Clarivate
                  Publication. The Services are wholly offered and provided by
                  Clarivate Publication.
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
            </p>
          </div>
          <div className="p-4">
            <h4 className="text-2xl">
              Purpose of This Site and the Content Therein
            </h4>
            <p className="text-lg p-4">
              <ul className="list-disc lg:pl-5 pl-1 space-y-2">
                <li>
                  All the information presented on this Site (“Content”) is for
                  informational purposes only and does not create a business or
                  professional services relationship between us. A service
                  relationship may be established when you place a request for
                  the Services through the Site and the same is accepted in
                  writing by Clarivate Publication.
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
            </p>
          </div>
          <div className="p-4">
            <h4 className="text-2xl">Fees and Invoicing</h4>
            <p className="text-lg p-4">
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
            </p>
          </div>
          <div className="p-4">
            <h4 className="text-2xl">Refunds/Cancellation Policy</h4>
            <p className="text-lg p-4">
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
                  Clarivate Publication for a refund or to discuss the case with
                  the Account Manager, the customer will become ineligible for a
                  refund after that, and Clarivate Publication reserves the
                  right to not entertain the refund request.
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
            </p>
          </div>
          <div className="p-4">
            <h4 className="text-2xl">Intellectual Property</h4>
            <p className="text-lg p-4">
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
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
