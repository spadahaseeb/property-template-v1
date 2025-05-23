// components
import Heading from "@/components/shared/Heading";
import { DiscoverCitiesContent } from "@/assets/content";
import Thumbnail from "@/components/shared/Thumbnail";

const DiscoverCities = () => {
  return (
    <>
      <section className="section-spacing">
        <div className="container">
          {/* section-heading  */}
          <Heading
            heading="Find Properties in These Cities"
            discription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="pb-10"
          />

          {/* section content  */}
          <main>
            <div className="grid xxl:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-[15px]">
              {DiscoverCitiesContent.map((card, index) => {
                let layoutClass = "";
                if (index === 0 || index === 5) {
                  layoutClass = "md:col-span-2";
                } else {
                  layoutClass = "md:min-w-[327px]";
                }
                return (
                  <a
                    href="#"
                    key={index}
                    className={`rounded-medium h-[395px] ${layoutClass} hover:scale-[1.01] hover:shadow-[1px_1px_12px_6px_rgba(0,0,0,0.20)] duration-300 ease-out`}
                  >
                    <Thumbnail image={card.image}>
                      <div className="text-white md:pt-[45px] md:pl-[50px] pl-[30px] pt-[30px] w-full h-full bg-gradient-to-b from-black-primary/80 via-black-primary/10 to-black/0">
                        <p className="font-normal text-16 pb-[10px]">
                          {card.properties} properties
                        </p>
                        <h4 className="font-medium text-[21px]">
                          {card.title}
                        </h4>
                      </div>
                    </Thumbnail>
                  </a>
                );
              })}
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default DiscoverCities;
