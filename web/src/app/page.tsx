import { User } from 'lucide-react'
import Image from 'next/image'

import nlwLogo from '../assets/nlw_12_logo.svg'

export default function Home() {
  return (
    <div className="min-w-screen grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[18rem] w-[33rem] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#633BBC] opacity-50 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        <div className="flex gap-3">
          <a
            href="http://localhost:3000"
            className="rounded-full bg-gray-400 p-3"
          >
            <User className="h-5 w-5 text-gray-500" />
          </a>
          <span className="inline-block max-w-[10rem] break-words text-sm leading-snug">
            <a
              href="http://localhost:3000"
              className="underline hover:text-gray-50"
            >
              Crie sua conta
            </a>{' '}
            e salve suas memórias!
          </span>
        </div>
        <div className="flex max-w-md flex-col gap-5">
          <Image src={nlwLogo} alt="NLW Logo" />
          <h1 className="text-[2.5rem] font-bold leading-tight text-gray-50">
            Sua cápsula do tempo
          </h1>
          <p className="text-lg">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </p>
          <a
            href=""
            className="w-fit rounded-full bg-green-500 px-5 py-3 font-alt text-sm font-bold uppercase text-almost-black"
          >
            Cadastrar lembrança
          </a>
        </div>
        <span className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '}
          <a
            target="_blank"
            href="https://rocketseat.com.br"
            className="underline hover:text-gray-50"
            rel="noreferrer"
          >
            Rocketseat
          </a>
        </span>
      </div>
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="block w-fit max-w-[360px] text-center leading-relaxed ">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a
              href="http://localhost:3000"
              className="underline hover:text-gray-50"
            >
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  )
}
