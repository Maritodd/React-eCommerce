export const Item = (props) => {
    return (
        <main className="item-container">
                <img className="item-img" src={"./assets/" + props.el.img}/>
                <h2 className="item-name">{props.el.title}</h2>
                <p className="item-color">{props.el.color}</p>
                <p className="item-desc">{props.el.desc}</p>
                <b className="item-price">{props.el.price}$</b>
                <div className="addToCart">+</div>
        </main>
    )
}