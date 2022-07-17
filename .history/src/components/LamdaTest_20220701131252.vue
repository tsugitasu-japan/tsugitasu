<template>
<button @click="createUserTest">PUSH</button>
<button @click="sanitizeAndEmit">サニタイズテスト</button>
<input v-model="math">
<p>{{math}}</p>
</template>


<script>
import axios from 'axios'
export default{
  data(){
    return{
      math:''
    }
  },
  methods:{
    sanitizeAndEmit(){
      this.math.replace(/[^0-9０-９]/g, '');
      console.log('サニタイズ')
    },
    // サーバーに作成ユーザー情報を送信 Axios
    createUserTest() {
      axios.post(
        // LamdaURL
        'https://0dpf7vjoce.execute-api.ap-northeast-1.amazonaws.com/dev/user/entry/tmp',
        {
          body: {
            "email": "hoge@example.com",
            "password": "hogehoge345"
          }
        }
      );
    }
  }
}
</script>