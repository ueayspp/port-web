<template>
  <header>
    <nav class="mx-20 my-3">
      <div class="container flex justify-between">
        <a class="text-3xl" href=""><span>DearDiary.</span></a>
        <div>
          <ul class="flex flex-row gap-10">
            <li><a class="text-xl font-medium hover:text-emerald-700" href="">Features</a></li>
            <li><a class="text-xl font-medium hover:text-emerald-700" href="">Prices</a></li>
            <li><a class="text-xl font-medium hover:text-emerald-700" href="">About</a></li>
            <li><a class="text-xl font-medium hover:text-emerald-700" href="">Reviews</a></li>
            <li><a class="text-xl font-medium hover:text-emerald-700" href="">Contacts</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <body>
    <div class="flex mx-20 h-screen bg-gradient-to-r from-green-200 to-blue-300 rounded-3xl pb-10">
      <div class="w-1/2">
        <h1 class="text-6xl text-start font-semibold pl-28 pt-52 pb-10">
          Take a note everywhere with DearDiary
        </h1>
        <p class="text-2xl text-start pl-28 pb-14 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium fusce id.
        </p>
        <div class="flex justify-content-start pl-28">
          <button class="text-2xl text-white font-semibold bg-emerald-500 px-10 py-5 rounded-lg">
            Download
          </button>
        </div>
      </div>
      <div class="w-1/2">
        <div class="pr-16 pt-36 pb-10">
          <img src="@/assets/diary.png" alt="" />
        </div>
      </div>
    </div>
  </body>
  <footer>
    <div class="mx-20 my-3">footer</div>
  </footer>
</template>
