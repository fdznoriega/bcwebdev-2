(this["webpackJsonpbcwebdev-2"]=this["webpackJsonpbcwebdev-2"]||[]).push([[0],[,,function(e,t,s){e.exports={post:"Post_post__hw-08",postHeader:"Post_postHeader__SB-fC",profilePicture:"Post_profilePicture__3dukW",postImage:"Post_postImage__1hEu_",numberOfLikes:"Post_numberOfLikes__3sPL5",bubble:"Post_bubble__w8hHw",datetime:"Post_datetime__1Znj5",comment:"Post_comment__1cYeu",description:"Post_description__2B3Ln",addComment:"Post_addComment__aGSqH"}},,function(e,t,s){e.exports={photo:"NewPost_photo__2GXN3",dropArea:"NewPost_dropArea__1QAEl",dragging:"NewPost_dragging__3GXy5",message:"NewPost_message__3BUtG",image:"NewPost_image__2e7fR",desc:"NewPost_desc__lYGQI",textarea:"NewPost_textarea__1ZsCr",actions:"NewPost_actions__1uqzu",error:"NewPost_error__3yRfa"}},,,function(e,t,s){e.exports={navbar:"Navbar_navbar__31-FB"}},function(e,t,s){e.exports={profile:"Profile_profile__3I-Sz",profileInfo:"Profile_profileInfo__31Oyy",profilePic:"Profile_profilePic__2TVpb",userId:"Profile_userId__CizNI",stats:"Profile_stats__ST0M5",posts:"Profile_posts__rwx78"}},function(e,t,s){e.exports={header:"Header_header__3mObx",headerItem:"Header_headerItem__3qR-F"}},function(e,t,s){e.exports={square:"PostThumbnail_square__1mMZc",content:"PostThumbnail_content__23flp",image:"PostThumbnail_image__3J_3H"}},,function(e,t,s){e.exports={container:"App_container__6j1zw",content:"App_content__1dlDM"}},,,,,,,,,,,function(e,t,s){"use strict";s.r(t);var n=s(1),o=s.n(n),r=s(13),a=s.n(r),i=s(5),c=s(3),l=s(2),d=s.n(l),u=function(e){return e.startsWith("/")?"/bcwebdev-2"+e:e},j=function(e){var t=Math.floor((new Date-new Date(e))/1e3),s=Math.floor(t/31556926);return s>=1?s+" years":(s=Math.floor(t/2592e3))>=1?s+" months":(s=Math.floor(t/86400))>=1?s+" days":(s=Math.floor(t/3600))>=1?s+" hours":(s=Math.floor(t/60))>=1?s+" minutes":Math.floor(t)+" seconds"},p=s(0);var h=function(e){var t=Object(n.useState)(""),s=Object(c.a)(t,2),o=s[0],r=s[1],a=Object(n.useState)(!1),i=Object(c.a)(a,2),l=i[0],h=i[1];return Object(p.jsxs)("div",{className:d.a.post,children:[Object(p.jsxs)("div",{className:d.a.postHeader,children:[Object(p.jsx)("img",{className:d.a.profilePicture,src:u(e.user.photo),alt:"Profile"}),Object(p.jsx)("span",{children:Object(p.jsx)("b",{children:e.user.id})})]}),Object(p.jsx)("img",{className:d.a.postImage,src:u(e.post.photo),alt:"Post"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{children:e.likes.self?Object(p.jsx)("img",{onClick:function(){e.onUnlike(e.post.id)},className:d.a.bubble,src:u("/assets/unlike.svg"),alt:"Unlike"}):Object(p.jsx)("img",{onClick:function(){e.onLike(e.post.id)},className:d.a.bubble,src:u("/assets/like.svg"),alt:"Like"})}),Object(p.jsx)("button",{children:Object(p.jsx)("img",{className:d.a.bubble,onClick:function(e){return h(!l)},src:u("/assets/comment.svg"),alt:"Comment Action"})})]}),Object(p.jsx)("p",{className:d.a.numberOfLikes,children:Object(p.jsxs)("b",{children:[e.likes.count," likes"]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("p",{className:d.a.description,children:[Object(p.jsx)("b",{children:e.post.userId})," ",e.post.desc]})}),Object(p.jsx)("div",{children:function(e){if(0!==e.length){var t=[];return e.forEach((function(e,s){return t.push(Object(p.jsxs)("p",{className:d.a.comment,children:[Object(p.jsx)("b",{children:e.userId})," ",e.text]},s))})),t}}(e.comments)}),Object(p.jsxs)("p",{className:d.a.datetime,children:[j(e.post.datetime)," ago"]}),l&&Object(p.jsxs)("form",{className:d.a.addComment,onSubmit:function(t){e.onComment(e.post.id,o),r(""),h(!1),t.preventDefault()},children:[Object(p.jsx)("input",{type:"text",placeholder:"Add a comment\u2026",value:o,onChange:function(e){return r(e.target.value)}}),Object(p.jsx)("button",{type:"submit",children:"Post"})]})]})};var b=function(e){var t=e.store;function s(e,t){return t.users.find((function(t){return t.id===e.userId}))}function n(e,t){return t.comments.filter((function(t){return t.postId===e.id}))}function o(e,t){var s=t.likes.filter((function(t){return t.postId===e.id}));return{self:s.some((function(e){return e.userId===t.currentUserId})),count:s.length}}return Object(p.jsx)("div",{children:t.posts.sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).map((function(r){return Object(p.jsx)(h,{user:s(r,t),post:r,comments:n(r,t),likes:o(r,t),onLike:e.onLike,onUnlike:e.onUnlike,onComment:e.onComment},r.id)}))})},m=s(9),f=s.n(m);var O=function(){return Object(p.jsxs)("div",{className:f.a.header,children:[Object(p.jsx)("div",{className:f.a.headerItem,children:Object(p.jsx)("img",{src:u("/assets/camera.svg"),alt:"Camera"})}),Object(p.jsx)("div",{className:f.a.headerItem,children:Object(p.jsx)("img",{src:u("/assets/logo.png"),alt:"Logo"})}),Object(p.jsx)("div",{className:f.a.headerItem,children:Object(p.jsx)("img",{src:u("/assets/message.svg"),alt:"Message"})})]})},g=s(7),v=s.n(g);var x=function(e){function t(t){e.onNavChange?e.onNavChange(t):console.error("Could not find onNavChange function.")}return Object(p.jsxs)("nav",{className:v.a.navbar,children:[Object(p.jsx)("div",{className:v.a.navItem,children:Object(p.jsx)("button",{onClick:function(e){return t("Home")},children:Object(p.jsx)("img",{src:u("/assets/home.svg"),alt:"Home"})})}),Object(p.jsx)("div",{className:v.a.navItem,children:Object(p.jsx)("button",{onClick:function(e){return t("Explore")},children:Object(p.jsx)("img",{src:u("/assets/explore.svg"),alt:"Explore"})})}),Object(p.jsx)("div",{className:v.a.navItem,children:Object(p.jsx)("button",{onClick:function(e){return t("NewPost")},children:Object(p.jsx)("img",{src:u("/assets/newpost.svg"),alt:"New Post"})})}),Object(p.jsx)("div",{className:v.a.navItem,children:Object(p.jsx)("button",{onClick:function(e){return t("Activity")},children:Object(p.jsx)("img",{src:u("/assets/activity.svg"),alt:"Activity"})})}),Object(p.jsx)("div",{className:v.a.navItem,children:Object(p.jsx)("button",{onClick:function(e){return t("Profile")},children:Object(p.jsx)("img",{src:u("/assets/profile.svg"),alt:"Profile"})})})]})};var _=function(){return Object(p.jsx)("div",{children:"Explore"})},I=s(4),N=s.n(I),k=s(14),P=s(15),w=s(6),D=s(17),y=s(16),C=function(e){Object(D.a)(s,e);var t=Object(y.a)(s);function s(e){var n;return Object(k.a)(this,s),(n=t.call(this,e)).handleDragEnter=n.handleDragEnter.bind(Object(w.a)(n)),n.handleDrop=n.handleDrop.bind(Object(w.a)(n)),n.handleDragOver=n.handleDragOver.bind(Object(w.a)(n)),n.handleDragLeave=n.handleDragLeave.bind(Object(w.a)(n)),n}return Object(P.a)(s,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=o.a.Children.only(this.props.children);return o.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),s}(n.PureComponent);var T=function(e){var t=Object(n.useState)(!1),s=Object(c.a)(t,2),o=s[0],r=s[1],a=Object(n.useState)(""),i=Object(c.a)(a,2),l=i[0],d=i[1],u=Object(n.useState)(null),j=Object(c.a)(u,2),h=j[0],b=j[1],m=Object(n.useState)(""),f=Object(c.a)(m,2),O=f[0],g=f[1];return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:N.a.photo,children:[h?Object(p.jsx)("img",{src:h,alt:"New Post"}):Object(p.jsx)("div",{className:N.a.message,children:"Drop your image"}),Object(p.jsx)(C,{onDragEnter:function(e){r(!0)},onDragLeave:function(e){r(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var s=new FileReader;s.onloadend=function(e){b(e.target.result)},s.readAsDataURL(t)}}r(!1)}},children:Object(p.jsx)("div",{className:[N.a.dropArea,o?N.a.dragging:null].join(" ")})})]}),Object(p.jsx)("div",{className:N.a.desc,children:Object(p.jsx)("input",{onChange:function(e){d(e.target.value)},className:N.a.textarea})}),Object(p.jsx)("div",{className:N.a.error,children:O&&Object(p.jsx)("p",{children:"ERROR TRYING TO UPLOAD YOUR IMAGE"})}),Object(p.jsxs)("div",{className:N.a.actions,children:[Object(p.jsx)("button",{onClick:function(){e.onCancelPost()},children:"Cancel"}),Object(p.jsx)("button",{onClick:function(t){t.preventDefault(),null!==h&&""!==l?(e.onAddPost(h,l),g("")):console.error("Could not add post")},children:"Share"})]})]})};var L=function(){return Object(p.jsx)("div",{children:"Activity"})},S=s(8),E=s.n(S),Z=s(10),A=s.n(Z);var U=function(e){return Object(p.jsx)("div",{className:A.a.square,children:Object(p.jsx)("div",{className:A.a.content,children:Object(p.jsx)("img",{className:A.a.image,src:u(e.post.photo),alt:"Post Thumbnail"})})})};var H=function(e){var t=e.store.users.filter((function(t){return t.id===e.store.currentUserId}))[0],s=e.store.posts.filter((function(e){return e.userId===t.id})),n=[],o=[];return e.store.followers.forEach((function(e){e.userId===t.id?n.push(e):e.followerId===t.id&&o.push(e)})),Object(p.jsxs)("div",{className:E.a.profile,children:[Object(p.jsxs)("section",{className:E.a.profileInfo,children:[Object(p.jsx)("img",{className:E.a.profilePic,src:u(t.photo),alt:"Profile"}),Object(p.jsx)("p",{className:E.a.userId,children:t.id})]}),Object(p.jsxs)("section",{children:[Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:t.name})}),Object(p.jsx)("p",{children:t.bio})]}),Object(p.jsxs)("section",{className:E.a.stats,children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:s.length})}),Object(p.jsx)("p",{children:"posts"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:n.length})}),Object(p.jsx)("p",{children:"followers"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:Object(p.jsx)("b",{children:o.length})}),Object(p.jsx)("p",{children:"following"})]})]}),Object(p.jsx)("section",{className:E.a.posts,children:function(){var e=[];return s.forEach((function(t,s){e.push(Object(p.jsx)(U,{post:t},s))})),e}()})]})},M=s(12),F=s.n(M),R={currentUserId:"judy",users:[{id:"judy",email:"judy@bc.edu",photo:"/assets/user1.png",name:"Judy Hopps",bio:"The first rabbit officer of the Zootopia Police Department. Judy is determined to make the world a better place while breaking preconceptions about other species."},{id:"nick",email:"nick@bc.edu",photo:"/assets/user2.png",name:"Nick Wilde",bio:"Nick is a charming, small-time, con artist fox with a big mouth and a lot of opinions. But when a rabbit cop outsmarts him, he finds himself actually helping her solve a mystery."},{id:"flash",email:"flash@bc.edu",photo:"/assets/user3.png",name:"Flash Slothmore",bio:"Flash is a male three-toed sloth and a supporting character in Zootopia. He works at the Department of Mammal Vehicles."}],followers:[{userId:"nick",followerId:"judy"},{userId:"judy",followerId:"nick"},{userId:"judy",followerId:"flash"}],posts:[{id:"post-1",userId:"judy",photo:"/assets/post1.png",desc:"#zootopia #excited",datetime:"2020-02-09T22:45:28Z"},{id:"post-2",userId:"nick",photo:"/assets/post2.png",desc:"#happy #selfie with Judy",datetime:"2020-02-06T22:45:28Z"},{id:"post-3",userId:"flash",photo:"/assets/post3.png",desc:"Don't worry I got this",datetime:"2020-02-03T22:45:28Z"},{id:"post-4",userId:"judy",photo:"/assets/post4.png",desc:"Just trying to make a #friend",datetime:"2020-02-06T22:45:28Z"},{id:"post-5",userId:"judy",photo:"/assets/post5.png",desc:"I am now the first rabbit officer!",datetime:"2020-02-06T22:45:28Z"},{id:"post-6",userId:"judy",photo:"/assets/post6.png",desc:"Having #goodtimes with folks here",datetime:"2020-02-06T22:45:28Z"}],comments:[{userId:"nick",postId:"post-1",text:"Welcome to Zootopia!",datetime:"2020-02-09T22:51:40Z"},{userId:"judy",postId:"post-1",text:"Thanks!\ud83d\ude01Looking forward to meeting you!",datetime:"2020-02-09T22:52:01Z"},{userId:"flash",postId:"post-2",text:"Looking good you two! \ud83d\udc30\ud83e\udd8a",datetime:"2020-02-09T22:54:20Z"}],likes:[{userId:"judy",postId:"post-1",datetime:"2020-02-09T22:50:40Z"},{userId:"nick",postId:"post-2",datetime:"2020-02-09T22:51:40Z"},{userId:"flash",postId:"post-2",datetime:"2020-02-09T22:54:20Z"},{userId:"judy",postId:"post-3",datetime:"2020-02-09T22:53:40Z"}]};var B=function(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),s=0;s<1e7&&!((new Date).getTime()-t>e);s++);}(1),e?e+t:t};var G=function(){var e=Object(n.useState)("home"),t=Object(c.a)(e,2),s=t[0],o=t[1],r=Object(n.useState)(R),a=Object(c.a)(r,2),l=a[0],d=a[1];function u(e){var t={userId:l.currentUserId,postId:e,datetime:(new Date).toISOString()};d(Object(i.a)(Object(i.a)({},l),{},{likes:l.likes.concat(t)}))}function j(e){d(Object(i.a)(Object(i.a)({},l),{},{likes:l.likes.filter((function(t){return!(t.userId===l.currentUserId&&t.postId===e)}))}))}function h(e,t){var s={userId:l.currentUserId,postId:e,text:t,datetime:(new Date).toISOString()};d(Object(i.a)(Object(i.a)({},l),{},{comments:l.comments.concat(s)}))}function m(e,t){var s={id:B("post"),userId:l.currentUserId,photo:e,desc:t,datetime:(new Date).toISOString()};console.log(s),d(Object(i.a)(Object(i.a)({},l),{},{posts:l.posts.concat(s)})),o("home")}function f(){o("home")}return Object(p.jsxs)("div",{className:F.a.container,children:[Object(p.jsx)(O,{}),Object(p.jsx)("main",{className:F.a.content,children:function(e){switch(e){case"Home":return Object(p.jsx)(b,{store:l,onLike:u,onUnlike:j,onComment:h});case"Explore":return Object(p.jsx)(_,{});case"NewPost":return Object(p.jsx)(T,{store:l,onAddPost:m,onCancelPost:f});case"Activity":return Object(p.jsx)(L,{});case"Profile":return Object(p.jsx)(H,{store:l});default:return Object(p.jsx)(b,{store:l,onLike:u,onUnlike:j,onComment:h})}}(s)}),Object(p.jsx)(x,{onNavChange:o})]})},J=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(t){var s=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),o(e),r(e),a(e)}))};a.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root")),J()}],[[23,1,2]]]);
//# sourceMappingURL=main.b7016906.chunk.js.map