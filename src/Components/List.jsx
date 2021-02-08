import ListElement from './ListElement';

let List = ({list}) =>{

    return (

        list.map(lists=> {
            return <ListElement key={lists.id} listElement={lists}/>
        })

    )

}

export default List;