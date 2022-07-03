<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-tr from-green-200 to-blue-300"
  >
    <form class="space-y-8 px-32 py-28 bg-white rounded-md" action="#">
      <h5 class="text-3xl mb-10 font-bold text-gray-900">Welcome!</h5>
      <div>
        <label for="email" class="block mb-2 text-md text-start font-medium text-gray-900"
          >Your email</label
        >
        <input
          type="email"
          name="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@hotmail.com"
        />
      </div>
      <div>
        <label for="password" class="block mb-2 text-md text-start font-medium text-gray-900"
          >Your password</label
        >
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div class="flex items-start">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
            />
          </div>
          <label for="remember" class="ml-2 text-sm font-medium text-gray-900">Remember me</label>
        </div>
        <a href="#" class="ml-auto text-sm text-blue-700 hover:underline">Forgot Password?</a>
      </div>
      <button
        type="submit"
        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Login to your account
      </button>
      <div class="text-sm font-medium text-gray-500">
        Not registered?
        <a href="#" class="text-blue-700 hover:underline">Create account</a>
      </div>
    </form>
  </div>
</template>
