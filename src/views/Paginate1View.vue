<template >
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
            <tr v-for="(item, index) in paginatedData" :key="index">
              <td >{{index+1}}</td>
              <td> {{item.name}}</td>
              <td> {{item.age}}</td>
              <td> {{item.sex=="0"?"nữ":"nam"}}</td>
              <td> {{item.sex}}</td>
            </tr>
           </tbody>
          </table>
        <button @click="backPage">prev</button>
        <button
            v-for="item in Math.ceil(items.length / perPage)"
            :key="item"
            @click="() => goToPage(item)">
            {{ item }}
        </button>
        <button @click="nextPage">next</button>
</template>

<script>
export default {
    data() {
    return {
      page:1,
      perPage:1,
      items: JSON.parse(localStorage.getItem("formName") || "[]"),
    };
  },
  computed:{
     paginatedData(){
          console.log(this.items);
		return this.items.slice((this.page - 1) * this.perPage, this.page * this.perPage)
	}
  },
  methods:{
      nextPage(){
          if (this.page !== Math.ceil(items.length / this.perPage)) {
            this.page += 1;
        }
      },
      backPage() {
            if (this.page !== 1) {
            this.page -= 1;
            }
      },
      goToPage(numPage) {
        this.page = numPage;
      }
  }
}       
</script>