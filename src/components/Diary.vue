<template>
  <div class="h-screen bg-green-100">
    <h1 class="text-3xl font-bold py-16">Tell us a story</h1>
    <div class="flex h-128 mx-40 rounded-md">
      <section class="w-1/2 bg-gradient-to-br from-green-200 to-blue-200 px-20 pt-10 text-start">
        <h1 class="text-lg font-bold">Diary Entries</h1>
        <p class="font-medium">by date</p>
        <br />
        <!-- <div class="py-5 h-32 bg-white">
          <h1 class="text-lg font-semibold">{{ titleList[0] }}</h1>
          <p>{{ storyList[0] }}</p>
        </div> -->
        <div class="bg-white rounded-lg">
          <div v-for="item in diaryList" :key="item.id">
            <div class="font-medium text-green-700 px-5 pt-5">
              {{ dateCreated() }}
            </div>
            <div class="font-semibold px-5 pt-2 pb-3">
              {{ item.title }}
            </div>
            <div class="flex mx-5 py-5 gap-1 justify-end">
              <button
                class="text-sm text-blue-500 font-medium px-3 py-2 border border-blue-500 rounded-md"
              >
                View
              </button>
              <button class="text-sm text-white font-medium px-3 py-2 bg-blue-500 rounded-md">
                Edit
              </button>
              <button class="text-sm text-white font-medium px-3 py-2 bg-red-500 rounded-md">
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="w-1/2 bg-white px-20 pt-10 text-start space-y-4">
        <form action="">
          <div class="">
            <label class="font-bold">Title</label><br />
            <input
              v-model.trim="title"
              class="w-full rounded-md border-none"
              placeholder="  Add title to this entry"
            />
          </div>

          <div class="py-4">
            <label class="font-bold">Story</label><br />
            <textarea
              v-model.trim="story"
              class="w-full h-56 resize-none rounded-md border-none"
              placeholder="Write something"
            ></textarea>
          </div>

          <button
            class="font-bold text-white my-5 px-8 py-2 bg-green-500 hover:bg-green-700 rounded-full"
            @click.prevent="create"
          >
            submit
          </button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      story: '',
      diaryList: [],
      date: new Date(),
    }
  },
  methods: {
    dateCreated() {
      return `${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`
    },
    create() {
      if (this.title && this.story) {
        this.diaryList.push({
          title: this.title,
          story: this.story,
        })
        console.log(this.diaryList)
        this.title = this.story = ''
      }
    },
  },
}
</script>
