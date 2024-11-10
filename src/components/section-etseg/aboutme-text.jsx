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
            Миний эцэг Ганхуягын Батбаатар нь 1965 оны наймдугаар сарын 9 ний
            өдөр Завхан аймгийн Тосонцэнгэл сумын төрөх эмнэлэгт Пүрэвийн
            Ганхуягын хоёрдугаар хүү болон хорвоод мэндэлсэн. Бага балчир насаа
            цэцэрлэгт өнгөрүүлж, 1973-1983 онд ерөнхий боловсролын бүрэн дунд
            сургуульд, 1983-1986 онд Ардын армийн сонсогч байлдагч, 1986 оноос 2
            жилийн хугацаанд нийслэлийн 28 дугаар сургуульд цэрэг спортын
            багшаар ажилласан.
          </p>
          <p className="aboutMetext-p scrollPerCon">
            1988 онд улсын багшийн дээд сургуульд ерөнхий техникийн ангид элсэн
            суралцаж, 1990 онд урьдчилсан төгсөлтөөр амжилттай төгсөн, 22 дугаар
            дунд сургуульд техник хөдөлмөрийн багшаар 2 жил ажиллаж байгаад,
            1992 онд багшийн их сургуулийг ерөнхий техник мэргэжлээр бакалаврын
            зэрэг хамгаалж төгссөн. 1992-1994 онд ерөнхий боловсролын 22 дугаар
            сургуульд багшаар ажиллаж, 1994-1997 онд хувиараа бизнес эрхлэн,
            улмаар 1997 оноос дахин 22 дугаар сургуульд багшаар ажиллсан.
            2000-2004 онд Бүгд Найрамдах Өмнөд Солонгос улсад ажиллаж амьдарсан.
          </p>
          <p className="aboutMetext-p scrollPerCon">
            1995 онд ээж Тогоохүүгийн Долгорсүрэнтэй танилцан 1996 онд гэр бүл
            болж, 1997 болон 1999 онд миний бие болон дүү мэндлэж бүл нэмсэн.
          </p>

          <p className="aboutMetext-p scrollPerCon">
            Аав минь 2004 онд Солонгос улсаас ирж 11 жилийн турш “ДЕКОРА” хэмээх
            барьлагын салбарт үйл ажиллагаа явуулдаг хязгаарлагдмал
            хариуцлагатай компанид ажиллаж, 2015 оноос өдийг хүртэл үйлчилгээний
            байгууллагад ажиллаж байна.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMeText;
