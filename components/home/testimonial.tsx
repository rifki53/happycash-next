// components/testimonials.tsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import almaAImage from "@/public/images/customers/alma-a.jpg";
import andyDuaveImage from "@/public/images/customers/andy-duave.jpg";
import chikoChiImage from "@/public/images/customers/chiko-chi.jpg";
import eliL1485Image from "@/public/images/customers/eli-l1485.jpg";
import florencioJugarapJrImage from "@/public/images/customers/florencio-jugarap-jr.jpg";
import jieJieGuazaImage from "@/public/images/customers/jie-jie-guaza.jpg";
import jimEjercitoImage from "@/public/images/customers/jim-ejercito.jpg";
import karreneWineImage from "@/public/images/customers/karrene-wine.jpg";
import katkatImage from "@/public/images/customers/katkat.jpg";
import kristeenAguirreImage from "@/public/images/customers/kristeen-aguirre.jpg";
import levyMadriagaImage from "@/public/images/customers/levy-madriaga.jpg";
import lotParasImage from "@/public/images/customers/lot-paras.jpg";
import lourdesCaspeImage from "@/public/images/customers/lourdes-caspe-(cling-cling).jpg";
import melanieAgarImage from "@/public/images/customers/melanie-agar.jpg";
import vincentSyImage from "@/public/images/customers/vincent-sy.jpg";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  // Dummy data for 9 testimonials

  const testimonials = [
    {
      name: "Kat kat",
      quote:
        "very recommendable! has low interest fees, and you can pay the loan for up to 3 months, but once you're late even just for 1 day, they won't allow you to reloan anymore even if you paid on time afterwards. but still very recommendable. they don't charge excessive fees when it's late, unlike other loan apps",
      rating: 5,
      image: katkatImage,
    },
    {
      name: "Levy Madriaga",
      quote:
        "This one is the best when it comes to terms and conditions. You worry no more because this is a 1 month pay rule and take note it depends on you if you want to pay it full that's good ,but if you want to pay on 2 terms it is good also, but the most important thing is you have to pay on time just to have a good record Low interet as it's finest! Happycash Thank you! I will rate this app 10 stars",
      rating: 5,
      image: levyMadriagaImage,
    },
    {
      name: "Melanie Agar",
      quote:
        "I am happy i was approove to borrow 4,600 fr this app but i don't know if the interest is high or low because there is click button to borrow and i am afraid to press the button. because i was scammed by other ONLINE LENDING APP before , i pressed the button and suddenly appeared that the money i borrowed amounting 2,925 became 4,988 . they doubled the interest and they obliged me to pay it in just 7 days but the said tenor was 150 days.",
      rating: 5,
      image: melanieAgarImage,
    },
    {
      name: "Lot paras",
      quote:
        "I am giving this loan app 5 because the application is not complicated & they are transparent with interest and service fees and for me the amount is reasonable. Terms of payment was monthly so you have enough time for repayment. I found this app really helpful.",
      rating: 5,
      image: lotParasImage,
    },
    {
      name: "Eli L1485",
      quote:
        "Leaving a 5-star review for now, because so far so good. The app is so easy to use and track, so I'm not having a hard time filling out my details. I just have to wait if my loan is approved or not. Will update this once I got approved and give more feedback.",
      rating: 5,
      image: eliL1485Image,
    },
    {
      name: "Chiko Chi",
      quote:
        "easy to fill out and apply for. make sure to take note of how much you'll get before borrowing and when the next due date is. they are not rude and will not bombard you with reminders like most apps.",
      rating: 5,
      image: chikoChiImage,
    },
    {
      name: "Jim Ejercito",
      quote:
        "Great app! The loan process was fast, simple, and transparent. Customer service was helpful, and I received the funds quickly. Highly recommended for anyone in need of quick financial help!",
      rating: 5,
      image: jimEjercitoImage,
    },
    {
      name: "Lourdes Caspe (Cling-Cling)",
      quote:
        "It's my third time loan in this loan app. So far so good, got no problem with transactions. Helps me a lot in times of financial emergency. Thank you happy cash.",
      rating: 5,
      image: lourdesCaspeImage,
    },
    {
      name: "Kristeen Aguirre",
      quote:
        "i like it.this is better. unlike some apps they will not indicate the interest and you will be shocked the high interest that the loan that your applying.it is reasonable thank you for granting my loan.",
      rating: 5,
      image: kristeenAguirreImage,
    },
    {
      name: "Karrene Wine",
      quote:
        "This is by far one of the most transparent and low interest OLA ever. i like that it has a monthly repayment of up to 3 months. It saves the day!",
      rating: 5,
      image: karreneWineImage,
    },
    {
      name: "Alma A",
      quote:
        "I was short with the budget and school fees are near of dues and I'm looking for an online app that didn't harass or call many times and no higher interest rate and I found happy cash with more good reviews. I am a one of Happy Cash customer and I truly loved this app. I highly recommend this loan app to everyone.",
      rating: 5,
      image: almaAImage,
    },
    {
      name: "Jie-Jie Guaza",
      quote:
        "Fast and hassle-free cash lending with quick approval, convenient and reliable! Hope that it will continue to serve better.",
      rating: 5,
      image: jieJieGuazaImage,
    },
    {
      name: "Vincent Sy",
      quote:
        "fast, easy and reliable... apps is user friendly and easy to use. hope you could help more people who is in need.",
      rating: 5,
      image: vincentSyImage,
    },
    {
      name: "Andy Duave",
      quote:
        "Amazing Online App! Very seamless process.. Crossing my fingers for a positive result and great line of credit approval.. :-)",
      rating: 5,
      image: andyDuaveImage,
    },
    {
      name: "Florencio Jugarap Jr",
      quote:
        "Easy to apply and greatly high credit limit even first time with long terms repayment option. I can recommend this OLA",
      rating: 5,
      image: florencioJugarapJrImage,
    },
  ];

  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Why They Love Us
            </h2>
            <p className="text-3xl font-bold text-lime-400 md:text-4xl">
              Real Comments
            </p>
          </div>

          {/* Testimonials slider */}
          <div className="testimonials-slider">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              slidesPerGroup={1} // Group by 1 on mobile
              pagination={{
                el: ".testimonial-pagination",
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  slidesPerGroup: 2, // Group by 2 on tablet
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 3, // Group by 3 on desktop
                  spaceBetween: 30,
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-xl">
                    <div className="mb-4 flex items-center">
                      <Image
                        className="mr-4 h-12 w-12 rounded-full"
                        src={testimonial.image}
                        width={48}
                        height={48}
                        alt={testimonial.name}
                      />
                      <div>
                        <div className="font-bold text-slate-800">
                          {testimonial.name}
                        </div>
                        <div className="mt-1 flex items-center text-lime-400">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <FaStar key={i} />
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <blockquote className="flex-grow text-slate-600">
                      {testimonial.quote}
                    </blockquote>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Slider pagination */}
          <div className="testimonial-pagination mt-12 text-center"></div>
        </div>
      </div>

      {/* Custom styles for pagination bars */}
      <style jsx global>{`
        .testimonial-pagination .swiper-pagination-bullet {
          width: 2.5rem; /* 40px */
          height: 0.25rem; /* 4px */
          border-radius: 0.125rem; /* 2px */
          background-color: transparent;
          border: 1px solid white;
          opacity: 1;
          transition: background-color 0.3s ease;
        }

        .testimonial-pagination .swiper-pagination-bullet-active {
          background-color: #a3e635; /* lime-400 */
          border-color: #a3e635; /* lime-400 */
        }
      `}</style>
    </section>
  );
}
