import { Song } from "./Song.jsx"
export const Songlist=({items,onDelete,addToPlayList})=>{
return <div>
    <h3> SongList</h3>
    {
        items.map(elm=><Song key={elm.id} {...elm} onDelete={onDelete} 
            addToPlayList={() => addToPlayList(elm.id)}/>)
    }
</div>
}