<template>
    <nav class="text-3xl font-bold">Dear Diary</nav>
    <div class="flex flex-col items-center">
        <form class="row m-auto px-3 py-3 bg-gray-100 rounded-md">
            <h6 class="text-2xl font-bold mb-5">Log in</h6>
            <label class="block">
                <input type="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="username"> 
            </label>  
            <label class="block">
                <input type="password" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="password"> 
            </label>
            <div class="col-12 p-3">
                <button class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full">log in</button>  
            </div>       
        </form>
    </div>
</template>
