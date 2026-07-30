import type { IconType } from "react-icons";

export interface ContactInfo {
  id: number;
  title: string;
  value: string;
  href: string;
  icon: IconType;
}