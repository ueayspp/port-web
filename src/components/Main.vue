<template>
  <nav class="text-3xl font-bold">To-do list</nav>
  <div class="flex flex-col items-center">
    <table class="table auto">
      <thead>
        <tr>
          <th>Status</th>
          <th>Title</th>
          <th>Date Created</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>Hello Vue</td>
          <td>{{ globDate() }}</td>
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
          <td></td>
          <td>Hello React</td>
          <td>{{ globDate() }}</td>
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
          <td></td>
          <td>Hello Angular</td>
          <td>{{ globDate() }}</td>
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

<script>
export default {
  data() {
    return {
      date: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    }
  },
  methods: {
    globDate() {
      return `${this.date}/${this.month}/${this.year}`
    },
  },
}
</script>
