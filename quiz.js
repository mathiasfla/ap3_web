var quiztitle = "Teste seu conhecimento sobre Covid-19";
   
    var quiz = [
        {
            "question"      :   "Como o COVID-19 é transmitido??",
            "image"         :   "https://upload.wikimedia.org/wikipedia/commons/7/77/Sneeze.JPG",            
            "choices"       :   [
                                    "Através de gotículas que saem de sua boca e nariz quando você tosse ou expira",
                                    "Bebendo água impura",
                                    "Tudo acima",
                                ],
            "correct"       :   "Através de gotículas que saem de sua boca e nariz quando você tosse ou expira",
        },
        {
            "question"      :   "Quais são os sintomas comuns de COVID-19?",
            "image"         :   "https://sindpolalagoas.com.br/wp-content/uploads/2020/06/COVID-sindpol-1024x1024.jpg",
            "choices"       :   [
                                    "Uma tosse nova e contínua",
                                    "Febre",
                                    "Cansaço",
                                    "Tudo acima",
                                ],
            "correct"       :   "Tudo acima",
        },
        {
            "question"      :   "Lavar as mãos pode protegê-lo do COVID-19?",
            "image"         :   "https://s2.glbimg.com/R9H0FQN0bHmwrmRFMDqEIDEBm_M=/0x0:6048x4032/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/g/p/HRTsnsSPSOyWSGBT4cmg/lavar-maos-original-shutterstock-146517557.jpg",
            "choices"       :   [
                                    "Sim - mas apenas se você usar uma lixívia forte",
                                    "Sim - sabão e água normais ou desinfetante para as mãos são suficientes",
                                    "Não - Lavar as mãos não para COVID-19",
                                ],
            "correct"       :   "Sim - sabão e água normais ou desinfetante para as mãos são suficientes",
        },
        {
            "question"      :   "Para qual das seguintes pessoas o COVID-19 é mais perigoso? (selecione todas as respostas corretas)",
            "image"         :   "https://d2dxldo5hhj2zu.cloudfront.net/img/674x,jpeg/https://d3043uog1ad1l6.cloudfront.net/uploads/2020/05/Abordagem-do-idoso-na-pandemia-de-COVID-19-pt1.jpg",
            "choices"       :   [
                                    "Crianças",
                                    "Idosos - especialmente aqueles com 70 anos ou mais",
                                    "Pessoas com certas condições de saúde subjacentes",
                                    "Povo europeu",
                                ],
            "correct"       :   "Pessoas com certas condições de saúde subjacentes",
        },
        {
            "question"      :   "As pessoas que vivem com HIV estão sempre em maior risco?",
            "image"         :   "https://img.huffingtonpost.com/asset/5c3740c2240000b400c46f0e.jpeg?ops=scalefit_630_noupscale",
            "choices"       :   [
                                    "Sim - pessoas com HIV têm sistemas imunológicos mais fracos",
                                    "Não - as pessoas que aderem ao tratamento antirretroviral (ART) e têm uma contagem de CD4 elevada não correm mais risco",
                                    "Não - pessoas com HIV têm sistemas imunológicos mais fortes",
                                ],
            "correct"       :   "Não - as pessoas que aderem ao tratamento antirretroviral (ART) e têm uma contagem de CD4 elevada não correm mais risco",
        },
        {
            "question"      :   "Os vírus que infectam bactérias são chamados?",
            "image"         :   "https://images01.brasildefato.com.br/04b53372552ad8ea4ad7e395621c9cc4.jpeg",
            "choices"       :   [
                                    "Metanógenos",
                                    "Bacteriófagos",
                                    "Fungo",
                                 ],
            "correct"       :   "Bacteriófagos",
        },
        {
            "question"      :   "Qual é a temperatura corporal normal de um ser humano?",
            "image"         :   "https://blog.ortoponto.com.br/wp-content/uploads/2020/07/termometro-infravermelho-1-1200x675.jpg",
            "choices"       :   [
                                    "35 - 36 ° C",
                                    "36 - 37 ° C",
                                    "34 - 35 ° C",
                                ],
            "correct"       :   "36 - 37 ° C",
        },
        {
            "question"      :   "Em qual dos locais a seguir foi identificado o primeiro caso de novo corona vírus?",
            "image"         :   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/China_administrative_claimed_included.svg/857px-China_administrative_claimed_included.svg.png",
            "choices"       :   [
                                    "Pequim",
                                    "Wuhan",
                                    "Shangai",
                                ],
            "correct"       :   "Wuhan",
        },
        {
            "question"      :   "De onde veio o nome do corona vírus?",
            "image"         :   "https://exame.com/wp-content/uploads/2020/05/coro-e1588945112246.jpg",
            "choices"       :   [
                                    "Uma pessoa chamada Corona o identificou",
                                    "Devido às projeções em forma de folha",
                                    "Devido às suas projeções em forma de coroa",
                                ],
            "correct"       :   "Devido às suas projeções em forma de coroa",
        },
        {
            "question"      :   "Qual é o período de incubação do COVID - 19?",
            "image"         :   "https://img.kalunga.com.br/fotosdeprodutos/040931z.jpg",
            "choices"       :   [
                                    "1 - 14 dias",
                                    "5 - 25 dias",
                                    "10 - 15 dias",
                                ],
            "correct"       :   "1 - 14 dias",
        },
    ];

    /******* No need to edit below this line *********/
  var currentquestion=0,score=0,submt=true,picked;jQuery(document).ready(function(e){function h(i){return e(document.createElement("div")).text(i).html()}function b(k){if(typeof k!=="undefined"&&e.type(k)=="array"){e("#choice-block").empty();for(var j=0;j<k.length;j++){e(document.createElement("li")).addClass("choice choice-box").attr("data-index",j).text(k[j]).appendTo("#choice-block")}}}function d(){submt=true;e("#explanation").empty();e("#question").text(quiz[currentquestion]["question"]);e("#pager").text("Questão "+Number(currentquestion+1)+" de "+quiz.length);if(quiz[currentquestion].hasOwnProperty("image")&&quiz[currentquestion]["image"]!=""){if(e("#question-image").length==0){e(document.createElement("img")).addClass("question-image").attr("id","question-image").attr("src",quiz[currentquestion]["image"]).attr("alt",h(quiz[currentquestion]["question"])).insertAfter("#question")}else{e("#question-image").attr("src",quiz[currentquestion]["image"]).attr("alt",h(quiz[currentquestion]["question"]))}}else{e("#question-image").remove()}b(quiz[currentquestion]["choices"]);c()}function f(i){if(quiz[currentquestion]["choices"][i]==quiz[currentquestion]["correct"]){e(".choice").eq(i).css({"background-color":"#50D943"});e("#explanation").html("<strong>Correto!</strong> "+h(quiz[currentquestion]["explanation"]));score++}else{e(".choice").eq(i).css({"background-color":"#D92623"});e("#explanation").html("<strong>Incorreto!</strong> "+h(quiz[currentquestion]["explanation"]))}currentquestion++;e("#submitbutton").html("PRÓXIMA QUESTÃO &raquo;").on("click",function(){if(currentquestion==quiz.length){a()}else{e(this).text("Verifique a resposta").css({color:"#222"}).off("click");d()}})}function c(){e(".choice").on("mouseover",function(){e(this).css({"background-color":"#e1e1e1"})});e(".choice").on("mouseout",function(){e(this).css({"background-color":"#fff"})});e(".choice").on("click",function(){picked=e(this).attr("data-index");e(".choice").removeAttr("style").off("mouseout mouseover");e(this).css({"border-color":"#222","font-weight":700,"background-color":"#c1c1c1"});if(submt){submt=false;e("#submitbutton").css({color:"#000"}).on("click",function(){e(".choice").off("click");e(this).off("click");f(picked)})}})}function a(){e("#explanation").empty();e("#question").empty();e("#choice-block").empty();e("#submitbutton").remove();e("#question").text("você acertou "+score+" de "+quiz.length+" Questões.");e(document.createElement("h2")).css({"text-align":"center","font-size":"4em"}).text(Math.round(score/quiz.length*100)+"%").insertAfter("#question")}function g(){if(typeof quiztitle!=="undefined"&&e.type(quiztitle)==="string"){e(document.createElement("h1")).text(quiztitle).appendTo("#frame")}else{e(document.createElement("h1")).text("Quiz").appendTo("#frame")}if(typeof quiz!=="undefined"&&e.type(quiz)==="array"){e(document.createElement("p")).addClass("pager").attr("id","pager").text("Questão 1 of "+quiz.length).appendTo("#frame");e(document.createElement("h2")).addClass("question").attr("id","question").text(quiz[0]["question"]).appendTo("#frame");if(quiz[0].hasOwnProperty("image")&&quiz[0]["image"]!=""){e(document.createElement("img")).addClass("question-image").attr("id","question-image").attr("src",quiz[0]["image"]).attr("alt",h(quiz[0]["question"])).appendTo("#frame")}e(document.createElement("p")).addClass("explanation").attr("id","explanation").html("&nbsp;").appendTo("#frame");e(document.createElement("ul")).attr("id","choice-block").appendTo("#frame");b(quiz[0]["choices"]);e(document.createElement("div")).addClass("choice-box").attr("id","submitbutton").text("Verifique a resposta").css({"font-weight":700,color:"#222",padding:"30px 0"}).appendTo("#frame");c()}}g()});

  