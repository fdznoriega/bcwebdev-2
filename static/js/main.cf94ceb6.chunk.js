(this["webpackJsonpbcwebdev-2"]=this["webpackJsonpbcwebdev-2"]||[]).push([[0],{11:function(e,t,s){e.exports={photo:"NewPost_photo__2GXN3",dropArea:"NewPost_dropArea__1QAEl",dragging:"NewPost_dragging__3GXy5",message:"NewPost_message__3BUtG",image:"NewPost_image__2e7fR",desc:"NewPost_desc__lYGQI",textarea:"NewPost_textarea__1ZsCr",actions:"NewPost_actions__1uqzu",error:"NewPost_error__3yRfa"}},14:function(e,t,s){e.exports={navbar:"Navbar_navbar__31-FB"}},15:function(e,t,s){e.exports={profile:"Profile_profile__3I-Sz",profileInfo:"Profile_profileInfo__31Oyy",profilePic:"Profile_profilePic__2TVpb",userId:"Profile_userId__CizNI",stats:"Profile_stats__ST0M5",posts:"Profile_posts__rwx78"}},17:function(e,t,s){e.exports={header:"Header_header__3mObx",headerItem:"Header_headerItem__3qR-F"}},18:function(e,t,s){e.exports={square:"PostThumbnail_square__1mMZc",content:"PostThumbnail_content__23flp",image:"PostThumbnail_image__3J_3H"}},23:function(e,t,s){e.exports={container:"App_container__6j1zw",content:"App_content__1dlDM"}},41:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(25),o=s.n(r),c=s(8),i=s(10),l=s(7),d=s.n(l),j=function(e){return e.startsWith("/")?"/bcwebdev-2"+e:e},u=function(e){var t=Math.floor((new Date-new Date(e))/1e3),s=Math.floor(t/31556926);return s>=1?s+" years":(s=Math.floor(t/2592e3))>=1?s+" months":(s=Math.floor(t/86400))>=1?s+" days":(s=Math.floor(t/3600))>=1?s+" hours":(s=Math.floor(t/60))>=1?s+" minutes":Math.floor(t)+" seconds"},b=s(4),p=s(0);var h=function(e){var t=Object(n.useState)(""),s=Object(i.a)(t,2),a=s[0],r=s[1],o=Object(n.useState)(!1),c=Object(i.a)(o,2),l=c[0],h=c[1];return Object(p.jsxs)("div",{className:d.a.post,children:[Object(p.jsxs)("div",{className:d.a.postHeader,children:[Object(p.jsx)("img",{className:d.a.profilePicture,src:j(e.user.photo),alt:"Profile"}),Object(p.jsx)("span",{children:Object(p.jsx)(b.b,{to:"/profile/"+e.user.id,children:Object(p.jsx)("b",{children:e.user.id})})})]}),Object(p.jsx)("img",{className:d.a.postImage,src:j(e.post.photo),alt:"Post"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{children:e.likes.self?Object(p.jsx)("img",{onClick:function(){e.onUnlike(e.post.id)},className:d.a.bubble,src:j("/assets/unlike.svg"),alt:"Unlike"}):Object(p.jsx)("img",{onClick:function(){e.onLike(e.post.id)},className:d.a.bubble,src:j("/assets/like.svg"),alt:"Like"})}),Object(p.jsx)("button",{children:Object(p.jsx)("img",{className:d.a.bubble,onClick:function(e){return h(!l)},src:j("/assets/comment.svg"),alt:"Comment Action"})})]}),Object(p.jsx)("p",{className:d.a.numberOfLikes,children:Object(p.jsxs)("b",{children:[e.likes.count," likes"]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("p",{className:d.a.description,children:[Object(p.jsx)("b",{children:e.post.userId})," ",e.post.desc]})}),Object(p.jsx)("div",{children:function(e){if(0!==e.length){var t=[];return e.forEach((function(e,s){return t.push(Object(p.jsxs)("p",{className:d.a.comment,children:[Object(p.jsx)("b",{children:e.userId})," ",e.text]},s))})),t}}(e.comments)}),Object(p.jsxs)("p",{className:d.a.datetime,children:[u(e.post.datetime)," ago"]}),l&&Object(p.jsxs)("form",{className:d.a.addComment,onSubmit:function(t){e.onComment(e.post.id,a),r(""),h(!1),t.preventDefault()},children:[Object(p.jsx)("input",{type:"text",placeholder:"Add a comment\u2026",value:a,onChange:function(e){return r(e.target.value)}}),Object(p.jsx)("button",{type:"submit",children:"Post"})]})]})},m=s(2);var f=function(e){var t=e.store,s=Object(m.g)().postId;function n(e,t){return t.users.find((function(t){return t.id===e.userId}))}function a(e,t){return t.comments.filter((function(t){return t.postId===e.id}))}function r(e,t){var s=t.likes.filter((function(t){return t.postId===e.id}));return{self:s.some((function(e){return e.userId===t.currentUserId})),count:s.length}}return Object(p.jsx)("div",{children:t.posts.sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).filter((function(e){return!s||s===e.id})).map((function(s){return Object(p.jsx)(h,{user:n(s,t),post:s,comments:a(s,t),likes:r(s,t),onLike:e.onLike,onUnlike:e.onUnlike,onComment:e.onComment},s.id)}))})},O=s(17),g=s.n(O);var x=function(){return Object(p.jsxs)("div",{className:g.a.header,children:[Object(p.jsx)("div",{className:g.a.headerItem,children:Object(p.jsx)("img",{src:j("/assets/camera.svg"),alt:"Camera"})}),Object(p.jsx)("div",{className:g.a.headerItem,children:Object(p.jsx)("img",{src:j("/assets/logo.png"),alt:"Logo"})}),Object(p.jsx)("div",{className:g.a.headerItem,children:Object(p.jsx)("img",{src:j("/assets/message.svg"),alt:"Message"})})]})},v=s(14),_=s.n(v);var I=function(){return Object(p.jsxs)("nav",{className:_.a.navbar,children:[Object(p.jsx)("div",{className:_.a.navItem,children:Object(p.jsx)(b.b,{to:"/",children:Object(p.jsx)("img",{src:j("/assets/home.svg"),alt:"Home"})})}),Object(p.jsx)("div",{className:_.a.navItem,children:Object(p.jsx)(b.b,{to:"/explore",children:Object(p.jsx)("img",{src:j("/assets/explore.svg"),alt:"Explore"})})}),Object(p.jsx)("div",{className:_.a.navItem,children:Object(p.jsx)(b.b,{to:"/newpost",children:Object(p.jsx)("img",{src:j("/assets/newpost.svg"),alt:"New Post"})})}),Object(p.jsx)("div",{className:_.a.navItem,children:Object(p.jsx)(b.b,{to:"/activity",children:Object(p.jsx)("img",{src:j("/assets/activity.svg"),alt:"Activity"})})}),Object(p.jsx)("div",{className:_.a.navItem,children:Object(p.jsx)(b.b,{to:"/profile",children:Object(p.jsx)("img",{src:j("/assets/profile.svg"),alt:"Profile"})})})]})};var w=function(){return Object(p.jsx)("div",{children:"Explore"})},k=s(11),N=s.n(k),D=s(27),P=s(28),y=s(13),T=s(30),C=s(29),L=function(e){Object(T.a)(s,e);var t=Object(C.a)(s);function s(e){var n;return Object(D.a)(this,s),(n=t.call(this,e)).handleDragEnter=n.handleDragEnter.bind(Object(y.a)(n)),n.handleDrop=n.handleDrop.bind(Object(y.a)(n)),n.handleDragOver=n.handleDragOver.bind(Object(y.a)(n)),n.handleDragLeave=n.handleDragLeave.bind(Object(y.a)(n)),n}return Object(P.a)(s,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=a.a.Children.only(this.props.children);return a.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),s}(n.PureComponent);var S=function(e){var t=Object(n.useState)(!1),s=Object(i.a)(t,2),a=s[0],r=s[1],o=Object(n.useState)(""),c=Object(i.a)(o,2),l=c[0],d=c[1],j=Object(n.useState)(null),u=Object(i.a)(j,2),b=u[0],h=u[1],f=Object(n.useState)(""),O=Object(i.a)(f,2),g=O[0],x=O[1],v=Object(m.f)();return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:N.a.photo,children:[b?Object(p.jsx)("img",{src:b,alt:"New Post"}):Object(p.jsx)("div",{className:N.a.message,children:"Drop your image"}),Object(p.jsx)(L,{onDragEnter:function(e){r(!0)},onDragLeave:function(e){r(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var s=new FileReader;s.onloadend=function(e){h(e.target.result)},s.readAsDataURL(t)}}r(!1)}},children:Object(p.jsx)("div",{className:[N.a.dropArea,a?N.a.dragging:null].join(" ")})})]}),Object(p.jsx)("div",{className:N.a.desc,children:Object(p.jsx)("input",{onChange:function(e){d(e.target.value)},className:N.a.textarea})}),Object(p.jsx)("div",{className:N.a.error,children:g&&Object(p.jsx)("p",{children:"ERROR TRYING TO UPLOAD YOUR IMAGE"})}),Object(p.jsxs)("div",{className:N.a.actions,children:[Object(p.jsx)("button",{onClick:function(){v.goBack()},children:"Cancel"}),Object(p.jsx)("button",{onClick:function(t){t.preventDefault(),null!==b&&""!==l?(e.onAddPost(b,l),x("")):console.error("Could not add post")},children:"Share"})]})]})};var E=function(){return Object(p.jsx)("div",{children:"Activity"})},Z=s(15),U=s.n(Z),A=s(18),F=s.n(A);var M=function(e){return Object(p.jsx)("div",{className:F.a.square,children:Object(p.jsx)("div",{className:F.a.content,children:Object(p.jsx)("img",{className:F.a.image,src:j(e.post.photo),alt:"Post Thumbnail"})})})};var H=function(e){var t=Object(m.g)(),s=e.store.users.filter((function(t){return t.id===e.store.currentUserId}))[0],n=e.store.posts.filter((function(e){return e.userId===s.id})),a=[],r=[];return console.log(t),e.store.followers.forEach((function(e){e.userId===s.id?a.push(e):e.followerId===s.id&&r.push(e)})),Object(p.jsxs)("div",{className:U.a.profile,children:[Object(p.jsxs)("section",{className:U.a.profileInfo,children:[Object(p.jsx)("img",{className:U.a.profilePic,src:j(s.photo),alt:"Profile"}),Object(p.jsx)("p",{className:U.a.userId,children:s.id})]}),Object(p.jsx)("button",{onClick:e.onFollow,children:"Follow"}),Object(p.jsxs)("section",{children:[Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:s.name})}),Object(p.jsx)("p",{children:s.bio})]}),Object(p.jsxs)("section",{className:U.a.stats,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:n.length})}),Object(p.jsx)("p",{children:"posts"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:a.length})}),Object(p.jsx)("p",{children:"followers"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:r.length})}),Object(p.jsx)("p",{children:"following"})]})]}),Object(p.jsx)("section",{className:U.a.posts,children:function(){var e=[];return n.forEach((function(t,s){e.push(Object(p.jsx)(b.b,{to:t.id,children:Object(p.jsx)(M,{post:t},s)},s))})),e}()})]})},R=s(23),B=s.n(R),G={currentUserId:"judy",users:[{id:"judy",email:"judy@bc.edu",photo:"/assets/user1.png",name:"Judy Hopps",bio:"The first rabbit officer of the Zootopia Police Department. Judy is determined to make the world a better place while breaking preconceptions about other species."},{id:"nick",email:"nick@bc.edu",photo:"/assets/user2.png",name:"Nick Wilde",bio:"Nick is a charming, small-time, con artist fox with a big mouth and a lot of opinions. But when a rabbit cop outsmarts him, he finds himself actually helping her solve a mystery."},{id:"flash",email:"flash@bc.edu",photo:"/assets/user3.png",name:"Flash Slothmore",bio:"Flash is a male three-toed sloth and a supporting character in Zootopia. He works at the Department of Mammal Vehicles."}],followers:[{userId:"nick",followerId:"judy"},{userId:"judy",followerId:"nick"},{userId:"judy",followerId:"flash"}],posts:[{id:"post-1",userId:"judy",photo:"/assets/post1.png",desc:"#zootopia #excited",datetime:"2020-02-09T22:45:28Z"},{id:"post-2",userId:"nick",photo:"/assets/post2.png",desc:"#happy #selfie with Judy",datetime:"2020-02-06T22:45:28Z"},{id:"post-3",userId:"flash",photo:"/assets/post3.png",desc:"Don't worry I got this",datetime:"2020-02-03T22:45:28Z"},{id:"post-4",userId:"judy",photo:"/assets/post4.png",desc:"Just trying to make a #friend",datetime:"2020-02-06T22:45:28Z"},{id:"post-5",userId:"judy",photo:"/assets/post5.png",desc:"I am now the first rabbit officer!",datetime:"2020-02-06T22:45:28Z"},{id:"post-6",userId:"judy",photo:"/assets/post6.png",desc:"Having #goodtimes with folks here",datetime:"2020-02-06T22:45:28Z"}],comments:[{userId:"nick",postId:"post-1",text:"Welcome to Zootopia!",datetime:"2020-02-09T22:51:40Z"},{userId:"judy",postId:"post-1",text:"Thanks!\ud83d\ude01Looking forward to meeting you!",datetime:"2020-02-09T22:52:01Z"},{userId:"flash",postId:"post-2",text:"Looking good you two! \ud83d\udc30\ud83e\udd8a",datetime:"2020-02-09T22:54:20Z"}],likes:[{userId:"judy",postId:"post-1",datetime:"2020-02-09T22:50:40Z"},{userId:"nick",postId:"post-2",datetime:"2020-02-09T22:51:40Z"},{userId:"flash",postId:"post-2",datetime:"2020-02-09T22:54:20Z"},{userId:"judy",postId:"post-3",datetime:"2020-02-09T22:53:40Z"}]};var J=function(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),s=0;s<1e7&&!((new Date).getTime()-t>e);s++);}(1),e?e+t:t};var q=function(){var e=Object(n.useState)(G),t=Object(i.a)(e,2),s=t[0],a=t[1];return Object(p.jsx)(b.a,{basename:"/bcwebdev-2",children:Object(p.jsxs)("div",{className:B.a.container,children:[Object(p.jsx)(x,{}),Object(p.jsx)("main",{className:B.a.content,children:Object(p.jsxs)(m.c,{children:[Object(p.jsx)(m.a,{path:"/explore",children:Object(p.jsx)(w,{})}),Object(p.jsx)(m.a,{path:"/newpost",children:Object(p.jsx)(S,{store:s,onAddPost:function(e,t){var n={id:J("post"),userId:s.currentUserId,photo:e,desc:t,datetime:(new Date).toISOString()};a(Object(c.a)(Object(c.a)({},s),{},{posts:s.posts.concat(n)}))}})}),Object(p.jsx)(m.a,{path:"/activity",children:Object(p.jsx)(E,{})}),Object(p.jsx)(m.a,{path:"/profile/:userId?",children:Object(p.jsx)(H,{store:s,onFollow:function(e,t){a(Object(c.a)(Object(c.a)({},s),{},{followers:s.followers.concat({userId:e,followerId:t})}))},onUnfollow:function(e,t){a(Object(c.a)(Object(c.a)({},s),{},{followers:s.followers.filter((function(s){return s.userId!==e||s.followerId!==t}))}))}})}),Object(p.jsx)(m.a,{path:"/:postId?",children:Object(p.jsx)(f,{store:s,onLike:function(e){var t={userId:s.currentUserId,postId:e,datetime:(new Date).toISOString()};a(Object(c.a)(Object(c.a)({},s),{},{likes:s.likes.concat(t)}))},onUnlike:function(e){a(Object(c.a)(Object(c.a)({},s),{},{likes:s.likes.filter((function(t){return!(t.userId===s.currentUserId&&t.postId===e)}))}))},onComment:function(e,t){var n={userId:s.currentUserId,postId:e,text:t,datetime:(new Date).toISOString()};a(Object(c.a)(Object(c.a)({},s),{},{comments:s.comments.concat(n)}))}})})]})}),Object(p.jsx)(I,{})]})})},z=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;s(e),n(e),a(e),r(e),o(e)}))};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root")),z()},7:function(e,t,s){e.exports={post:"Post_post__hw-08",postHeader:"Post_postHeader__SB-fC",profilePicture:"Post_profilePicture__3dukW",postImage:"Post_postImage__1hEu_",numberOfLikes:"Post_numberOfLikes__3sPL5",bubble:"Post_bubble__w8hHw",datetime:"Post_datetime__1Znj5",comment:"Post_comment__1cYeu",description:"Post_description__2B3Ln",addComment:"Post_addComment__aGSqH"}}},[[41,1,2]]]);
//# sourceMappingURL=main.cf94ceb6.chunk.js.map