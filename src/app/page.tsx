import { Header } from './_components/header'

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col max-w-[1600px]">
      <Header />
      <div>
        <h1>Hello world</h1>
      </div>
    </div>
  )
}
