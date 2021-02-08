let ListElement = ({listElement}) => {

    return (
        <>
            <input type='checkbox' checked='checked' />
            <p>     {listElement.name}</p>
            <p >     {listElement.id}</p>
        </>
    )

}

export default ListElement;