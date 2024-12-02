import { FormEvent, useState } from 'react';
import bombaDeGasolina from './assets/bomba-de-gasolina.png'

function App() {
  const [gasolina, setGasolina] = useState(0);
  const [alcool, setAlcool] = useState(0);
  const [info, setInfo] = useState<InfoProps>();

  interface InfoProps {
    titulo: string;
    gasolina: number | string;
    alcool: number | string;
  }

  function calcular(event: FormEvent) {
    event.preventDefault();

    if ((gasolina && alcool) != 0) {
      if ((alcool / gasolina) <= 0.7) {
        setInfo({
          titulo: "Compensa usar álcool!",
          gasolina,
          alcool
        })
      } else {
        setInfo({
          titulo: "Compensa usar gasolina!",
          gasolina,
          alcool
        })
      }
    }
  }

  function formatarMoeda(valor:string | number) {
    return valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
  }

  return (
    <>
      <main className="flex flex-col justify-center items-center m-auto max-w-3xl h-full px-4">
        <img className='w-32' src={bombaDeGasolina} alt="imagem de uma bomba de gasolina" />
        <h2 className='text-white font-bold mt-4 text-2xl'>Qual a melhor opção?</h2>
        <form className='w-full' onSubmit={calcular}>
          <div className='flex flex-col'>
            <label className='text-white mb-2' htmlFor="inputALcool">Álcool (preço por litro)</label>
            <input 
              className='w-full rounded-sm p-2' 
              type="number" 
              id="inputAlcool" 
              value={gasolina}
              onChange={(e) => setGasolina(Number(e.target.value))}
            />
          </div>
          <div className='flex flex-col mt-4'>
            <label className='text-white mb-2' htmlFor="inputGasolina">Gasolina (preço por litro)</label>
            <input 
              className='w-full rounded-sm p-2' 
              type="number" 
              id="inputGasolina" 
              value={alcool}
              onChange={(e) => setAlcool(Number(e.target.value))}
            />
          </div>
          <button type="submit" className='w-full mt-3 p-2 rounded-sm font-bold text-white text-lg text-center bg-sky-600 cursor-pointer hover:scale-105 transition-all'>Calcular</button>
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className='mt-4 bg-green-600 py-4 px-8 rounded-sm text-white hover:scale-110 transition-all'>
            <h2 className='text-2xl mb-2'>{info.titulo}</h2>
            <p className='text-center'>Gasolina: {formatarMoeda(info.gasolina)}</p>
            <p className='text-center'>Álcool: {formatarMoeda(info.alcool)}</p>
          </section>
        )}
      </main>
    </>
  )
}

export default App;