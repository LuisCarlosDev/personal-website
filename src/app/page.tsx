import Image from 'next/image'
import { Header } from './_components/header'
import { SectionTitle } from './_components/section-title'
import { Badge } from './_components/ui/badge'
import { Button } from './_components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { skills } from './_data/skills'
import { linksSocial } from './_data/links-social'

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col max-w-[1600px]">
      <Header />
      <section className="flex items-center justify-between py-10 px-40">
        <div className="w-full h-full flex flex-col max-w-[530px]">
          <div className="space-y-6 mb-12">
            <SectionTitle title="Olá, meu nome é" subtitle="Luis Carlos" />

            <p>
              Olá, meu nome é Luis Carlos e sou um desenvolvedor full-stack
              apaixonado por tecnologia. Com mais de 2 anos de experiência. Meu
              objetivo é criar interfaces de usuário bonitas e funcionais. Estou
              sempre aberto a novas oportunidades e desafios.
            </p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} className="rounded-md px-4 py-1 space-y-3">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button>
              Entre em Contato <ArrowRight size={16} className="ml-2" />
            </Button>

            <div className="flex items-center gap-2">
              {linksSocial.map((link) => {
                return (
                  <Link key={link.name} href={link.url}>
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={20}
                      height={20}
                    />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/luis.jpeg"
            alt="Luis Carlos Imagem"
            width={420}
            height={404}
            priority
            className="w-[420px] h-[404px] object-cover object-center rounded-md shadow-2xl transform hover:scale-105 duration-300"
          />
        </div>
      </section>
      <section className="flex flex-col w-full py-10 px-40 space-y-6 ">
        <SectionTitle title="../competências" subtitle="Conhecimentos" />
        <div className="flex flex-wrap gap-2 w-full">
          {skills.map((skill, index) => {
            return (
              <div
                key={index}
                className="p-6 rounded-lg bg-white shadow-lg flex flex-col gap-2 hover:text-background hover:bg-primary/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <p className="font-medium">{skill.name}</p>
                </div>

                <span>{skill.experience_years} anos de experiência</span>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
