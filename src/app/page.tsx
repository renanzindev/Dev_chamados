import Image from "next/image";
import Atendimentos from "@/assets/image 533.svg";

export default function Home() {
  return (

    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-80px)]">
      <h2 className="font-medium text-2xl mb-2">Gerencie de Chamados</h2>
      <h1 className="font-bold text-3xl mb-8 text-blue-500 md:text-4xl">Atendimentos, Sprints</h1>
      <Image src={Atendimentos} 
      alt="Atendimentos" 
      width={600}
      height={100}
      className="max-w-sm md:max-w-xl"
      />
    </main>
  );
}
