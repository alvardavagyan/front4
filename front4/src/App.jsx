import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Song } from './Song'
import { Album } from './Album'
import { Songlist } from './Songlist'
import { PlayList } from './PlayList'

function App() {
  const [count, setCount] = useState(0)
  const [playList,setPlayList]=useState([])

const[songs,setSong]=useState([
        {id:101,title:"Hyps don't lie", artist:"Shakira"},
        {id:102,title:"Gohar", artist:"Saro Tovmasyan"},
        {id:103,title:"Loca", artist:"Shakira"},
        {id:104,title:"Chi kareli", artist:"Tata"},
      
      ])

      const songSwap=id=>{
        const index=playList.findIndex(song=>song.id===id)
        if(index<playList.length-1 && index>=0){
          const newPlayList = [...playList]
    ;[newPlayList[index], newPlayList[index + 1]] = [newPlayList[index + 1], newPlayList[index]]
    setPlayList(newPlayList)
        }
      }
   const addToPlayList =id=>{
    const songExists=playList.some(song => song.id === id)
    if(!songExists){
    const songToAdd = songs.find(song => song.id === id)
    if (songToAdd) {
      setPlayList([...playList, songToAdd]);
    }
    }
}
      const removeSong=id=>{
        setSong(songs.filter(x=>x.id!=id))
      }
  return (
    <>
    <div className="container">
      <div className="list">
      <Songlist
      items={songs}
      onDelete={removeSong}
      addToPlayList={addToPlayList}
      />
      </div>
      <div className="list">
      <PlayList
      items={playList}
      songSwap={songSwap}
      />
      
    </div>
    </div>
  
      
    </>
  )
}

export default App