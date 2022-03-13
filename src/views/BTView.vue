<template>
  <div class="d-flex flex-row">
    <form class="row mx-4 col-md-4 col-sm-12"  @submit="onSubmit"  @reset="onReset" novalidate="true" >
        <div class="p-2 bd-highlight sm-12">
          <p v-if="errors.length">
            <b>Check lỗi:</b>
            <ul>
              <li v-for="(error,index) in errors" :key="index" >{{ error }}</li>
            </ul>
          </p>
          <div class="mb-4 col-md-12">
            <label for="" class="form-label"> {{ $t('name') }}</label>
            <input  v-model="form.name" class="form-control"  >
          </div>
          <div class="mb-4 col-md-12">
            <label for="" class="form-label">Age</label>
            <input  v-model="form.age" class="form-control"  >
          </div>
          
          <div class="mb-4 col-md-12 ">
            <label for="" class="form-label">Sex</label>
            <select class="form-select"  v-model="form.sex" >
                <option value="0">Nữ</option>
                <option value="1">Nam</option>
              </select>
          </div>
          

          <div class="mb-4 sm-12">
            <input  class="btn btn-primary me-1 "
              type="submit"
              value="Thêm"
            >
            <input  class="btn btn-danger me-1 "
              type="reset"
              value="Reset"
            >
          </div>
        </div>
    </form>
  </div>
  <div class="d-flex flex-row col-md-12 ">
       <div class="mb-4 col-md-12 ">
            <label for="" class="form-label">TH1 load more</label>
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
            <tr v-for="(item, index) in paginatedOrders" :key="index">
              <td >{{index+1}}</td>
              <td> {{item.name}}</td>
              <td> {{item.age}}</td>
              <td> {{item.sex=="0"?"nữ":"nam"}}</td>
              <td> {{item.sex}}</td>
            </tr>
           </tbody>
          </table>
          <div>
            <button @click="loadMore" class="btn btn-primary center "  v-if="currentPage * maxPerPage < items.length" >Load more </button>
          </div>
          </div>
        </div>
  </div>
  
 </template>
 <script>
export default {
  data() {
    return {
      errors: [],
      form: {
        id: "",
        name: "",
        age: "",
        sex: "",
      },
      sexs: [{ text: "Chọn một", value: null }, "1", "0"],
      fields: ["name", "age", "sex"],
      items: [],
      currentPage: 1,
      maxPerPage: 3,
      resultTotalpage: 0,
    };
  },
  created() {
    this.items = JSON.parse(localStorage.getItem("formName") || "[]");
    this.resultTotalpage =
      JSON.parse(localStorage.getItem("formName")).length || 0;
  },
  methods: {
    onSubmit: function (e) {
      this.errors = [];
      if (!this.form.name) this.errors.push("Name required");
      if (!this.form.age) this.errors.push("Age required");
      if (!this.form.sex || this.form.sex == undefined)
        this.errors.push("Sex required");

      if (!this.errors.length) {
        this.form.id = Math.random().toString(36).substring(2, 7);
        let data = this.form;
        this.items.push(data);
        localStorage.setItem("formName", JSON.stringify(this.items));
        return true;
      }
      e.preventDefault();
    },
    onReset: function () {
      this.form.age = "";
      this.form.name = "";
      this.form.sex = null;
    },
    onChange(event) {
      // i18n.locale = event.target.value;
    },
    loadMore() {
      this.currentPage += 1;
    },
  },
  computed: {
    totalResults() {
      return JSON.parse(localStorage.getItem("formName")).length || 0;
    },
    pageCount() {
      return Math.ceil(this.totalResults / this.maxPerPage);
    },
    pageOffest() {
      return this.maxPerPage * this.currentPage;
    },
    paginatedOrders() {
      return this.items.slice(0, this.currentPage * this.maxPerPage);
    },
  }
};
</script>
