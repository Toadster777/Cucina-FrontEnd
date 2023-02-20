import React from 'react'

 const SideMenu = () => {

//     // grab everything we need
// const btn = document.querySelector(".mobile-menu-button");
// const sidebar = document.querySelector(".sidebar");
// let isSidebarOpen = false;

// // add our event listener for the click
// btn.addEventListener("click", () => {
//   sidebar.classList.toggle("-translate-x-full");
// });

// // close sidebar if user clicks outside of the sidebar
// document.addEventListener("click", (event) => {
//   const isButtonClick = btn === event.target && btn.contains(event.target);
//   const isOutsideClick =
//     sidebar !== event.target && !sidebar.contains(event.target);

//   // bail out if sidebar isnt open
//   if (sidebar.classList.contains("-translate-x-full")) return;

//   // if the user clicks the button, then toggle the class
//   if (isButtonClick) {
//     console.log("does not contain");
//     sidebar.classList.toggle("-translate-x-full");
//     return;
//   }

//   // check to see if user clicks outside the sidebar
//   if (!isButtonClick && isOutsideClick) {
//     console.log("outside click");
//     sidebar.classList.add("-translate-x-full");
//     return;
//   }
// });



  return (
    <div className="relative min-h-screen md:flex">

  {/* <!-- sidebar --> */}
  <div className="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

    {/* <!-- logo --> */}
    <a href="#" className="text-white flex items-center space-x-2 px-4">
      <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
      <span className="text-2xl font-extrabold">Better Dev</span>
    </a>

    {/* <!-- nav --> */}
    <nav>
      <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Home
      </a>
      <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        About
      </a>
      <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Features
      </a>
      <a href="" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Pricing
      </a>
    </nav>
  </div>

  {/* <!-- content --> */}
  <div className="flex-1 p-10 text-2xl font-bold">
    content goes here
  </div>

</div>
  )
}
export default SideMenu
