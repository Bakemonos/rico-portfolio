

export default function NavBar(){

    const menu = [
        {id: 0, name: 'Home'},
        {id: 1, name: 'Services'},
        {id: 2, name: 'About'},
        {id: 3, name: 'Skills'},
        {id: 4, name: 'Portfolio'},
        {id: 5, name: 'Contact'},
    ]

    return(
        <>
            <div className="Header">
                <section>
                    <h1>rIco</h1>
                </section>
                <section>
                    <nav className="Nav">
                        <ul>
                            {menu.map((map)=> {
                                return <li key={map.id}>{map.name}</li>
                            })}
                        </ul>
                    </nav>
                </section>
            </div>
        </>
    )
}