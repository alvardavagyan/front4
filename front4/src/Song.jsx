export const Song = ({id,title,artist,onDelete,addToPlayList,duration,songSwap,inPlaylist}) => {
    return (
    <div className="song">
        <p>title</p>
        <strong>by {artist }</strong>
        <small> {duration} mins</small>
        <button onClick={()=>onDelete(id)}> delete</button>
       {!inPlaylist && <button onClick={()=>addToPlayList(id)}> move</button>
       } {
    inPlaylist && <button onClick={()=>songSwap(id)}> move down</button>}

    </div>
    )
}
