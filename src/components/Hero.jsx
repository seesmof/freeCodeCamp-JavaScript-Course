import React from "react";

const Hero = () => {
  return (
    <header class="border-b-2 border-slate-700 pb-2">
      <div class="hidden sm:block">
        <h1 class="text-xl font-bold md:text-3xl">
          JavaScript Algorithms and Data Structures
        </h1>
      </div>

      <div class="flex flex-row items-center justify-between sm:hidden">
        <h1 class="text-xl font-bold">Course</h1>
        <div class="flex flex-row items-center gap-2 text-lg">
          <a href="./test.html">
            <i class="bi bi-github"></i>
          </a>
          <a href="#">
            <i class="bi bi-link-45deg"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
