<template>
  <nav class="text-3xl font-bold">Dear Diary</nav>
  <div class="flex flex-col items-center">
    <table class="table auto">
      <thead>
        <tr>
          <th>Title</th>
          <th>Date Created</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hello Vue</td>
          <td>01/07/2022</td>
          <td>
            <button
              class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-full"
            >
              edit
            </button>
          </td>
          <td>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-full">
              delete
            </button>
          </td>
        </tr>
        <tr>
          <td>Hello React</td>
          <td>01/07/2022</td>
          <td>
            <button
              class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-full"
            >
              edit
            </button>
          </td>
          <td>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-full">
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
