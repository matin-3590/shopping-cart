import { Link } from "react-router"

const Home = () => {
    return (
        <section className="max-w-[1300px] mx-auto px-4 py-4">
            <div className="mt-30 text-center lg:text-left lg:w-[50%]">
                <h3 className="text-2xl lg:text-3xl font-medium mb-4">Shopping Cart - MTProg</h3>
                <p className="text-gray-900 lg:text-[17px] leading-8 mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, veritatis eos, tempore enim nam ratione nesciunt veniam praesentium, consectetur ut magni asperiores. Dolores, id! Consectetur, vel? Consequatur deserunt adipisci cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil recusandae, quasi provident veritatis suscipit cum, a atque, modi architecto explicabo temporibus laboriosam quidem? Iste sit id aspernatur. Excepturi, maiores tempora?</p>
                <Link to='/products' className="btn btn-neutral mt-4 rounded-md hover:opacity-85 transition-colors duration-300">Products</Link>
            </div>
        </section>
    )
}

export default Home