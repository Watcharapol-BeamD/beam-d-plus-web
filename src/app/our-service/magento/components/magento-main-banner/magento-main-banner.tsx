import React from "react";
import banner_img from "@/app/assets/our-service/magento/portrait-beautiful-young-asian-business-woman-with-headphone-call-center-mirror.webp";

export default function MargentoMainBanner() {
  return (
    <div
      className="w-full md:h-160 h-96 bg-cover bg-top "
      style={{ backgroundImage: `url(${banner_img.src})` }}
    >
      <div className="relative h-full w-full flex justify-center items-center ">
        <div className="absolute h-auto md:w-160 w-auto md:bottom-36 md:left-10 md:mx-0 mx-2 px-4 py-6 text-white rounded-3xl space-y-4">
          <p className="md:text-4xl sm:text-3xl text-2xl font-bold">
            ADOBE COMMERCE (MAGENTO)
          </p>
          <p className="md:text-lg sm:text-base text-sm   drop-shadow-2xl ">
            สิ่งที่สำคัญที่สุดคือวิธีที่คุณเติบโตจากประสบการณ์ เติบโตไปพร้อมกับ
            Adobe Commerce แพลตฟอร์มการค้าที่ยืดหยุ่นและปรับการรองรับได้
            ซึ่งช่วยให้คุณสร้างประสบการณ์เฉพาะตัวได้อย่างโดดเด่นสำหรับ B2B และ
            B2C ไม่ว่าคุณจะมีกี่แบรนด์ก็ตาม
          </p>
        </div>
      </div>
    </div>
  );
}
