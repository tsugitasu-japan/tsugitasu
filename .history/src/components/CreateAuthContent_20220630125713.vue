<template>
  <section>
    <div>
      <h1>本人確認</h1>
      <p class="">{{email}}</p>
      <button>認証コードを再送する</button>
    </div>
    <div>
      <input>
      <input>
      <input>
      <input>
      <input>
      <input>
    </div>
    <p v-show="authError">認証コードが正しくありません</p>
    <div>
      <p>認証用コードを上記のアドレスに送信しました<br>続けるにはコードを入力してください</p>
      <button>認証</button>
    </div>
  </section>
</template>

<script>

export default{
  data(){
    return{
      email:'sotakojima@test.com',
      authError: false
    }
  }
}
</script>