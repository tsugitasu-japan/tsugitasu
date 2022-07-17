<template>
<button @click="createUserTest">PUSH</button>
</template>


<script>
import axios from 'axios'
export default{
  methods:{
    // サーバーに作成ユーザー情報を送信 Axios
    createUserTest() {
      axios.post(
        // LamdaURL
        'https://0dpf7vjoce.execute-api.ap-northeast-1.amazonaws.com/dev/user/entry/tmp',
        {
          "email": "univ.ad.nu@gmail.com",
          // "confirmation_code": "430245"
          "passwor": "hogehoge345"
        }
      );
    }
  }
}
</script>