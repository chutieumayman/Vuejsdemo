<template>
  <div class="d-flex flex-row col-md-12 ">
     <div class="mb-4 col-md-12 ">
          <label for="" class="form-label">TH2 phân trang</label>
          <div class="overflow-auto" v-if="resultTotalpage==0"> Không có dữ liệu </div> 
          <div class="overflow-auto" v-else >
            <table class="table table-hover mb-4 sm-12">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Sex</th>
                <th scope="col">Sửa/Xóa</th>
              </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in displayedPosts" :key="index">
              <td >{{index+1}}</td>
              <td> {{item.name}}</td>
              <td> {{item.age}}</td>
              <td> {{item.sex=="0"?"nữ":"nam"}}</td>
              <td> {{item.sex}}</td>
            </tr>
           </tbody>
          </table>
           <div>
             <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <button type="button" class="page-link" v-if="page != 1" @click="page--"> Trước </button>
                </li>
                <li class="page-item">
                  <button type="button" class="page-link" :key="pageNumber" v-for="pageNumber in pages.slice(page-1, page+5)" @click="page = pageNumber"> {{pageNumber}} </button>
                </li>
                <li class="page-item">
                  <button type="button" @click="page++" v-if="page < pages.length" class="page-link"> Tiếp </button>
                </li>
              </ul>
              </nav>	
           </div>

          </div>
      </div>
  </div>
 </template>
 <script>
export default {
  data() {
    return {
      posts: [],
      page: 1,
			perPage: 1,
			pages: [],	
    };
  },
  created() {
    this.posts = JSON.parse(localStorage.getItem("formName") || "[]");
    this.resultTotalpage = JSON.parse(localStorage.getItem("formName")).length || 0;
    this.getPosts();
  },
  methods: {
    getPosts () {	
      
		},

    	setPages () {
			let numberOfPages = Math.ceil(this.posts.length / this.perPage);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
    paginate (posts) {
			let page = this.page;
			let perPage = this.perPage;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  posts.slice(from, to);
		}
  },
  computed: {
    displayedPosts () {
			return this.paginate(this.posts);
		}
  },
  watch: {
		posts () {
			this.setPages();
		}
	},
	filters: {
		trimWords(value){
			return value.split(" ").splice(0,20).join(" ") + '...';
		}
	}
};
</script>

<style>
  button.page-link {
	display: inline-block;
}
button.page-link {
    font-size: 10px;
    color: #29b3ed;
    font-weight: 500;
}
.offset{
  width: 500px !important;
  margin: 20px auto;  
}


</style>
