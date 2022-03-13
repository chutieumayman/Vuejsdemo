<template>
    <div class="row g-2 justify-content-center">
        <AddBookItem v-on:add-book-event="addBookItem" v-on:edit-book-event="editBookItemEvent" v-bind:editBook="editBook"/>
            <div>
                <Books v-bind:books="books" v-on:del-book-event="deleteBookItem" v-on:edit-book-event="editBookItem" />
            </div>
    </div>
</template>
<script>
import Books from "@/components/Books.vue";
import AddBookItem from "@/components/AddBookItem.vue";
export default {
  name: 'crud',
  components: {
    Books,
    AddBookItem
  },
  data () {
    return {
      books: [],
      editBook: {
        title: '',
        description: '',
        id: ''
      }
    }
  },
  methods: {
    addBookItem(newBook){
        this.books = [...this.books, newBook];
    },
    deleteBookItem(id){
      this.books = this.books.filter(book => book.id !== id);
    },
    editBookItem(id){
      let objIndex = this.books.findIndex(obj=> obj.id === id);
      this.editBook.title = this.books[objIndex].title;
      this.editBook.description = this.books[objIndex].description;
      this.editBook.id = id;
    },
    editBookItemEvent(bookItem){
      //find the index of this id's object
      let objIndex = this.books.findIndex(obj => obj.id === bookItem.id)
      //update the item
      this.books[objIndex].title = bookItem.title;
      this.books[objIndex].description = bookItem.description;
    }
  },
  watch: {
    books: {
      handler() {
        localStorage.setItem('books',JSON.stringify(this.books))
      },
      deep: true
    }
  },
  mounted() {
    if (localStorage.getItem("books")){
      this.books = JSON.parse(localStorage.getItem("books"))
    }
  }
}
</script>
