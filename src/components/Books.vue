<template>
     <div class="col-md-12 text-center">
         <h3 class="">Sách của tôi</h3>
     </div>
     <div class="col-md-12 text-center">
       <div class="mb-4 col-md-12 ">
            <div class="overflow-auto" v-if="!books.length"> Không có dữ liệu </div> 
            <div class="overflow-auto" v-else >
            <table class="table table-hover mb-4 sm-12">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên</th>
                <th scope="col">Mô tả</th>
                <th scope="col">Sửa/Xóa</th>
              </tr>
            </thead>
            <tbody>
            <tr :key="book.id" v-for="(book,index)  in books">
                <BookItem v-bind:index="index" v-bind:book="book"  v-on:edit-book-item="editBookMethod" v-on:del-book-item="delBookMethod" />
            </tr>
           </tbody>
          </table>
        </div>
     </div>

 </div>

   
        

</template>

<script>
    import BookItem from "@/components/BookItem.vue";
    export default {
        name: "Books",
        props: ["books"],
        components: {
            BookItem
        },
        methods: {
           delBookMethod(id){
                //send to parent
                this.$emit('del-book-event', id);
           },
           editBookMethod(id){
                //send to parent (App.vue)
                this.$emit('edit-book-event', id)
            }
        }
    }
</script>


