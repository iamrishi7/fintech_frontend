"use client";
import React from "react";
import { Button, Flex } from "@chakra-ui/react";

const PagButton = (props: any) => {
  const { onClick } = props;
  const activeStyle = {
    bg: "brand.primary",
    _dark: {
      bg: "brand.primary",
    },
    color: "white",
  };
  return (
    <Button
      size={"sm"}
      rounded="md"
      bg="white"
      color="gray.700"
      opacity={props.disabled && 0.6}
      _hover={!props.disabled && activeStyle}
      cursor={props.disabled && "not-allowed"}
      {...(props.active && activeStyle)}
      onClick={() => {
        if (!props.disabled) {
          onClick(props?.url);
        }
      }}
    >
      {props.children}
    </Button>
  );
};

const Pagination = () => {
  return (
    <>
      <Flex w="full" alignItems="center" justifyContent="flex-end" gap={1}>
        <PagButton disabled>Prev</PagButton>
        <PagButton active>1</PagButton>
        <PagButton>2</PagButton>
        <PagButton>3</PagButton>
        <PagButton>4</PagButton>
        <PagButton>5</PagButton>
        <PagButton>Next</PagButton>
      </Flex>
    </>
  );
};

export default Pagination;
