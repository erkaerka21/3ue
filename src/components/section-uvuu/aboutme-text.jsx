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
            Миний эцэг өвөө Пүрэвийн Ганхуяг нь 1942 онд Баянхонгор аймгийн
            Бууцагаан суманд Улаан хадны үзүүр гэдэг газарт Бямба овогтой
            Пүрэвийн ууган хүү болон мэндэлсэн. 9 настайгаасаа эхлэн сургуулийн
            мөр хөөн 1959 онд долоодугаар ангиа төгсөж, Улаанбаатар хотын
            багшийн сургуульд элсэн ороод 1963 онд сургуулиа дүүргэсэн.
          </p>
          <p className="aboutMetext-p scrollPerCon">
            Улмаар Завхан аймгийн тосонцэнгэл сумын ерөнхий боловсролын бүрэн
            дунд сургуульд багшаар томилогдон 1971 оны долоодугаар сар хүртэл
            ажиллан тухайн жилдээ Улсын багшийн дээд сургуульд орж 1975 онд
            монгол хэл, утга зохиолын мэргэжлээр төгсөж, Найрамдалын районы 53
            дугаар сургуульд хичээлийн эрхлэгчээр томилогдон ажиллаж эхэлсэн.
          </p>

          <p className="aboutMetext-p scrollPerCon">
            1977 оноос 1 жилийн хугацаатай 68 дугаар сургуулийн захиралаар,
            1978-1981 онд 69 дүгээр сургуулийн захирал, 1981 оны долоодугаар
            сараас эхлэн Ардын боловсролын хэлтэсийн даргаар томилогдон
            тасралтгүй 15 жил ажилласан. 1996 оноос Баянгол дүүргийн 96 дугаар
            сургуулийн захиралаар, 2000 оноос Баянгол дүүргийн Оюуны Ундраа
            цогцолбор сургуулийн захиралаар тус тус ажилласан.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutMeText;
