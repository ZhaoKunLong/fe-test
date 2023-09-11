import React from "react";
import { createPortal } from "react-dom";

import type { ModalProps } from "./type";
import { Button } from "../button";
import { useListennerEvent } from "../utils/useListennerEvent";

export const Modal: React.FC<ModalProps> = ({
  visible = false,
  title,
  children,
  footer,
  okText = "确认",
  closeText = "取消",
  width = 520,
  maskClosable = true,
  onClose,
  onOk,
}) => {
  const maskRef = React.useRef<any>();
  const wrapperRef = React.useRef<any>();
  const [close, updateClose] = React.useState<any>();

  // 监听按下esc键关闭
  useListennerEvent(maskRef, "keydown", (e) => {
    if (e.code === "Escape" && maskClosable) {
      onClose?.();
    }
  });

  // 监听点击蒙层
  useListennerEvent(wrapperRef, "click", (e) => {
    if (!close) {
      updateClose(!close);
    } else {
      onClose?.();
    }
  });

  const localFooter = footer ?? (
    <>
      <Button
        style={{ marginRight: 12, padding: "4px 24px" }}
        onClick={onClose}
      >
        {closeText ?? "取消"}
      </Button>
      <Button btnType="primary" style={{ padding: "4px 24px" }} onClick={onOk}>
        {okText ?? "确认"}
      </Button>
    </>
  );

  return visible ? (
    createPortal(
      <div className={"modal-wrapper"} ref={maskRef}>
        <div ref={wrapperRef} style={{ width }} className={"modal-container"}>
          <div className={"modal-close-icon"} onClick={onClose}>
            x
          </div>
          <div className={"modal-header"}>
            {title && <span className={"modal-title"}>{title}</span>}
          </div>
          <div className="modal-content">{children}</div>
          <div className="modal-footer">{localFooter}</div>
        </div>
      </div>,
      document.body
    )
  ) : (
    <></>
  );
};
