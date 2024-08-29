import React from "react";
import Image from "next/image";

import adobe_commerce1 from "@/app/assets/our-service/magento/image-157.png";
import adobe_commerce2 from "@/app/assets/our-service/magento/image-158.png";
import adobe_commerce3 from "@/app/assets/our-service/magento/image-159.png";
 

export default function ContentSection() {
  const renderContent = () => {
    return (
      <div className="space-y-6 ">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            <Image alt="" src={adobe_commerce1} className="" />
          </div>

          <div className="md:w-1/2 w-full">
            <p>นวัตกรรมล่าสุดจาก Adobe Commerce</p>
            <ul className="list-disc list-inside">
              <li>
                เพิ่มยอดขายด้วยกระบวนการตัดสินใจซื้อเฉพาะบุคคลของผู้ซื้อซึ่งขับเคลื่อนโดยข้อมูล
                Adobe Commerce และการจัดวางสินค้าด้วย AI
              </li>
              <li>
                ช่วยให้การพัฒนา Composable Commerce
                และการผสานรวมระบบง่ายขึ้นด้วยแพลตฟอร์มนักพัฒนาแบบครบวงจรและชุดเครื่องมือเริ่มต้นใช้งานการผสานรวมระบบ
              </li>
              <li>
                กระตุ้นการเติบโตของอีคอมเมิร์ซแบบ B2B
                ด้วยการเสนอราคาและการสนับสนุนที่ปรับปรุงให้ดียิ่งขึ้นสำหรับผู้ซื้อระดับองค์กรขนาดใหญ่ในทุกโมเดลธุรกิจ
              </li>
              <li>
                มอบประสบการณ์ที่ดีเยี่ยมแก่ผู้ป่วยพร้อมรับรองความเป็นส่วนตัวด้วยแพลตฟอร์มระบบคลาวด์ที่พร้อมสำหรับ
                HIPAA ในธุรกิจการดูแลสุขภาพและชีววิทยาศาสตร์
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xl font-bold">
          Composable Commerce สร้างมาเพื่อธุรกิจ
        </p>

        <div className="flex md:flex-row flex-col-reverse">
          <div className="md:w-1/2 w-full">
            <p>
              แพลตฟอร์มที่ล้ำสมัยในการสร้างสรรค์นวัตกรรมสำหรับทีมไอที Adobe
              Commerce
              มีโซลูชันที่ให้ทีมไอทีสามารถสร้างประสบการณ์การค้าที่เฉพาะตัวได้อย่างง่ายดาย
              รวดเร็ว ปลอดภัย และไม่ต้องเริ่มตั้งแต่ต้น
              โดยรวมถึงคุณสมบัติต่อไปนี้
            </p>
            <ul className="list-disc list-inside">
              <li>
                เข้าสู่ตลาดได้อย่างรวดเร็วด้วยรากฐานของฟังก์ชันการทำงานด้านการค้าที่ปลอดภัยและมีประสิทธิภาพสูง
              </li>
              <li>
                บริการแบบ Composable ที่ใช้งานได้ทันทีสามารถ deploy
                และนำไปใช้กับรากฐานด้านการค้าได้อย่างรวดเร็ว
              </li>
              <li>
                การสร้างและผสานการทำงานกับแอปที่ปลอดภัยและพร้อมปรับการรองรับ
                ซึ่งจะขยายขีดความสามารถในการทำงานในระบบและผสานการทำงานกับโซลูชันของ
                third-party ในสภาพแวดล้อมแบบไร้เซิร์ฟเวอร์ที่เป็นไปตาม PCI
              </li>
              <li>
                การปรับแต่งและผสานการทำงานกับเครื่องมือของ App Builder
                ที่ช่วยลดต้นทุนการเป็นเจ้าของ
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 w-full">
            <Image alt="" src={adobe_commerce2} className="" />
          </div>
        </div>

        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            <Image alt="" src={adobe_commerce3} className="" />
          </div>

          <div className="md:w-1/2 w-full">
            <p>
              เพิ่มขีดความสามารถให้ทีมการค้าเพื่อเข้าถึงกลุ่มเป้าหมายใหม่ๆ
              ทีมการค้าจะมีแพลตฟอร์มที่ปรับการรองรับของกระบวนการทั้งหมดตามลูกค้าและโอกาสที่เปลี่ยนแปลงไปโดยมีฟีเจอร์ต่างๆ
              ดังนี้
            </p>
            <ul className="list-disc list-inside">
              <li>การสร้างความเฉพาะตัวแบบ Omnichannel ผ่านข้อมูลการค้า</li>
              <li>
                เนื้อหา โปรโมชัน การแนะนำ
                และการค้นหาบนเว็บไซต์ปรับให้มีความเฉพาะตัวผ่าน AI และ machine
                learning
              </li>
              <li>ขยายการเข้าถึงตลาด แบรนด์ หรือโมเดลธุรกิจใหม่ๆ</li>
              <li>
                เครื่องมือที่ใช้งานง่ายสำหรับธุรกิจโดยเฉพาะด้วย AI
                เพื่อเพิ่มประสิทธิภาพด้านการตลาดและการจัดวางสินค้า
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return <div>{renderContent()}</div>;
}
