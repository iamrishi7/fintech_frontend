"use client";
import React from "react";
import { BsMortarboardFill } from "react-icons/bs";
import {
    FaCar,
    FaCreditCard,
  FaFire,
  FaInternetExplorer,
  FaLightbulb,
  FaMobile,
  FaSatelliteDish,
  FaShieldAlt,
  FaWater,
} from "react-icons/fa";
import { FaHouseChimney, FaUserDoctor } from "react-icons/fa6";
import { GiGasStove, GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { IoStar, IoWater } from "react-icons/io5";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { TiGroup } from "react-icons/ti";

interface CardIconProps {
  name: string;
  size?: string | number;
  color?: string;
}

const CardIcon = ({ name, size = 28, color = "#333" }: CardIconProps) => {
  return (
    <>
      {name?.toLowerCase()?.includes("electric") ? (
        <FaLightbulb size={size} color={color} />
      ) : name?.toLowerCase()?.includes("broadband") ? (
        <FaInternetExplorer size={size} color={color} />
      ) : name?.toLowerCase()?.includes("gas") ? (
        <FaFire size={size} color={color} />
      ) : name?.toLowerCase()?.includes("water") ? (
        <IoWater size={size} color={color} />
      ) : name?.toLowerCase()?.includes("cable tv") ? (
        <PiTelevisionSimpleFill size={size} color={color} />
      ) : name?.toLowerCase()?.includes("dth") ? (
        <FaSatelliteDish size={size} color={color} />
      ) : name?.toLowerCase()?.includes("mobile") ? (
        <FaMobile size={size} color={color} />
      ) : name?.toLowerCase()?.includes("tax") ? (
        <GiPayMoney size={size} color={color} />
      ) : name?.toLowerCase()?.includes("card") ? (
        <FaCreditCard size={size} color={color} />
      ) : name?.toLowerCase()?.includes("landline") ? (
        <TbDeviceLandlinePhone size={size} color={color} />
      ) : name?.toLowerCase()?.includes("hous") ? (
        <FaHouseChimney size={size} color={color} />
      ) : name?.toLowerCase()?.includes("education") ? (
        <BsMortarboardFill size={size} color={color} />
      ) : name?.toLowerCase()?.includes("hospital") ? (
        <FaUserDoctor size={size} color={color} />
      ) : name?.toLowerCase()?.includes("insurance") ? (
        <FaShieldAlt size={size} color={color} />
      ) : name?.toLowerCase()?.includes("loan") ? (
        <GiTakeMyMoney size={size} color={color} />
      ) : name?.toLowerCase()?.includes("fastag") || name?.toLowerCase()?.includes("car") ? (
        <FaCar size={size} color={color} />
      ) : name?.toLowerCase()?.includes("club") || name?.toLowerCase()?.includes("association") ? (
        <TiGroup size={size} color={color} />
      ) : name?.toLowerCase()?.includes("lpg") || name?.toLowerCase()?.includes("gas") ? (
        <GiGasStove size={size} color={color} />
      ) : (
        <IoStar size={size} color={color} />
      )}
    </>
  );
};

export default CardIcon;
