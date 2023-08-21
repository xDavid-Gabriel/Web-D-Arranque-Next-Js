import { TypographyH1, TypographyH2, TypographyH3 } from "@/components/shared";
import { Header } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Black_Ops_One } from "next/font/google";
const black_ops_one = Black_Ops_One({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero */}
      <section className="relative z-[-1]">
        <div className="container grid items-center gap-10 lg:grid-cols-2 2xl:[grid-template-columns:536px_1fr] ">
          <div className="mt-[19px] flex flex-col gap-[7px] w-fit mx-auto lg:mx-0 lg:w-full lg:mt-[80px] 2xl:mt-[19px] lg:relative lg:left-[100px]">
            <span
              className={`${black_ops_one.className} text-white sm:text-[20px] max-w-[306px]`}
            >
              ¡Participa, gana y ayuda a un motero!
            </span>

            <TypographyH1 className="text-white">
              <strong className="block">DALE LA</strong>
              <strong className="text-[45px] sm:text-[55px] lg:text-[120px]">
                MANO
              </strong>{" "}
              A UN{" "}
              <strong className="text-[45px] sm:text-[55px] lg:text-[120px] block">
                MOTERO
              </strong>
            </TypographyH1>
            <span className="font-display text-white text-[20px] sm:text-[30px] lg:text-[50px]">
              BY @DARRANQUE
            </span>
            <Button className="w-fit">ver premio</Button>
          </div>
          <img
            className="max-w-[400px] mx-auto object-contain xl:object-cover xl:max-w-[604px] 2xl:max-w-[initial]"
            src="/img/hero.png"
            alt="KTM DUKE 200"
          />
        </div>
        <div className="w-[57%] z-[-1] absolute right-0 bottom-[-20px] bg-primary h-[148px] [clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)] lg:h-[238px] lg:w-[33%]"></div>
      </section>
      <section className="mt-[54px] lg:mt-[140px] relative">
        <div className="px-4">
          <TypographyH2 className=" text-center max-w-[291px] mx-auto lg:max-w-[672px]">
            GANA UNA KTM DUKE 200 Y JUNTOS AYUDEMOS A UN MOTERO
          </TypographyH2>
          <p className="max-w-[332px] mt-[17px] mx-auto text-center xl:hidden">
            ¡Esta es tu oportunidad de GANAR una KTM! participa en nuestra rifa
            y forma parte de esta iniciativa que busca ayudar a un motero en
            apuros, juntos démosle la mano a un motero.
          </p>
        </div>
        <div className="bg-primary mt-[250px]  pt-[140px] pb-[40px] relative z-[-1] xl:mt-[410px] xl:pt-[250px]">
          <div className="max-w-[310px] top-0 z-10 translate-y-[-60%] left-1/2 -translate-x-1/2 absolute xl:max-w-[518px]">
            <img
              className=" object-contain  h-fit "
              src="/img/premio.png"
              alt="KTM DUKE 200"
            />
            <img
              className="w-[100px] hidden  absolute object-contain top-[200px] left-[-150px] h-fit xl:block"
              src="/img/arrow.svg"
              alt="Flecha"
            />
            <p className="hidden xl:block max-w-[332px] absolute top-[80px] left-[-345px]">
              ¡Esta es tu oportunidad de GANAR una KTM! participa en nuestra
              rifa y forma parte de esta iniciativa que busca ayudar a un motero
              en apuros, juntos démosle la mano a un motero.
            </p>
          </div>
          <div className="container flex flex-col gap-[10px] xl:flex-row">
            <div className="flex flex-col gap-[7px] max-w-[275px] text-center mx-auto relative">
              <span
                className={`${black_ops_one.className} text-white/80 text-[35px] absolute top-0 translate-y-[-80%] hidden xl:block`}
              >
                01
              </span>
              <TypographyH3>MOTOR</TypographyH3>
              <p>
                Monocilíndrico, 4 tiempos, inyección electrónica, 199.5 cc,
                refrigerado por líquido, 6 velocidades.
              </p>
            </div>
            <div className="flex flex-col gap-[7px] max-w-[275px] text-center mx-auto relative">
              <span
                className={`${black_ops_one.className} text-white/80 text-[35px] absolute top-0 translate-y-[-80%] hidden xl:block`}
              >
                02
              </span>
              <TypographyH3>POTENCIA</TypographyH3>
              <p>25 hp, 19.5 nm, velocidad máxima 140 km/h</p>
            </div>

            <div className="flex flex-col gap-[7px] max-w-[275px] text-center mx-auto relative">
              <span
                className={`${black_ops_one.className} text-white/80 text-[35px] absolute top-0 translate-y-[-80%] hidden xl:block`}
              >
                03
              </span>
              <TypographyH3>SUSPENCIONES</TypographyH3>
              <p>
                Barras invertidas WP APEX de 43 mm y monoshock WP APEX regulable
                con recorrido de 150 mm
              </p>
            </div>

            <div className="flex flex-col gap-[7px] max-w-[275px] text-center mx-auto  relative">
              <span
                className={`${black_ops_one.className} text-white/80 text-[35px] absolute top-0 translate-y-[-80%] hidden xl:block`}
              >
                04
              </span>
              <TypographyH3>FRENOS</TypographyH3>
              <p>
                Delantero disco de 300 mm con cáliper BYBRE de 4 pistones con
                ABS, posterior disco de 230 mm con cáliper BYBRE monopistón con
                ABS desconectable.
              </p>
            </div>
          </div>
          <div className="[clip-path:polygon(0_0,100%_0,100%_0,0_30%)] h-[330px] bg-charcoal-black w-full absolute top-0"></div>
        </div>
      </section>
      <section className="container mt-[30px] lg:mt-[120px]">
        <TypographyH2 className="text-center">
          ¿COMO PARTICIPAR EN ESTE GRAN SORTEO?
        </TypographyH2>
        {/* <div className="grid [grid-template-columns:50px_1fr] gap-[20px] mt-[29px] lg:mt-[35px] items-center">
          <img
            src="/img/pasos.png"
            alt="Paso"
            className="row-span-3 object-contain h-fit relative top-[-36px]"
          />
          <div className="bg-white/10 p-[17px_11px] rounded-[8px] shadow-[0px_5px_50px_0px_rgba(90,90,90,0.20)] flex flex-col gap-[11px] items-center">
            <p>
              PLINEA o YAPEA al 940 705 635 a nombre de Sergio Salazar la
              cantidad que prefieras, cada s/5 es un ticket.
            </p>
            <img
              src="/img/yape-plin.png"
              className="w-[62px] h-fit"
              alt="Paso"
            />
          </div>
          <div className="bg-white/10 p-[17px_11px] rounded-[8px] shadow-[0px_5px_50px_0px_rgba(90,90,90,0.20)] flex flex-col gap-[11px] items-center">
            <p>
              Envía el comprobante del YAPEO o PLINEO mediante DM por Instagram
              a @darranque junto a tu NOMBRE + CELULAR + DNI
            </p>
            <img
              src="/img/instagram.png"
              className="w-[32px] h-fit"
              alt="instagram"
            />
          </div>
          <div className="bg-white/10 p-[17px_11px] rounded-[8px] shadow-[0px_5px_50px_0px_rgba(90,90,90,0.20)] flex flex-col gap-[11px] items-center">
            <p>
              Espera por tus tickets. Los números de tickets son elegidos al
              azar y entregados por el DM de Instagram, mismo medio donde
              enviaste el comprobante. Este proceso puede demorar un poco porque
              es realizado de forma manual y con cuidado para asegurar su
              correcta ejecución.
            </p>
          </div>
        </div> */}
        <div className="flex flex-col gap-[23px] max-w-[290px] mx-auto mt-[40px] lg:mt-[100px] lg:max-w-[878px]">
          <div className="flex items-center gap-[20px] text-center lg:max-w-[463px]">
            <img
              src="/img/paso-1.png"
              alt="Paso"
              className="w-[50px] lg:order-2"
            />
            <div className="bg-white/10 p-[17px_11px] rounded-[8px] shadow-[0px_5px_50px_0px_rgba(90,90,90,0.20)] flex flex-col gap-[11px] items-center ">
              <p>
                PLINEA o YAPEA al 940 705 635 a nombre de Sergio Salazar la
                cantidad que prefieras, cada s/5 es un ticket.
              </p>
              <img
                src="/img/yape-plin.png"
                className="w-[62px] h-fit"
                alt="Paso"
              />
            </div>
          </div>
          <div className="flex items-center gap-[20px] text-center lg:max-w-[463px] lg:self-end">
            <img src="/img/paso-2.png" alt="Paso" className="w-[50px]" />
            <div className="bg-white/10 p-[17px_11px] rounded-[8px] shadow-[0px_5px_50px_0px_rgba(90,90,90,0.20)] flex flex-col gap-[11px] items-center">
              <p>
                Envía el comprobante del YAPEO o PLINEO mediante DM por
                Instagram a @darranque junto a tu NOMBRE + CELULAR + DNI
              </p>
              <img
                src="/img/instagram.png"
                className="w-[32px] h-fit"
                alt="Paso"
              />
            </div>
          </div>
          <div className="flex items-center gap-[20px] text-center lg:max-w-[463px]">
            <img
              src="/img/paso-3.png"
              alt="Paso"
              className="w-[50px]  lg:order-2"
            />
            <div className="bg-white/10 p-[17px_11px] rounded-[8px] shadow-[0px_5px_50px_0px_rgba(90,90,90,0.20)] flex flex-col gap-[11px] items-center">
              <p>
                Espera por tus tickets. Los números de tickets son elegidos al
                azar y entregados por el DM de Instagram, mismo medio donde
                enviaste el comprobante. Este proceso puede demorar un poco
                porque es realizado de forma manual y con cuidado para asegurar
                su correcta ejecución.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
