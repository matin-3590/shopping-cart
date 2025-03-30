import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/cartSlice";

type TProduct = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

const Products = () => {

    const dispatch = useDispatch()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => await axios.get('https://fakestoreapi.com/products?limit=6')
    })

    const products = data?.data


    const handleProductCart = (product: TProduct) => {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            image: product.image,
            quantity: 1
        }))
    }


    if (isLoading) return (
        <div className="flex mt-30 justify-center items-center">
            <span className="loading loading-dots text-gray-600 loading-xl"></span>
        </div>
    )

    if (isError) return (
        <div className="flex mt-30 justify-center items-center">
            <h2 className="text-2xl text-red-400 font-bold">{error.message}</h2>
        </div>
    )

    return (
        <section className="max-w-[1300px] mx-auto px-4 mt-30 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
                {products?.map((product: TProduct) => (
                    <div key={product.id} className="card w-[90%] h-auto mx-auto border border-zinc-300 shadow-2xl overflow-hidden">
                        <figure className="relative w-full pt-[100%] bg-zinc-200">
                            <div className="absolute inset-0 opacity-90 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>
                            <img
                                src={product.image}
                                alt={product.title}
                                className="absolute top-0 left-0 w-full h-full object-contain p-4 transition-all duration-300 hover:scale-105 mix-blend-multiply"
                            />
                        </figure>
                        <div className="card-body bg-zinc-200">
                            <div className="w-full h-[0.5px] bg-gray-400"></div>
                            <h2 className="font-medium text-2xl">{product.title}</h2>
                            <p className="text-gray-800 text-base">{product.description}</p>
                            <div className="w-full h-[1px] bg-gray-400 my-2"></div>
                            <div className="flex justify-between items-center">
                                <div className="card-actions justify-start">
                                    <button onClick={() => handleProductCart(product)} className="btn btn-accent">Add To Cart</button>
                                </div>
                                <span className="text-xl text-slate-700 font-medium">${product.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Products