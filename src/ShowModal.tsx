import React from "react";

import { Modal, Button } from "./../common";

export const Test = () => {
  const [open, updateOpen] = React.useState(false);

  const closeModal = () => {
    updateOpen(false);
  };

  const openModal = () => {
    updateOpen(true);
  };

  return (
    <div>
      <Button onClick={openModal}>open Modal</Button>
      <Modal visible={open} onClose={closeModal} onOk={closeModal} />
    </div>
  );
};
