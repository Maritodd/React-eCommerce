import {Item} from "./Item";

export const Items = (props) => {
    return (
        <main>
            {props.items.map(el => (
                <Item key={el.id} el={el}/>
                ))}
        </main>
    )
}