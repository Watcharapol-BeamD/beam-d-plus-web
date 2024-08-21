"use client";
import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

 
export default function DropdownList() {
  const [showAnswerMap, setShowAnswerMap] = useState<boolean[]>([]);

  const data = [
    {
      id: 1,
      question: "ดาวน์โหลดแอพชำชำได้จากที่ไหน?",
      answer:
        "- ปัจจุบันยังจำกัดการเข้าถึงการใช้งาน หากมีการอัพเดทจะประกาศให้ทราบอีกครั้ง",
    },
    {
      id: 2,
      question: "จัดส่งพื้นที่ไหนบ้าง?",
      answer:
        "- ปัจจุบันเราให้บริการในพื้นที่ภาคตะวันออกทั้งหมด 7 จังหวัด ประกอบไปด้วย ชลบุรี , ฉะเชิงเทรา , จันทบุรี , ตราด , ปราจีนบุรี , ระยอง และสระแก้ว",
    },
    {
      id: 3,
      question: "ระยะเวลาในการจัดส่งสินค้านานเพียงใด?",
      answer: "- ระยะเวลาในการจัดส่งสินค้าอยู่ระหว่าง 1-2 วันทำการ",
    },
    {
      id: 4,
      question: "สามารถชำระเงินได้อย่างไร?",
      answer:
        "- ปัจจุบันเรามีบริการเก็บเงินปลายทาง และจะเพิ่มบริการช่องทางอื่นๆในอนาคตเร็วๆนี้",
    },
    {
      id: 5,
      question: "สามารถคืนสินค้าได้หรือไม่?",
      answer:
        "- ทางบริษัทต้องขออภัย หากมีการตรวจรับสินค้าเรียบร้อย จะไม่สามารถยกเลิกหรือคืนสินค้าได้",
    },
    {
      id: 6,
      question: "มีค่าใช้จ่ายในการจัดส่งสินค้าหรือไม่?",
      answer:
        "- ปัจจุบันเราจัดส่งฟรีในพื้นที่บริการภาคตะวันออกทั้งหมด 7 จังหวัด โดยไม่มีขั้นต่ำ",
    },
    {
      id: 7,
      question: "หากพบปัญหาในการจัดส่งจะทำอย่างไร?",
      answer:
        "- ท่านสามารถแจ้งฝ่ายบริการลูกค้า ผ่านทางไลน์ @ChumChum เพื่อติดตามแก้ไขปัญหา",
    },
    {
      id: 8,
      question: "หากต้องการยกเลิกคำสั่งซื้อต้องทำอย่างไร?",
      answer:
        "- ท่านสามารถแจ้งฝ่ายบริการลูกค้า ผ่านทางไลน์ @ChumChum เพื่อดำเนินการยกเลิก",
    },
    {
      id: 9,
      question: "หากต้องการแก้ไขใบกำกับภาษีต้องทำอย่างไร?",
      answer:
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
        
        <p className="font-bold text-lg">คำถามที่พบบ่อย</p>
        <div className="rounded-lg overflow-hidden space-y-1">
          {data.map((item) => (
            <div className="cursor-pointer" key={item.id}>
              <div
                className="w-full bg-gray-200 p-2 shadow flex justify-between items-center"
                onClick={() => toggleAnswer(item.id)}
              >
                <p>{item.question}</p>
                {showAnswerMap[item.id] ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </div>
              {showAnswerMap[item.id] && (
                <div className="bg-gray-100 p-2 py-4 pl-4 shadow">
                  <p>{item.answer}</p>
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
