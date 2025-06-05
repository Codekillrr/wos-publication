"use client";
import React, { Children } from "react";

const ContactModal = ({ button, children }) => {
  return (
    <div>
      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="btn btn-outline lg:btn-lg btn-info"
      >
        {button}
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-gradient-to-b from-yellow-50 to-white">
          {children}
        </div>
      </dialog>
    </div>
  );
};

export default ContactModal;
