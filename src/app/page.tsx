import { Header } from './components'

export default function Home() {
  return (
    <main className="w-screen h-screen bg-dark-gray">
      <Header.Root>
        <Header.Options />
      </Header.Root>
    </main>
  )
}
