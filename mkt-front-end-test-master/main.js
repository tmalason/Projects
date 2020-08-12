document.addEventListener("DOMContentLoaded", function(){

  //This is a json object not unlike one that would come from an api.
  
  var blogData = {
    "posts" : [
      {
        "headline":"Eight Questions with MeatEater's Mark Kenyon",
        "image": "https://assets.onxmaps.com/images/_AUTOx500_crop_center-center_auto/Back-40-Mark-Kenyon-interview_-Hero.jpg", 
        "link":"https://www.onxmaps.com/blog/eight-questions-with-mark-kenyon"
      },
      {
        "headline":"Morel Mushroom Maps with the onX Hunt App",
        "image": "https://assets.onxmaps.com/images/_AUTOx500_crop_center-center_auto/Mushroom_Hero_v1.jpg",
        "link":"https://www.onxmaps.com/blog/morel-mushroom-hunting-maps-where-to-find"
      },
      {
        "headline":"Finding Turkeys with The Hunting Public",
        "image": "https://assets.onxmaps.com/images/_AUTOx500_crop_center-center_auto/The-THP-Turkey_Hero.jpg",
        "link":"https://www.onxmaps.com/blog/finding-turkeys-with-the-hunting-public"
      },
      {
        "headline":"MeatEater’s Back 40 Project",
        "image": "https://assets.onxmaps.com/images/_AUTOx500_crop_center-center_auto/MeateaterBack40Refresh_Hero2.jpg",
        "link":"https://www.onxmaps.com/blog/meateaters-back-40-project"
      }
    ]
  };

  var blogEntry = `
  <a class="post-wrapper" href="${blogData.posts[0].link}">
    <div class="image-wrapper">
      <img src="${blogData.posts[0].image}" alt="">
    </div>
    <h4>${blogData.posts[0].headline}</h4>
    <div class="button">Read Article</div>
  </a>
  <a class="post-wrapper" href="${blogData.posts[1].link}">
    <div class="image-wrapper">
      <img src="${blogData.posts[1].image}" alt="">
    </div>
    <h4>${blogData.posts[1].headline}</h4>
    <div class="button">Read Article</div>
  </a>
  <a class="post-wrapper" href="${blogData.posts[2].link}">
    <div class="image-wrapper">
      <img src="${blogData.posts[2].image}" alt="">
    </div>
    <h4>${blogData.posts[2].headline}</h4>
    <div class="button">Read Article</div>
  </a>
  <a class="post-wrapper" href="${blogData.posts[3].link}">
    <div class="image-wrapper">
      <img src="${blogData.posts[3].image}" alt="">
    </div>
    <h4>${blogData.posts[3].headline}</h4>
    <div class="button">Read Article</div>
  </a>
  `
  // DRY code goes here
  var blogEntryButDRY = `` ;
  
 
  //later found a resolution past due time
//     var blogEntryButDRY = blogData.posts.map(function (o) {
//        return `
//      <a class="post-wrapper" href="${o.link}">
//       <div class="image-wrapper">
//      <img src="${o.image}" alt="">
//    </div>
//     <h4>${o.headline}</h4>
//    <div class="button">Read Article</div>
//    </a>
//  `;
//    });
//
//
//    var blogFeed = document.getElementsByClassName("blog-posts")[0];
//    //  blogFeed.innerHTML = blogEntry;
//    blogFeed.innerHTML = blogEntryButDRY;
  
    
  var blogFeed = document.getElementsByClassName("blog-posts")[0];
  blogFeed.innerHTML = blogEntry;

  //blogFeed.innerHTML = blogEntryButDRY;
});
