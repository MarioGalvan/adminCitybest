import React, { useEffect, useState } from "react";
import { Modal} from "antd";
import { useFormBySection } from "../../Hooks/useFormBySection";

export const ModalCrud = ({ showModal, setshowModal, sectionName }) => {
  const [title, settitle] = useState("");

  useEffect(() => {
    if (showModal.type === "create") {
      settitle("Agregar " + sectionName.slice(0, -2));
    } else if (showModal.type === "edit") {
      settitle("Editar " + sectionName.slice(0, -2));
    }
  }, [showModal, sectionName]);

  return (
    <>
      <Modal
        title={title}
        visible={showModal.visible}
        footer={null}
        onCancel={() => setshowModal(!showModal.visible)}
      >
        {useFormBySection(sectionName,setshowModal)}
      </Modal>
    </>
  );
};
