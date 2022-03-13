<template>
        <div class="col-md-4">
            <form @submit="addBook" novalidate="true" >
            <div class="">
            <p v-if="errors.length">
            <b>Check lỗi:</b>
            <ul>
              <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
            </ul>
            </p>
          </div>
            <div class="">
            <label for="" class="form-label">{{ $t('namebook') }}</label>
             <input type="text" class="form-control w-100"  name="title" v-model="title" placeholder="Add Book">
          </div>
              <div class="">
            <label for="" class="form-label">Mô tả</label>
              <input type="text" class="form-control"  name="description" v-model="description" placeholder="Mô tả">
          </div>
            <div class="">
                <input type="submit" value="Thêm" class="btn btn-info">
            </div>
            </form> 
             
        </div>
</template>

<script>
    export default {
        name: "AddBookItem",
        props: ['editBook'],
        data () {
            return {
                title: '',
                description: '',
                id: '',
                edit: false,
                errors: [],
            }
        },
        methods: {
            addBook(e){
                e.preventDefault();
                //check required
                this.errors = [];
                if (!this.title) this.errors.push("title required");
                if (!this.description) this.errors.push("description required");
                if (!this.errors.length) {
                    if (this.edit === false){
                        // add new book
                        const newBook = {
                            title: this.title,
                            description: this.description,
                            id: Math.random().toString(36).substring(2, 7)
                        };
                        if (newBook.title !== ''&& newBook.description !== ''){
                            this.$emit('add-book-event', newBook);
                        }
                        this.title = ''
                        this.description = ''
                    }else{
                        //edit book
                        const bookItem = {
                            title: this.title,
                            description: this.description,
                            id: this.id
                        };
                        //send to parent (App.vue)
                        this.$emit('edit-book-event', bookItem);
                        // clear input field
                        this.title = '';
                        this.description = '';
                        this.edit = false;
                    }
                      return true;
                  }
            }
        },
        watch: {
            editBook: {
                handler() {
                    this.title = this.editBook.title;
                    this.id = this.editBook.id;
                    this.description = this.editBook.description;
                    this.edit = true
                },
                deep: true
            },
            title:{
                handler(){
                    if(this.title === ''){
                        this.edit = false;
                    }
                }
            },
             description:{
                handler(){
                    if(this.description === ''){
                        this.edit = false;
                    }
                }
            }
        }
    }
</script>


