<template>
                <td>{{index+1}}</td>
                <td> {{book.title}}</td>
                <td> {{book.description}}</td>
                <td>
                    <button  @click="$emit('edit-book-item', book.id)" class="btn btn-sm btn-primary center me-1">Sửa </button> |
                    <button  @click="$emit('del-book-item', book.id)" class="btn btn-sm btn-primary center"   >Xóa </button> 
                </td>  
      
</template>

<script>
    export default {
        name: "BookItem",
        props: ["book","index"]
    }
</script>

<style scoped>
    .glyphicon-pencil, .glyphicon-trash{
        font-size: 15px;
        padding: 4px;
    }
</style>
