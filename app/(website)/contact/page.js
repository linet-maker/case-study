import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/components/Contact"), { ssr: false });
export default function Contact() {

  return (
    <>
      <NoSSR />
    </>
  );
}