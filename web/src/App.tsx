import './styles/main.css'
import logo from './assets/logo.svg'
import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { GameBanner } from './Components/GameBanner'
import { AdBanner } from './Components/AdBanner'
import { CreateAdModal } from './Components/CreateAdModal'
import axios from 'axios'

interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => setGames(response.data))
  }, [])

  return (
    <div className='max-w-[1000px] mx-auto flex flex-col items-center my-11'>
      <img src={logo} alt="" className='w-1/6'/>

      <h1 className='text-5xl text-white font-black mt-10'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'> duo </span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16 max-w-4xl'>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title} 
              adsCount={game._count.ads}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <AdBanner/>
        <CreateAdModal/>
      </Dialog.Root>
        

    </div>
  )
}
export default App