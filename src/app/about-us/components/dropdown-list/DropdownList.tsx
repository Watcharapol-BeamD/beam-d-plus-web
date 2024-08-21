"use client";
import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function DropdownList() {
  const [showAnswerMap, setShowAnswerMap] = useState<boolean[]>([]);

  const data = [
    {
      id: 1,
      title: "ดาวน์โหลดแอพชำชำได้จากที่ไหน?",
      description:
        "- ปัจจุบันยังจำกัดการเข้าถึงการใช้งาน หากมีการอัพเดทจะประกาศให้ทราบอีกครั้ง",
    },
    {
      id: 2,
      title: "จัดส่งพื้นที่ไหนบ้าง?",
      description:
        "- ปัจจุบันเราให้บริการในพื้นที่ภาคตะวันออกทั้งหมด 7 จังหวัด ประกอบไปด้วย ชลบุรี , ฉะเชิงเทรา , จันทบุรี , ตราด , ปราจีนบุรี , ระยอง และสระแก้ว",
    },
    {
      id: 3,
      title: "ระยะเวลาในการจัดส่งสินค้านานเพียงใด?",
      description: "- ระยะเวลาในการจัดส่งสินค้าอยู่ระหว่าง 1-2 วันทำการ",
    },
    {
      id: 4,
      title: "สามารถชำระเงินได้อย่างไร?",
      description:
        "- ปัจจุบันเรามีบริการเก็บเงินปลายทาง และจะเพิ่มบริการช่องทางอื่นๆในอนาคตเร็วๆนี้",
    },
    {
      id: 5,
      title: "สามารถคืนสินค้าได้หรือไม่?",
      description:
        "- ทางบริษัทต้องขออภัย หากมีการตรวจรับสินค้าเรียบร้อย จะไม่สามารถยกเลิกหรือคืนสินค้าได้",
    },
    {
      id: 6,
      title: "มีค่าใช้จ่ายในการจัดส่งสินค้าหรือไม่?",
      description:
        "- ปัจจุบันเราจัดส่งฟรีในพื้นที่บริการภาคตะวันออกทั้งหมด 7 จังหวัด โดยไม่มีขั้นต่ำ",
    },
    {
      id: 7,
      title: "หากพบปัญหาในการจัดส่งจะทำอย่างไร?",
      description:
        "- ท่านสามารถแจ้งฝ่ายบริการลูกค้า ผ่านทางไลน์ @ChumChum เพื่อติดตามแก้ไขปัญหา",
    },
    {
      id: 8,
      title: "หากต้องการยกเลิกคำสั่งซื้อต้องทำอย่างไร?",
      description:
        "- ท่านสามารถแจ้งฝ่ายบริการลูกค้า ผ่านทางไลน์ @ChumChum เพื่อดำเนินการยกเลิก",
    },
    {
      id: 9,
      title: "หากต้องการแก้ไขใบกำกับภาษีต้องทำอย่างไร?",
      description:
        "- ท่านสามารถแจ้งฝ่ายบริการลูกค้า ผ่านทางไลน์ @ChumChum เพื่อดำเนินการแก้ไขข้อมูล",
    },
  ];

  const toggleAnswer = (id: number) => {
    setShowAnswerMap((prevState: boolean[]) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderDropdown = () => {
    return (
      <div>
        <div className=" after: overflow-hidden space-y-1 relative">
          {data.map((item) => (
            <div className="cursor-pointer" key={item.id}>
              <div
                className={`w-full bg-primary p-2  border-b flex justify-between items-center`}
                onMouseOver={() => toggleAnswer(item.id)}
              >
                <p>{item.title}</p>
                {showAnswerMap[item.id] ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </div>
              {showAnswerMap[item.id] && (
                <div className="bg-gray-100 p-2 pt-4 pb-2 pl-4 shadow absolute">
                  <p>{item.description}</p>
                  <p className="text-right text-xs pt-2 underline text-primary">Read More</p>
                </div>
              )}
       
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div className="w-80">{renderDropdown()}</div>;
}
