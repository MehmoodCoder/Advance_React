import useTheme from "../Context/Theme";

export default function Card() {
  const { ThemeMode, LightTheme, DarkTheme } = useTheme();

  const OnChangeBtn = (e) => {
    const isChecked = e.currentTarget.checked;
    if (isChecked) LightTheme();
    else DarkTheme();
  };

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 dark:border-gray-700 dark:bg-gray-800">
      
      <div className="absolute top-4 right-4 z-10 rounded-lg bg-white/80 p-2 backdrop-blur-sm dark:bg-gray-800/80">
        <label className="relative inline-flex items-center cursor-pointer select-none">
          <input
            type="checkbox"
            className="sr-only peer"
            onChange={OnChangeBtn}
            checked={ThemeMode === "light"}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-600 peer-focus:ring-2 peer-focus:ring-blue-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
          <span className="ml-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
            {ThemeMode === "light" ? "☀️ Light" : "🌙 Dark"}
          </span>
        </label>
      </div>

      <div className="group overflow-hidden bg-gray-50 dark:bg-gray-900">
        <img
          className="h-64 w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&w=500&q=80"
          alt="Premium Smartwatch"
        />
      </div>

      <div className="px-5 pb-5 pt-4">
        <a href="/">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 transition-colors duration-300 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
            Apple Watch Series 9 GPS, Aluminium Case, Midnight Sport
          </h5>
        </a>

        <div className="flex items-center mt-2.5 mb-5">
          {[...Array(4)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <svg className="w-4 h-4 text-gray-300 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            4.0
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-extrabold text-gray-900 transition-colors duration-300 dark:text-white">
            $599
          </span>
          <a
            href="/"
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-md transition-all hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}