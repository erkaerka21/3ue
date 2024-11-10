import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
const AboutMeText = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <div>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <div>
        <div className="flex flex-col scroll-container" ref={ref}>
          <p className="aboutMetext-p scrollPerCon">
            Батбаатарын Эрдэнэсүрэн би 1997 онд нийслэлийр 2 дугаар төрөх
            эмнэлэгт гэрийн ууган хүү болон мэндэлсэн. 10 нас хүртэлээ өвөө
            болон эмээгийн хамт амьдарсан. 2003 онд 6 настай байхад ерөнхий
            боловсролын Үй-Цай хятад хэлний гүнзгийрүүлсэн сургалттай бүрэн дунд
            сургуульд элсэн орж, 9 дүгээр ангий дүүргэн, 2012 онд Оюуны Ундраа
            Цогцолбор 96 дугаар ахлах сургууль уруу шилжин орж 2014 онд төгссөн.
            Улмаар Монгол улсын их сургуулийн бизнесийн сургуульд бизнесийн
            удирдлага мэргэжлээр суралцаж 2017 онд хүндэтгэх шалтгааны улмаас
            сургуулиасаа гарсан.
          </p>
          <p className="aboutMetext-p scrollPerCon">
            2019 оны 10-р сард хугацаат цэргийн албанд татагдан Улаанбаатар
            хотод зэвсэгт хүчний 032-р дугаар ангид 1 жилийн хугацаанд алба хаан
            2020 оны 10-р сард халагдсан. Улмаар ковид 19 өвчний цар тахлын
            улмаас тогтвортой ажил эрхэлээгүй. 2021 оны 9-р сараас эхлэн
            Өмнөговь аймгийн Гурвантэс суманд байрлалтай “Өсөх Зоос Алтанговь”
            ГХОХХК-д захиргааны ажилтанаар ажиллаж эхэлсэн. Тус компани нь нүүрс
            угаан баяжуулж экспортонд гаргадаг. 2023 оны 2 дугаар сарын 1 ний
            өдрөөс 2024 оны 5 дугаар сарын 1 ний өдрийг хүртэл Өмнөговь аймгийн
            Цагаанхад суурьшлын бүсэд орших Дүүрэн хийморь транс ХХК-д хүний
            нөөцийн ажилтанаар тус тус ажилласан.
          </p>

          <p className="aboutMetext-p scrollPerCon">
            2024 оны 4 дүгээр сарын 26 ны өдрөөс эхлэн одоог хүртэл Pinecone
            академид программ хөгжүүлэгчээр сурч байна.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMeText;
