<template>
  <div>會員資料 :</div>
  <div>會員姓名：{{ name }}</div>
  <div></div>
  <div>{{ profile }}</div>
</template>
<script setup lang="ts">
import liff from "@line/liff";

import { ref } from "vue";
const picture_src = ref<string>("");
const name = ref<string>("");
const profile = ref<any>();
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";
import AWS from "aws-sdk";
let token = "";

if (liff.isLoggedIn()) {
  liff.getProfile().then((pro) => {
    profile.value = pro;
    name.value = pro.displayName;
    picture_src.value = pro.pictureUrl;
  });

  const idToken = liff.getIDToken();
  const accessToken = liff.getAccessToken();

  AWS.config.region = "ap-northeast-1";

  // Configure the credentials provider to use your identity pool
  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "ap-northeast-1:9541a3a1-fc2a-456e-a161-95fae001efd7",
    Logins: {
      "access.line.me": idToken,
    },
  });

  AWS.config.getCredentials(function (err) {
    if (err) console.log(err.stack); // credentials not loaded
    else console.log("Access Key:", AWS.config.credentials.accessKeyId);
  });

  console.log(
    fromCognitoIdentityPool({
      client: new CognitoIdentityClient({ region: "ap-northeast-1" }),
      identityPoolId: "ap-northeast-1:9541a3a1-fc2a-456e-a161-95fae001efd7",
      logins: {
        "https://access.line.me": idToken,
      },
    })
  );
} else {
  console.log("未登入");
}
</script>
