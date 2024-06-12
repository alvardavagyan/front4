export const Album = ({ name, year,children }) => {
    return <div className="album">
        <h3> {name} </h3>
        <p> released in {year} </p>
        {children}
    </div>
}