import React from 'react'

const List = (peopls) => {
    const {people} =peopls 
  return (
    <div>
        {people.map((person)=>{
            const {id, name, image, age} = person
            return(
            <article className="person" key={person.id}>
                <img src={person.image} alt="profitle image" />
                <div>
                    <h4>{name}</h4>
                    <p>{age} years</p>
                </div>
            </article>
            );
        })}
    </div>
  )
}

export default List