import { useEffect, useState } from "react";

const NavContainer = () => {
  const recomendations = [
    { keywords: "", title: "Robux" },
    { keywords: "", title: "Diamond Lock" },
    { keywords: "", title: "Akun ML" },
    { keywords: "", title: "Weekly Pass ML" },

  ];
  const NAV_RIGHT = [
    {
      path: "",
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      path: "",
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
      ),
    },
    {
      path: "",
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
        </svg>
      ),
    },
  ];
  const [fullLogo, setFullLogo] = useState(true);
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 800px)");
    const handleResize = () => {
      if (mobile.matches === true) {
        setFullLogo(false);
      } else {
        setFullLogo(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [fullLogo]);
  return (
    <nav className="bg-white w-full flex justify-between border-b border-main-darkgray items-start px-2 py-4 lg:px-[18%] lg:py-4 lg:border-none">
      <img
        className="w-10 h-10 lg:w-[100px] lg:h-[30px]"
        src={
          fullLogo === true
            ? "https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fitemku%2Fitemku-logo-color-transparent.png&w=140&q=75"
            : " https://imgop.itemku.com/?url=https%3A%2F%2Ffiles.itemku.com%2Flogo%2Fitemku%2Fitemku-logo-transparent.png&w=48&q=75"
        }
        alt="big-logo"
      ></img>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 w-60 lg:w-[720px]">
          <div className="hidden lg:flex gap-2 items-center text-gray-600 lg:text-sm cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <p>Kategori</p>
          </div>
          <div className="relative h-10 w-full lg:h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(71 71 71)"
              className="w-6 h-6 absolute top-2 left-3 lg:top-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              className="w-full py-2 lg:py-1 rounded-md lg:rounded border border-main-blue px-10"
              placeholder="Coba cari Game"
            />
          </div>
        </div>
        <div className="hidden lg:flex gap-3 text-[12px] text-main-fontlightgrey ml-24">
          {recomendations?.map(({ title, keywords }, idx) => (
            <p className="bg-gray-100 px-1 rounded-md" key={idx}>
              {title}
            </p>
          ))}
        </div>
      </div>
      <div className="flex gap-3 h-[40px] items-center lg:hidden">
        {NAV_RIGHT?.map(({ path, icons }, idx) => (
          <div key={idx}>{icons}</div>
        ))}
      </div>
      <div className="hidden lg:flex gap-8 h-[40px] items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
        </svg>
        <div className="flex gap-2">
         <button className="bg-blue-100 px-2 py-1 rounded text-main-blue border border-main-blue">Daftar</button>
         <button className="bg-blue-500 px-2 py-1 rounded text-white border border-main-blue">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default NavContainer;
