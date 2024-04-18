"use client";
import {
  Editable,
  EditableInput,
  EditablePreview,
  InputProps,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface CustomEditableInputProps {
  defaultValue?: string;
  onSubmit?: (value: any) => void;
  onChange?: (value: string) => void;
  width?: InputProps["width"];
  placeholder?: string;
  hasBorder?: boolean;
}

const CustomEditableInput: FC<CustomEditableInputProps> = ({
  defaultValue,
  onSubmit,
  onChange,
  placeholder,
  width,
  hasBorder = false,
}) => {
  return (
    <>
      <Editable
        defaultValue={defaultValue}
        w={width || "auto"}
        onSubmit={onSubmit}
        placeholder={placeholder}
        border={hasBorder ? "1px solid" : "none"}
      >
        <EditablePreview w={"full"} />
        <EditableInput placeholder={placeholder} />
      </Editable>
    </>
  );
};

export default CustomEditableInput;
