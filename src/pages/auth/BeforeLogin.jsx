import logo from '../../../public/gfx/naa world2-01 1.svg';
import mainImage from '../../../public/gfx/4 1.svg';

export default function BeforeLogin({ setIsLoginPage }) {

    const navigateToLogin = () => {
        setIsLoginPage(true);  
    };

    return (
        <div className="min-h-screen   flex justify-between items-center bg-white   ">
            <header className="flex justify-between   flex-col    m-8">
                <img
                    src={logo}
                    alt="NAA World Logo"
                    width={200}
                    height={200}
                    className="rounded-full"
                />
                <h1 className="text-3xl font-bold text-pink-500">NAA World</h1>
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4">Our purpose at NAA World</h2>
                    <p className="text-gray-700 mb-6">
                        Through arts, music, crafts, media, education, cultural exchange, therapeutic programs,
                        religious awareness, and community engagement, we empower people of all ages and abilities.
                    </p>
                    <button
                        className="mt-8 px-8 py-2 border-2 border-pink-500 text-pink-500 rounded-full hover:bg-pink-50 transition-colors"
                        onClick={navigateToLogin}
                    >
                        Login
                    </button>
                </div>
            </header>

            <main className="flex flex-col md:flex-row items-center w-1/2 gap-8">
               

                <div className="md:w-1/2 bg-pink-200 rounded-3xl p-8 text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        Empowering <span className="text-pink-500">Lives</span>,
                    </h2>
                    <p className="text-2xl font-semibold mb-8">
                        One Heartbeat at a Time.
                    </p>
                    <img
                        src={mainImage}
                        alt="Diverse faces illustration"
                        width={400}
                        height={300}
                        className="mx-auto rounded-2xl"
                    />
                </div>
            </main>
        </div>
    );
}
