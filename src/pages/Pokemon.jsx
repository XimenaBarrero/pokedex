import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./styles/Pokemon.css"

const Pokemon = () => {
  const [dataPokemon, setDataPokemon] = useState()

  const {id} = useParams()

  const getPercentBarProgress = (valueStat) => {
    const maxValue = 150
    return  `${(valueStat * 100) / maxValue}%`
  }

  useEffect(() => {
    const URL =  `http://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
    .then(res => setDataPokemon(res.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <main className='Pokemon'>
      <section className='pokemon-id'>
        <section className={`pokemon-id-header border-lg-${dataPokemon?.types[0].type.name}`}></section>
        <img className='pokemon-id-img' src={dataPokemon?.sprites.other["official-artwork"].front_default} alt="" />
        <h3 className='pokemon-id-id'># {dataPokemon?.id}</h3>
        <h2 className='pokemon-id-name'>{dataPokemon?.name}</h2>
        <section className='pokemon-id-features'>
          <div className='pokemon-id-feature'>
          <p className='pokemon-id-feature-name'>Weight</p>
          <p className='pokemon-id-feature-value'>{dataPokemon?.weight}</p>
          </div>
          <div className='pokemon-id-feature'>
          <p className='pokemon-id-feature-name'>Height</p>
          <p className='pokemon-id-feature-value'>{dataPokemon?.height}</p>
          </div>
          </section>
        <section className='pokemon-id-info'>
          <div className='pokemon-id-info-container'>
            <h4 className='pokemon-id-info-title'>Types</h4>
            <div className='pokemon-id-info-data'>
            {
              dataPokemon?.types.map(type => <p className=
              {`pokemon-id-info-value bg-${type.type.name}`} key={type.type.name}>
                {type.type.name}</p>)
            }
            </div>
          </div>
          <div className='pokemon-id-info-container'>
          <h4 className='pokemon-id-info-title'>Skills</h4>
          <div className='pokemon-id-info-data'>
            {
              dataPokemon?.abilities.map(ability => <p 
                className='pokemon-id-info-value' key={ability.ability.url}>
              {ability.ability.name}</p>)
            }
            </div>
            </div>
        </section>
        <section className='pokemon-id-stats'>
          <h3 className='pokemon-stats-title'>Stats</h3>
          <div className='pokemon-stats-container'>

            {
              dataPokemon?.stats.map(stat => (
                <div className='pokemon-id-stat'>
                <div className='pokemon-id-stat-header'>
                  <p className='pokemon-id-stat-name'>{stat.stat.name}</p>
                  <p className='pokemon-id-stat-value'>{stat.base_stat}/150</p>
                </div>
                <div className='pokemon-id-stat-bar'>
                  <div style={{width: getPercentBarProgress(stat.base_stat)}} className='pokemon-id-stat-barProgress'></div>
                </div>
                </div>
              ))
            }
          </div>
        </section>
      </section>
    </main>
  )
}

export default Pokemon