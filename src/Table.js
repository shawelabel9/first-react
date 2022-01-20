const TableHeader = ()=>{
    return(
        <thead>
            <tr>
                <th>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone Number</td>
                </th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map( (row,index) => {
        return (
            <tr key = {index}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.phonenumber}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>

}

const Table = (props) => {
    const {characterData, removeCharacter} = props
    return(
        <table>
            <TableHeader />
            <TableBody characterData= {characterData} removeCharacter = {removeCharacter} />
        </table>
    )
}

export default Table