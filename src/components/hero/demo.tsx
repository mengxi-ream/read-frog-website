"use client";

import { ContainerScroll } from "@/components/motion/container-scroll-animation";
import Image from "next/image";

export function Demo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-xl md:text-4xl font-semibold text-black dark:text-white">
              Experience the power of <br />
              <span className="text-4xl md:text-[3rem] font-bold leading-none">
                AI Translation & Understanding
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/images/demo.png`}
          alt="hero"
          height={1823}
          width={2530}
          className="mx-auto rounded-2xl object-fill w-full h-full"
          draggable={false}
        />
      </ContainerScroll>
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Powered by leading AI models
        </p>
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center gap-2">
            <img
              src="/images/icons/openai.jpg"
              alt="OpenAI"
              width={28}
              height={28}
              className="object-contain rounded-full"
            />
            <span className="font-medium">OpenAI</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/images/icons/deepseek.png"
              alt="DeepSeek"
              width={32}
              height={32}
              className="object-contain rounded-full"
            />
            <span className="font-medium">DeepSeek</span>
          </div>
        </div>
      </div>
    </div>
  );
}
