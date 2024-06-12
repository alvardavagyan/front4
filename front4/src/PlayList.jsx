import { Song } from "./Song.jsx";
export const PlayList=({items,onDelete,songSwap})=>{
    return (
    <div>
    <h1> PlayList {items.length}</h1>
    {items.map((elm,index)=> (
    <Song {...elm} key={elm.id} inPlaylist={true}
    onDelete={onDelete} songSwap={songSwap} />

    ))}
    </div>

)
}