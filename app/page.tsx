import { TypographyH1 } from "@/components/shared";
import { Header } from "@/components/shared";
import { Black_Ops_One } from "next/font/google";
const black_ops_one = Black_Ops_One({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="mt-[19px]">
          <span className={`${black_ops_one.className} text-white`}>
            ¡Participa, gana y ayuda a un <br /> motero!
          </span>

          <TypographyH1 className="text-white">
            DALE LA <strong className="text-[36px]">MANO</strong> A UN{" "}
            <strong className="relative before:absolute before:w-[4px] before:skew-x-[-32deg] before:h-[5px] before:bg-white before:right-0 before:top-[0px] before:left-[50%] before:translate-x-[-16%]">
              A
            </strong>
            <br />
            <strong className="text-[36px]">MOTERO</strong>
          </TypographyH1>
        </div>
      </section>
    </>
  );
}
