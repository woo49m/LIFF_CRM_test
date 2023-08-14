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

  const id = liff.getDecodedIDToken();
  const idToken = liff.getIDToken();
  const accessToken = liff.getAccessToken();

  console.log(idToken);
  console.log(accessToken);

  const AccessToken = liff.getAccessToken();
  AWS.config.region = "ap-northeast-1";
  AWS.config.credentials = new AWS.CognitoIdentityCredentials(
    {
      IdentityPoolId: "ap-northeast-1:98d98a3e-e288-4c4e-a3b1-764772dfe76e",

      Logins: {
        "cognito-idp.ap-northeast-1.amazonaws.com/uap-northeast-1_access.line.me":
          idToken,
      },
    },
    { region: "ap-northeast-1" }
  );

  AWS.config.credentials.get(function (err) {
    if (err) console.log(err.stack); // credentials not loaded
    else console.log("Access Key:", AWS.config.credentials);
  });

  console.log(
    fromCognitoIdentityPool({
      client: new CognitoIdentityClient({ region: "ap-northeast-1" }),
      identityPoolId: "ap-northeast-1:98d98a3e-e288-4c4e-a3b1-764772dfe76e",
      logins: {
        "cognito-idp.ap-northeast-1.amazonaws.com/uap-northeast-1_access.line.me":
          idToken,
      },
    })
  );
} else {
  console.log("未登入");
}
</script>
