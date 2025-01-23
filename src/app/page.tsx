"use client";

import AboutMeBlock from "@/components/widgets/AboutMeBlock/ui";
import FirstBlock from "@/components/widgets/FirstBlock/ui";
import Footer from "@/components/widgets/Footer/ui";
import RecomedationsBlock from "@/components/widgets/RecomedationsBlock/ui";
import SliderSecondBlock from "@/components/widgets/SliderSecondBlock/ui";
import ThirdBlock from "@/components/widgets/ThirdBlock/ui";

export default function Home() {
  return (
    <>
      <FirstBlock />
      <SliderSecondBlock />
      <ThirdBlock />
      <RecomedationsBlock />
      <AboutMeBlock />
      <Footer />
    </>
  );
}
