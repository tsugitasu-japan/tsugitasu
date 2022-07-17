<template>
<button @click="createUserTest">PUSH</button>
<button @click="sanitizeAndEmit">サニタイズテスト</button>
<input v-model="math">
<input 
:value="math1" 
@input="event => value = event.target.value.replace(/[^0-9]/g, '')"
>
<p>{{math}}</p>
<p>{{math1}}</p>
</template>


<script>
import axios from 'axios'
export default{
  data(){
    return{
      math:'テスト用１１１１00000',
      math1:''
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