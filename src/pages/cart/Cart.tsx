import { FiTrash2, FiXCircle, FiPlus, FiMinus } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { clearCart, deleteProduct, updateProduct } from '../../app/cartSlice';
import { Link } from 'react-router';

const Cart = () => {

    const dispatch = useDispatch()
    const { items } = useSelector((state: RootState) => state.cart);

    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    return (
        <>
            {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-40 px-4 text-center">
                    {/* آیکون انیمیشنی */}
                    <div className="relative mb-8 animate-bounce">
                        <svg className="w-32 h-32 text-gray-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>

                        {/* نماد خط خورده */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <svg className="w-20 h-20 text-red-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* متن و دکمه CTA */}
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                        Your shopping cart is empty!
                    </h3>

                    <p className="text-gray-600 mb-8">
                        You haven't added any products to your cart yet. Let's start shopping!
                    </p>

                    {/* دکمه بازگشت به فروشگاه */}
                    <Link to='/products' className="bg-zinc-500 hover:bg-zinc-600 cursor-pointer text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                        <svg
                            className="w-5 h-5 inline-block mr-2 -mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                            />
                        </svg>
                        Return to the Store
                    </Link>

                    {/* افکت دکوراتیو */}
                    <div className="mt-12 space-y-2">
                        <div className="h-1 w-24 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mx-auto animate-pulse"></div>
                        <div className="h-1 w-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mx-auto animate-pulse delay-100"></div>
                    </div>
                </div>
            ) :
                <section className="min-h-screen bg-gray-100">
                    <div className="max-w-[1300px] mx-auto py-30 lg:py-35 px-4">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            {/* Table Header */}
                            <div className="bg-gradient-to-r from-zinc-500 to-stone-700 px-6 py-4">
                                <h2 className="text-2xl font-bold text-white">Shopping Cart {items.length} Items</h2>
                            </div>

                            {/* Desktop Table */}
                            <div className="hidden md:block">
                                <table className="w-full">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Product</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
                                            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">Quantity</th>
                                            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Subtotal</th>
                                            <th className="px-6 py-4"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {items.map(item => (
                                            <tr key={item.id}>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center">
                                                        <img className="w-16 h-16 object-cover rounded-lg"
                                                            src={item.image}
                                                            alt={item.title}
                                                        />
                                                        <div className="ml-4">
                                                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                                                            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-gray-700">${item.price}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center justify-center space-x-3">
                                                        <button onClick={() => dispatch(updateProduct({
                                                            id: item.id,
                                                            quantity: item.quantity - 1
                                                        }))} className="p-2 cursor-pointer rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
                                                            <FiMinus className="w-4 h-4" />
                                                        </button>

                                                        <input value={item.quantity} onChange={(e) => dispatch(updateProduct({
                                                            id: item.id,
                                                            quantity: +e.target.value
                                                        }))} className="w-12 text-center px-2 py-1 border rounded-lg" />

                                                        <button onClick={() => dispatch(updateProduct({
                                                            id: item.id,
                                                            quantity: item.quantity + 1
                                                        }))} className="p-2 cursor-pointer rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
                                                            <FiPlus className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-right font-medium text-gray-900">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button onClick={() => dispatch(deleteProduct({
                                                        id: item.id,
                                                    }))} className="text-red-500 cursor-pointer hover:text-red-700 transition-colors">
                                                        <FiXCircle className="w-5 h-5" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>


                            {/* Mobile View */}
                            <div className="md:hidden">
                                <div className="p-6 border-b border-gray-400/50 space-y-14">
                                    {items.map(item => (
                                        <div key={item.id} className="flex border-b border-gray-400/50 last:border-b-0 pb-8 items-start">
                                            <img className="w-20 h-auto object-cover rounded-lg"
                                                src={item.image}
                                                alt={item.title}
                                            />
                                            <div className="ml-4 flex-1">
                                                <h3 className="font-semibold text-[17px] text-gray-800">{item.title}</h3>
                                                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                                                <div className="mt-5 flex items-center justify-between">
                                                    <span className="font-medium text-gray-700">${item.price}</span>
                                                    <button onClick={() => dispatch(deleteProduct({
                                                        id: item.id,
                                                    }))} className="text-red-500 cursor-pointer hover:text-red-700">
                                                        <FiXCircle className="w-5 h-5" />
                                                    </button>
                                                </div>
                                                <div className="mt-5 flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <button onClick={() => dispatch(updateProduct({
                                                            id: item.id,
                                                            quantity: item.quantity - 1
                                                        }))} className="p-2 rounded-lg border border-gray-300 hover:bg-gray-200 cursor-pointer">
                                                            <FiMinus className="w-4 h-4" />
                                                        </button>

                                                        <input value={item.quantity} onChange={(e) => dispatch(updateProduct({
                                                            id: item.id,
                                                            quantity: +e.target.value
                                                        }))} className="w-12 text-center px-2 py-1 border border-gray-400 rounded-lg" />

                                                        <button onClick={() => dispatch(updateProduct({
                                                            id: item.id,
                                                            quantity: item.quantity + 1
                                                        }))} className="p-2 rounded-lg border border-gray-300 hover:bg-gray-200 cursor-pointer">
                                                            <FiPlus className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                    <span className="font-medium">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cart Summary */}
                            <div className="px-6 py-6 bg-gray-100">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
                                    <div className='flex items-center gap-x-20'>
                                        <div>
                                            <button onClick={() => dispatch(clearCart())} className="btn btn-active lg:btn-lg flex items-center hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
                                                <FiTrash2 className="w-5 h-auto" />
                                                Clear Entire Cart
                                            </button>
                                        </div>
                                        {/* Mobile Total */}
                                        <div className="text-2xl block md:hidden font-bold text-gray-800 min-w-[180px] text-right">
                                            Total: ${total.toLocaleString()}
                                        </div>
                                    </div>

                                    {/* Desktop Total */}
                                    <div className="space-y-4 text-right flex-1 md:max-w-[400px]">
                                        <div className="text-2xl hidden md:block font-bold text-gray-800 truncate">
                                            Total: ${total.toLocaleString(undefined, {
                                                maximumFractionDigits: 2,
                                                minimumFractionDigits: 2
                                            })}
                                        </div>
                                        <p className="text-sm text-gray-600">Shipping & taxes calculated at checkout</p>
                                        <Link to='/products' className="inline-block w-full cursor-pointer md:w-auto px-11 py-3 bg-gradient-to-r from-zinc-500 to-stone-700 hover:from-zinc-700 hover:to-stone-500 text-white rounded-lg font-semibold shadow-md transition-all duration-200 whitespace-nowrap">
                                            Proceed to Checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    );
};

export default Cart;