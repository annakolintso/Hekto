(()=>{"use strict";var e=document.querySelector(".signup__form"),t=e.querySelectorAll(".form-group__input"),r=document.querySelector(".signup__success"),o=function(e){var t=e.closest(".form-group"),r=!0,o="email"===e.getAttribute("name")&&e.value&&!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value);return t.classList.remove("has-error"),t.classList.remove("required"),t.classList.remove("pattern"),(""===e.value||o)&&(t.classList.add("has-error"),t.classList.add(o?"pattern":"required"),r=!1),r};t.forEach((function(e){e.addEventListener("blur",(function(){o(e)}))})),e.addEventListener("submit",(function(e){e.preventDefault();var a,n,s,c=(a=0,t.forEach((function(e){!o(e)&&a++})),!a),i=(n={},t.forEach((function(e){var t=e.name,r=e.value;n[t]=r})),n);if(c){var u=("formData",(s=document.cookie.match(new RegExp("(?:^|; )formData=([^;]*)")))?decodeURIComponent(s[1]):void 0);!function(e,t,r){var o=new Date;o.setTime(o.getTime()+1728e5);var a="expires="+o.toUTCString();document.cookie="formData="+t+";"+a+";path=/"}(0,JSON.stringify(i)+u),fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(i)}).then((function(){r.classList.add("active"),setTimeout((function(){r.classList.remove("active")}),2e3),t.forEach((function(e){return e.value=""}))})).catch((function(e){console.error(e)}))}}))})();