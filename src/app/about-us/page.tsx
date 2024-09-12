import Image from "next/image";
import React from "react";
import meeting_img from "@/app/assets/about-us/millennial-group-young-businesspeople-asia-businessman-businesswoman-celebrate-giving-five-after-dealing-feeling-happy-signing-contract-agreement-meeting-room-small-mod.jpg";
import AboutMainBanner from "./components/about-main-banner-section/about-main-banner-section";
import ProjectSection from "./components/project-section/project-section";
import PerformanceSection from "../homepage/components/performance-section/performance-section";
import PartnerCarousel from "../homepage/components/partner-carousel/PartnerCarousel";
import OurServiceSection from "../homepage/components/our-service-section/our-service-section";
import TechnologyExpertiseSection from "../homepage/components/technology-expertise-section/technology-expertise-section";

export default function AboutUsPage() {
  const renderDescription = () => {
    return (
      <div className="py-10 md:text-lg text-base space-y-4 px-2">
        <p>
          BeamD group was started in 2007 in Thailand by a group of experienced
          consultants (more than 20 years) from global technology consulting
          firm. SEA-Bangkok based leading technology consulting firm with
          solution development team from Bangalore India. With exceptional team
          of highly experienced professionals and expertise across multiple
          industries,
        </p>
        <p>
          BeamD provides technology implementation services especially for SAP
          S/4 Hana, SAP Business One, Mobile App Development, and XnappSales
          with Mobility Technology with expertise in system integration.
        </p>
        <p>
          The experience accumulated over 20 years, we have strengthened and
          gained the trust of the customers. We have built a team with
          integrity. Have the knowledge and ability extended to the SAP project
          implementation and integrated in Project Management, Change
          Management, Consultancy, Master Data Management, and Post Go-Live
          Support.
        </p>
        <p>
          Geographic coverage includes South East Asia (including Thailand,
          Singapore, Myanmar, Malaysia). Experience across multiple industries;
          such as Manufacturing, Petrochemical , Oil & Gas, Consumer Products,
          Retail , and Telecommunication offers a range of services to help
          clients to do business more efficiently and effectively by utilizing
          Information Technology and enabling them to focus more on their core
          businesses.
        </p>
        <p>
          We are dedicated to assist clients in optimizing their business
          operations through the strategic utilization of Information
          Technology. By understanding the unique needs and challenges of each
          client, we can tailor our services to deliver custom-made solutions
          that address specific requirements.
        </p>
      </div>
    );
  };

  const renderAboutUs = () => {
    return (
      <div className="xl:container mx-auto ">
        <AboutMainBanner />

        {renderDescription()}
        <div className="px-2">
          <ProjectSection />
        </div>
        <div className="py-6 space-y-4">
          <PerformanceSection />
          <PartnerCarousel />
        </div>

        <TechnologyExpertiseSection />
        <OurServiceSection />
      </div>
    );
  };

  return <div className="flex-1 animate-fade">{renderAboutUs()}</div>;
}
