<template>
  <div>會員資料 :</div>
  <div>會員姓名：{{ name }}</div>
  <div>
    <img :src="picture_src" />
  </div>
  <div>{{ profile }}</div>
</template>
<script setup lang="ts">
import liff from "@line/liff";

import { ref } from "vue";
const picture_src = ref<string>("");
const name = ref<string>("");
const profile = ref<any>();
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

if (liff.isLoggedIn()) {
  liff.getProfile().then((pro) => {
    profile.value = pro;
    name.value = pro.displayName;
    picture_src.value = pro.pictureUrl;
  });

  const idToken = liff.getIDToken();
  let COGNITO_ID = "COGNITO_ID"; // 'COGNITO_ID' has the format 'cognito-idp.REGION.amazonaws.com/COGNITO_USER_POOL_ID'
  let loginData = {
    [COGNITO_ID]: idToken,
  };
  const credentials = fromCognitoIdentityPool({
    clientConfig: { region: REGION }, // Configure the underlying CognitoIdentityClient.
    identityPoolId: "IDENTITY_POOL_ID",
    logins: loginData,
  });

  console.log(credentials);
} else {
  console.log("未登入");
}
</script>
