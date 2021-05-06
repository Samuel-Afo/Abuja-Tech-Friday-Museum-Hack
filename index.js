
// function myFunction(){
//   alert("the page sucessfully loaded");
// }




// var audio = new Audio()
// audio.src = 'http://translate.google.com/translate_tts?ie=utf-8&tl=en&q=Hello%20World.';
// audio.play();
//
// function googleTranslateElementInit(){
//   new google.Translate.Element({pageLanguage: 'en'}, 'google_translate_element');
// }

document.querySelector(".yoruba").addEventListener("click", function(){
    document.querySelector(".inEnglish1").innerHTML = "Iṣẹ-ọnà Benin jẹ iṣẹ-ọnà lati Ijọba ti Benin tabi Edo Empire (1440-1897), ilu Afirika ti iṣaaju ti o wa ni agbegbe ti a mọ nisinsinyi bi agbegbe Guusu-Guusu ti Nigeria. Ni akọkọ ti a ṣe ti idẹ didan ati eyín erin ti a gbin, iṣẹ-ọnà Benin ni a ṣe ni akọkọ fun ile-ẹjọ ti Oba ti Benin - adari ọlọrun kan fun ẹniti awọn oniṣọnà ṣe agbekalẹ ọpọlọpọ awọn ohun pataki ti aṣa. Iyatọ kikun ti awọn iṣẹ wọnyi ni a le mọriri nikan nipasẹ imọ ati iṣaro ti awọn imọran aṣa ti o fikun meji ti aworan ti Benin: riri iha iwọ-oorun ti wọn ni akọkọ bi awọn iṣẹ iṣẹ ọnà, ati oye wọn ni Benin gẹgẹbi awọn iwe itan ati bi awọn ẹrọ mnemonic si tun itan kọ, tabi bi awọn nkan aṣa. Itumọ akọkọ jẹ pataki nla ni Benin."
    // document.querySelector(".inEnglish2").innerHTML = "this is where the 2nd paraagraph of the yoruba translation of the page goes to"
    document.querySelector(".heading").innerHTML = "Idẹ ti ijọba ti Benin"

    // var yorubaLang = newAudio("yorubaPreview.mp3")
    // yorubaLang.play();
})

document.querySelector(".igbo").addEventListener("click", function(){
    document.querySelector(".inEnglish1").innerHTML = "Benin art bu nka sitere na alaeze Benin or Edo Empire (1440–1897), ala di n’iru ala Africa nke di na mpaghara ebe ana akpo South-South nke Nigeria. Isi ọla kpụrụ akpụ na ọdụ́ a pịrị apị, e mepụtara nka Benin maka ogige nke Oba nke Benin - onye ọchịchị Chukwu nke ndị omenkà mepụtara ọtụtụ ihe dị iche iche eji eme mmemme. Enwere ike ịghọta ihe mgbagwoju anya nke ọrụ ndị a naanị site na mmata na nchebara echiche nke ọdịbendị abụọ nke nka nke Benin: ekele ha nwere dị ka ọrụ nka, yana nghọta ha na Benin dị ka akwụkwọ akụkọ ihe mere eme na ngwa ọrụ wughachi akụkọ ihe mere eme, ma ọ bụ dị ka ihe eji eme ememme. Ihe mbụ a dị mkpa na Benin."
    // document.querySelector(".inEnglish2").innerHTML = "this is where the 2nd paraagraph of the Igbo translation of the page goes to"
    document.querySelector(".heading").innerHTML = "Ọla nke alaeze benin"
})

document.querySelector(".hausa").addEventListener("click", function(){
    document.querySelector(".inEnglish1").innerHTML = "Benin art ita ce fasahar daga Masarautar Benin ko Edo Empire (1440-1897), ƙasar Afirka da ta kasance kafin mulkin mallaka wanda ke cikin yankin da ake kira yanzu Kudu-Kudu na Najeriya. Ainihin an yi shi ne da tagulla da kuma hauren giwar da aka sassaka, ana yin fasahar ta Benin ne musamman ga kotun Oba na Benin - wani sarki ne na Allah wanda masu sana'a suka ƙirƙiro da abubuwa masu mahimmanci na bikin. Cikakken mahimmancin waɗannan ayyukan ana iya yaba su ne kawai ta hanyar wayar da kai da la'akari da fahimtar juna biyu na al'adun fasaha na Benin: Yammacin ƙasashen da suke yaba su da farko kamar ayyukan fasaha, da kuma fahimtar da suke da ita a Benin a matsayin takardu na tarihi da kuma kayan aiki na tunani sake gina tarihi, ko kuma abubuwan al'ada. Wannan mahimmancin asali yana da mahimmanci a cikin Benin."
    // document.querySelector(".inEnglish2").innerHTML = "this is where the 2nd paraagraph of the hausa translation of the page goes to"
    document.querySelector(".heading").innerHTML = "Tagulla na masarautar benin"


})


// $(window).on("load",function(){
//      $(".loader-wrapper").fadeOut("slow");
// });
