"use client";
import { Editable, EditableInput, EditablePreview, InputProps } from "@chakra-ui/react";
import React, { FC } from "react";

interface CustomEditableInputProps {
  defaultValue?: string;
  onSubmit?: (value: any) => void;
  onChange?: (value: string) => void;
  width?: InputProps['width'];
  placeholder?:  string;
}

const CustomEditableInput: FC<CustomEditableInputProps> = ({
  defaultValue,
  onSubmit,
  onChange,
  placeholder,
  width
}) => {
  return (
    <>
      <Editable defaultValue={defaultValue} w={width || 'auto'} onSubmit={onSubmit} placeholder={placeholder} >
        <EditablePreview w={'full'} />
        <EditableInput placeholder={placeholder} />
      </Editable>
    </>
  );
};

export default CustomEditableInput;
