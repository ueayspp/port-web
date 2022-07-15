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
          <div v-for="diary in diarys" :key="diary.id">
            <div class="font-semibold text-green-700 px-5 pt-5">
              {{ dateCreated() }}
            </div>
            <div class="font-bold px-5 pt-2 pb-3">
              {{ diary.title }}
            </div>
            <div class="font-medium px-5">
              {{ diary.story }}
            </div>
            <div class="flex mx-5 py-5 gap-1 justify-end">
              <!-- <button class="text-sm text-white font-medium px-3 py-2">
                <img src="@/assets/pencil.svg" alt="Edit diary" />
              </button>
              <button class="text-sm text-white font-medium px-3 py-2">
                <img src="@/assets/trash.svg" alt="Delete diary" />
              </button> -->
            </div>
          </div>
        </div>
      </section>

      <section class="w-1/2 bg-white px-20 pt-10 text-start space-y-4">
        <form action="">
          <div class="">
            <label class="font-bold">Title</label><br />
            <input
              v-model.trim="newTitle"
              class="w-full rounded-md border-none"
              placeholder="  Add title to this entry"
            />
          </div>

          <div class="py-4">
            <label class="font-bold">Story</label><br />
            <textarea
              v-model.trim="newStory"
              class="w-full h-56 resize-none rounded-md border-none"
              placeholder="Write something"
            ></textarea>
          </div>

          <button
            class="font-bold text-white my-5 px-8 py-2 bg-green-500 hover:bg-green-700 rounded-full"
            @click.prevent="addDiary"
          >
            submit
          </button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import { db } from '@/main'
import { collection, addDoc, onSnapshot } from 'firebase/firestore'

export default {
  data() {
    return {
      newTitle: '',
      newStory: '',
      diarys: [],
      date: new Date(),
    }
  },
  created() {
    this.updateDiary()
  },
  methods: {
    dateCreated() {
      return `${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()}`
    },
    async addDiary() {
      const colRef = collection(db, 'diarys')

      const dataObj = {
        title: this.newTitle,
        story: this.newStory,
      }

      const docRef = await addDoc(colRef, dataObj)
      console.log('Document written with ID: ', docRef.id)

      this.newTitle = this.newStory = ''
    },
    async updateDiary() {
      const colRef = collection(db, 'diarys')

      onSnapshot(colRef, (snap) => {
        snap.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data())
          this.diarys.push(doc.data())
        })
      })
    },
  },
}
</script>
