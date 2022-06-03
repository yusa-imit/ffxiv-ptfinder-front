import { useState } from "react";

interface ModalData {
  title: string;
  desc: string;
  closeButtonText: string;
}

interface ModalWithButtonProps {
  title: string;
  button?: JSX.Element;
  modalData: ModalData;
}
export default function ModalWithButton({
  button,
  modalData,
}: ModalWithButtonProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {button !== undefined ? (
        button
      ) : (
        <label
          className="modal-button btn"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        ></label>
      )}
      <div
        className={`modal ${open && "modal-open"}`}
        id="modal_comp modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">{modalData.title}</h3>
          <p className="py-4">{modalData.desc}</p>
          <div className="modal-action">
            <label className="btn">{modalData.closeButtonText}</label>
          </div>
        </div>
      </div>
    </>
  );
}
