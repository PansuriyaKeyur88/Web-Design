// Ex-03 --> Tell Me A Joke //





function joke(){
    let myjoke = [
        {
            "joke": "Judge: \"I sentence you to the maximum punishment...\"\nMe (thinking): \"Please be death, please be death...\"\nJudge: \"Learn Java!\"\nMe: \"Damn.\""
        }
        ,
        {
            "joke": "A horse walks into a bar.\n\"Hey\", the Bartender says.\n\"Sure\", the horse replies."
        }
        ,
        {
            "joke": "Four engineers get into a car. The car won't start.\nThe Mechanical engineer says \"It's a broken starter\".\nThe Electrical engineer says \"Dead battery\".\nThe Chemical engineer says \"Impurities in the gasoline\".\nThe IT engineer says \"Hey guys, I have an idea: How about we all get out of the car and get back in\"."
        }
        ,
        {
            "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't."
        }
        , {
            "joke": "I visited my friend at his new house. He told me to make myself at home. So I threw him out. I hate having visitors."
        }
        ,
        {
            "joke": "What does the MacBook have in common with Donald Trump?\n\nI would tell you....\nBut I don't compare apples to oranges."
        }
        ,
        {
            "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\""
        }
        ,
        {
            "joke": "Algorithm: A word used by programmers when they don't want to explain how their code works."
        }
        ,
        {
            "joke": "Algorithm: A word used by programmers when they don't want to explain how their code works."
        }
        ,
        {
            "joke": "A neutron walks into a bar and asks for a price on a drink.\nThe barkeeper says: \"For you... no charge!\""
        }
        ,
        {
            "joke": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
        }
    ]
    let random = [Math.floor(Math.random() * myjoke.length)]
    let a = document.getElementsByClassName("demo")[0].innerHTML = myjoke[random].joke;
}


