import CrossIcon from './components/CrossIcon';
import MoonIcon from "./components/MoonIcon.jsx";
const App = () => {
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')]
        bg-contain bg-no-repeat bg-gray-300 min-h-screen">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
                        Todo
                    </h1>
                    <button>
                        <MoonIcon className='fill-red-400'/>
                    </button>
                </div>
                <form className='mt-8 flex gap-4 overflow-hidden rounded-md bg-white
                py-4 items-center px-4'>
                    <span className={'inline-block h-5 w-5 rounded-full border-2'}></span>
                    <input className='w-full text-gray-500 outline-none' type="text" placeholder="Create a new todo..." />
                </form>
            </header>
            <main className="container mx-auto mt-8 px-4">
                <div className='bg-white rounded-md [&>article]:p-4'>
                    <article className='flex gap-4 border-b-gray-500 border-b'>
                        <button className={'flex-none inline-block h-5 w-5 rounded-full border-2'}></button>
                        <p className={'text-gray-600 grow'}>
                            complete online JavaScript course in blue
                        </p>
                        <button className='flex-none'>
                            <CrossIcon/>
                        </button>
                    </article>

                    <section className='px-4 py-4 flex justify-between'>
                        <span>5 items left</span>
                        <button>Clear Completed</button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto px-4 mt-8">
                <div className='bg-white p-4 rounded-md flex justify-center gap-4'>
                    <button className='text-blue-500'>All</button>
                    <button className='hover:text-blue-500'>Active</button>
                    <button className='hover:text-blue-500'>Completed</button>
                </div>
            </section>

            <section className="text-center container mx-auto px-4 mt-8">
                <p>Drag and drop to reorder list</p>
            </section>
        </div>
    );
};
export default App;
