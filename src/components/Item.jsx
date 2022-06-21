export const Item = (props) => {
    return (
        <main>
            <img src={"./assets/" + props.el.img}/>
            <h2>{props.el.title}</h2>
            <p>{props.el.color}</p>
            <p>{props.el.desc}</p>
            <b>{props.el.price}$</b>
            <div className="addToCart">+</div>
        </main>
    )
}