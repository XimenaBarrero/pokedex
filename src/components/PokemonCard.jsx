import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/PokemonCard.css"


const PokemonCard = ({pokemon}) => {
    const [dataPokemon, setDataPokemon] = useState()

    const navigate = useNavigate()

    const types = dataPokemon?.types.map(type => type.type.name).join(" / ")

    const handleClickPokemon = () => {
      navigate(`/pokedex/${dataPokemon?.id}`)
    }

    useEffect(() => {
      axios.get(pokemon.url)
      .then(res => setDataPokemon(res.data))
      .catch(err => console.log(err))
    }, [])

    
  return (
    <article onClick={handleClickPokemon} className={ `pokeCard border-${dataPokemon?.types[0].type.name} `}>
        <section className={`pokeCard-header border-lg-${dataPokemon?.types[0].type.name}`}></section>
        <section className='pokeCard-content'>
            <img className='pokeCard-img' src={dataPokemon?.sprites.other["official-artwork"].front_default}  alt="pokecard-img" />
            <h3 className={`pokeCard-name font-color-${dataPokemon?.types[0].type.name}`}>{pokemon.name}</h3>
            <p className='pokeCard-types'>{types}</p>
            <p className='pokeCard-types-title'>Type</p>
            <hr className='separation-line'/>
            <section className='pokeCard-stats'>
                {
                    dataPokemon?.stats.map(stat => (
                        <div key={stat.stat.name} className='pokeCard-stat'>
                        <p className='pokeCard-stat-name'>{stat.stat.name}</p>
                        <p className={`pokeCard-stat-value font-color-${dataPokemon?.types[0].type.name}`}>{stat.base_stat}</p>
                    </div>
                    ))
                }
            </section>
        </section>
    </article>
  )
}

export default PokemonCard