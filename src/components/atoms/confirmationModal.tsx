import React, { useState } from "react";
import Spinner from "./Spinner";



interface ConfirmationModalProps {
  message: string;
  onConfirm: () => Promise<void>;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    await onConfirm();
    setLoading(false);
  };

  return (
    <div className="confirmation-modal">
      <p>{message}</p>
      <div className="mt-4 flex justify-center">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <button
              className="confirm-btn mr-4"
              onClick={handleConfirm}
            >
              Confirm
            </button>
            <button
              className="cancel-btn"
              onClick={onCancel}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ConfirmationModal;

