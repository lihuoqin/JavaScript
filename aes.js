  <script src="https://cdn.bootcss.com/crypto-js/3.1.9-1/crypto-js.min.js"></script>
  
  //解密方法
          function AESDecrypt(word,password) {
              var key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(password).toString());
              var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
              var encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
              var decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, key, {
              mode: CryptoJS.mode.ECB,
              padding: CryptoJS.pad.Pkcs7
              });
              return  decryptedData.toString(CryptoJS.enc.Utf8);
          }

          //加密方法
          function AESEncrypt(word,password) {
              var key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(password).toString());
              var encryptedData = CryptoJS.AES.encrypt(word, key, {
              mode: CryptoJS.mode.ECB,
              padding: CryptoJS.pad.Pkcs7
              });
              return encryptedData.ciphertext.toString();
          }
