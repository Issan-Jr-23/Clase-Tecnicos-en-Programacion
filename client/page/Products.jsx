import cheetos from "../public/chetos.png"

function Products() {
    return(
        <div>
            <div className="ubicacion">
                <p>Km 5 Via Maicao | Lunes a Viernes de 7 Am a 7 Pm </p>

            </div>
            <section>
            </section>
            <h1>Cafeteria</h1>
            <div className="section-caf-pan">
                <section className="section--cheetos">
                    <article className="article--cheetos">
                        <img src={cheetos} alt="" />
                        <p>Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit.</p>
                        <span>$2.800 Cop</span>
                        <div className="cont--btn-productos">
                        <button className="btn-cheetos-comprar">Comprar</button>
                        <button className="btn-cheetos-agregar">Agregar al carrito</button>
                        </div>
                    </article>
                    <article className="article--cheetos">
                        <img src={cheetos} alt="" />
                        <p>Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit.</p>
                        <span>$2.800 Cop</span>
                        <div className="cont--btn-productos">
                        <button className="btn-cheetos-comprar">Comprar</button>
                        <button className="btn-cheetos-agregar">Agregar al carrito</button>
                        </div>
                    </article>
                    <article className="article--cheetos">
                        <img src={cheetos} alt="" />
                        <p>Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit.</p>
                        <span>$2.800 Cop</span>
                        <div className="cont--btn-productos">
                        <button className="btn-cheetos-comprar">Comprar</button>
                        <button className="btn-cheetos-agregar">Agregar al carrito</button>
                        </div>
                    </article>
                    <article className="article--cheetos">
                        <img src={cheetos} alt="" />
                        <p>Lorem ipsum dolor <br /> sit amet consectetur adipisicing elit.</p>
                        <span>$2.800 Cop</span>
                        <div className="cont--btn-productos">
                        <button className="btn-cheetos-comprar">Comprar</button>
                        <button className="btn-cheetos-agregar">Agregar al carrito</button>
                        </div>
                    </article>
                    
                </section>
            </div>
        </div>
    )
}

export default Products