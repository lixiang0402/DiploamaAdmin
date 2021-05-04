<template>
  <div>
    <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false" :on-success="onSuccess">
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <img style="width:200px;height:200px;backgroundColor:red" :src="src" alt="" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      src: '',
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    onSuccess(res) {
      this.src = res.url
      console.log(res)
    },
    async fetch() {
      console.log(123)
      let res = await this.$http.post('/lists', { page: 1, size: 50 })
      console.log(res)
    },
  },
}
</script>
