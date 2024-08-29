import React from 'react'
import './Definitions.css'

const Definitions = ({word,meaning,lightMode}) => {
  return (
    <div className='meanings'>
    {
        meaning[0] && word && (
            <audio src={meaning[0].phonetics[0] &&meaning[0].phonetics[0].audio } controls style={{backgroundColor:'#fff',borderRadius:10}}>

            </audio>
        )
    }
        {
            word ===""? (
                <span className='subTitle'>start by typing a word</span>
            ):(
                meaning.map((mean)=> (
                    mean.meanings.map((items)=> 
                    (
                        items.definitions.map((def)=>(
                            <div className='singleMean' style={{backgroundColor:lightMode? "white":"#3b5360",color:lightMode? "black":"white"}}>
                            <b>{def.definition}</b>
                            <hr style={{backgroundColor:"black",width:"100%"}} />
                            {
                                def.example && (
                                    <span>
                                    <b>Example:</b>
                                    {def.example}
                                    </span>
                                )
                            }
                            {def.synonyms && (
                                <span>
                                    <b>Synonyms: </b>
                                    {def.synonyms.map((s)=> `${s},`)}
                                </span>
                            )}
                            </div>
                        ))
                    )
                    )
                ))
            )}
    </div>
  )
}

export default Definitions