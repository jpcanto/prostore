import { Btn } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function HomePage() {
  return <Btn label="Click me" color="primary" size="medium" />;
}
