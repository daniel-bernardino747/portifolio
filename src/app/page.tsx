import { Header } from './components'

export default function Home() {
  return (
    <main className="w-screen h-screen bg-dark-gray">
      <Header.Root>
        <Header.HomeOption link="/" label="Voltar para página principal" />
        <div className="flex gap-10">
          <Header.Options />
          <Header.MainOption link="/" title="Serviços" />
        </div>
      </Header.Root>
    </main>
  )
}
