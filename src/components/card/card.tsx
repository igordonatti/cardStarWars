import Character from '../../assets/Character.svg'
import Image from '../../assets/Image.svg'

export default function Card() {
  return (
    <div className="relative drop-shadow-lg rounded-3xl bg-gradient-to-l from-purples-500 to-darkBlue-200 w-cardWidth h-cardHeight">  

      <div className='absolute inset-0 rounded-3xl w-full'
        style={{
          maskImage: 'linear-gradient(to top, rgba(5, 8, 36, 1), rgba(5, 8, 36, 0))',
          WebkitMaskImage: 'linear-gradient(to top, rgba(5, 8, 36, 0), rgba(5, 8, 36, 0.2))', 
          background: `url(${Image})`,
          backgroundRepeat: 'no-repeat',  
        }}
      >
      </div>

      <div 
        className='absolute z-10 rounded-3xl w-full h-full'
        style={{ 
          background: 'linear-gradient(to top, rgba(8, 8, 36, 1), rgba(255, 255, 255, 0.0))' 
        }}
      >
        <div className="w-60 mt-12 ml-10">
          <h1 className="text-whites-100 text-3xl font-bold">REY SKYWALKER</h1>
          <p className="mt-4 text-whites-200 text-sm">
            Era uma catadora de sucata que descobriu ser sensível à Força durante sua busca ao lendário Mestre Jedi Luke Skywalker.
          </p>
        </div>

        <div className='w-48 mt-10 ml-10 text-sm'>
          <div>
            <p className='text-purples-200'>Filmes</p>
            <p className='text-whites-200 font-bold'>
              The Force Awakens, The Last Jedi, The Rise of Skywalker & Forces of Destiny
            </p>
          </div>

          <div className='mt-4'>
            <p className='text-purples-200'>Espécie</p>
            <p className='text-whites-200 font-bold'>
              Humana
            </p> 
          </div>

          <div className='mt-4'>
            <p className='text-purples-200'>Altura</p>
            <p className='text-whites-200 font-bold'>
              1,7m
            </p> 
          </div>

          <div className='mt-4'>
            <p className='text-purples-200'>Localidade</p>
            <p className='text-whites-200 font-bold'>
              Jakku
            </p> 
          </div>

          <div className='mt-4'>
            <p className='text-purples-200'>Armas</p>
            <p className='text-whites-200 font-bold'>
                Sabre de luz, Blaster, Quarterstaff
            </p> 
          </div>
        </div>
      </div>

      <img src={Character} alt="" className='z-20 absolute bottom-0 right-0 mb-auto' />
    </div>
  )
}