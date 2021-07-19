console.log("sript loaded!")
var mObj= [
    {
        id: "1",
        fullName:"RAJASTHAN ROYALS",
        key: "RR",
        championshipWon: 3,
        topBatsman: "Sanju Samson",
        topBowler: "Chris Morris",
        teamIcon:"https://mumbaimirror.indiatimes.com/photo/73948862.cms"
    },
    {
        id: "2",
        fullName:"DELHI CAPITALS",
        key: "DC",
        championshipWon: 8,
        topBatsman: "Shikhar Dhawan",
        topBowler: "Avesh Khan",
        teamIcon:"https://d28wu8o6itv89t.cloudfront.net/images/DelhiCapitalspng-1598599831633.png"
    },
    {
        id: "3",
        fullName:"KINGS XI  PUNJAB",
        key: "KXIP",
        championshipWon: 5,
        topBatsman: "KL Rahul",
        topBowler: "Mohmammad Shami",
        teamIcon: "https://img.wallpapersafari.com/desktop/1920/1080/0/5/ygtNXJ.jpg"
    },
    {
        id: "4",
        fullName:"ROYAL CHALLENGERS BANGALORE",
        key: "RCB",
        championshipWon: 4,
        topBatsman: "Virat Kohli",
        topBowler: "Harshal Patel",
        teamIcon:"https://pbs.twimg.com/media/CdP3DvXVAAA7k37.jpg"
    },
    {
        id: "5",
        fullName:"MUMBAI INDIANS",
        key: "MI",
        championshipWon: 8,
        topBatsman: "Rohit Sharma",
        topBowler: "Rahul Chahar",
        teamIcon:"https://wallpapercave.com/wp/wp5040445.jpg"
    },
    {
        id: "6",
        fullName:"KOLKATA KNIGHT RIDERS",
        key: "KKR",
        championshipWon: 6,
        topBatsman: "Shubhman Gill",
        topBowler: "Pat Cummins",
        teamIcon: "https://wallpapercave.com/wp/wp2682704.jpg"
    },
    {
        id: "7",
        fullName:"SUNRISERS HYDERABAD",
        key: "SRH",
        championshipWon: 8,
        topBatsman: "Jhonny Bairstow",
        topBowler: "Rashid Khan",
        teamIcon: "https://wallpapercave.com/wp/wp4128423.jpg"
    },
    {
        id: "8",
        fullName:"CHENNAI SUPER KINGS",
        key: "CSK",
        championshipWon: 10,
        topBatsman: "Faf du Plessis",
        topBowler: "Dwayne Bravo",
        teamIcon: "https://www.pngitem.com/pimgs/m/7-75484_transparent-csk-logo-png-chennai-super-kings-png.png"
    }
]

var players = [
    {
        "id":0,
        "playerName" :"HARDIK PANDYA",
        "from":"MI",
        "price":"6.50 Cr",
        "isPlaying":true,
        "description":"All-Rounder",
        "playerPicUrl":"https://www.mumbaiindians.com/static-assets/images/players/large/63751.png?v=1.34&w=400"
    },
    {
        "id":1,
        "playerName":"VIRAT KOHLI",
        "from":"RCB",
        "price":"8.00 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://i.pinimg.com/originals/ab/ac/09/abac09fd6e794d051e3b33da06f79326.png"
    },
 
    {
        "id":3,
        "playerName":"ROHIT SHARMA",
        "from":"MI",
        "price":"12.00 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/107.png"
    },
    {
        "id":4,
        "playerName":"MS DHONI",
        "from":"CSK",
        "price":"16.50 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://english.sakshi.com/visual-stories/sports/2021-03-27/1%20MS%20Dhoni%20CSK_1616788009.png"
    },
    {
        "id":5,
        "playerName":"SURESH RAINA",
        "from":"CSK",
        "price":"8.00 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/14.png"
    },
    {
        "id":6,
        "playerName":"CHRIS MORRIS",
        "from":"RR",
        "price":"16.25 Cr",
        "isPlaying":true,
        "description":"All-Rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/836.png"
    },
    {
        "id":7,
        "playerName":"GLENN MAXWELL",
        "from":"RCB",
        "price":"14.25 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/282.png"
    },
    {
        "id":8,
        "playerName":"ISHAN KISHAN",
        "from":"MI",
        "price":"2.50 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://www.mumbaiindians.com/static-assets/images/players/small/64712.png"
    },
    {
        "id":9,
        "playerName":"SHIKAR DHAWAN",
        "from":"DC",
        "price":"8.00 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://res.cloudinary.com/celebritystill/image/upload/v1523803250/ipl/shikhar-dhawan.png"
    },
    {
        "id":10,
        "playerName":"SAM CURRAN",
        "from":"CSK",
        "price":"7.50 Cr",
        "isPlaying":true,
        "description":"All-Rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/2939.png"
    },

    {
        "id":11,
        "playerName":"DEEPAK CHAHAR",
        "from":"CSK",
        "price":"8.50 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/140.png"
    },
    {
        "id":12,
        "playerName":"JASPRIT BUMRAH",
        "from":"MI",
        "price":"10.00 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/1124.png"
    },

    {
        "id":13,
        "playerName":"DINESH KARTHIK",
        "from":"KKR",
        "price":"12.00 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/102.png"
    },
    {
        "id":14,
        "playerName":"NITESH RANA",
        "from":"KKR",
        "price":"10.50 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/2738.png"
    },
    {
        "id":15,
        "playerName":"KULDEEP YADAV",
        "from":"KKR",
        "price":"8.00 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/261.png"
    },
    {
        "id":16,
        "playerName":"ANDRE RUSSELL",
        "from":"KKR",
        "price":"12.25 Cr",
        "isPlaying":true,
        "description":"All-Rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/177.png"
    },
   
    {
        "id":17,
        "playerName":"YUZAVENDRA CHAHAL",
        "from":"RCB",
        "price":"7.50 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/111.png"
    },
    {
        "id":18,
        "playerName":"NAVDEEP SIANI",
        "from":"RCB",
        "price":"8.10 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.indiatv.in/khabar-global/events/ipl-2020/players/rcb/navdeep-saini.png"
    },
    {
        "id":19,
        "playerName":"RISHABH PANT",
        "from":"DC",
        "price":"7.50 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/2972.png"
    },
    {
        "id":20,
        "playerName":"ISHANT SHARMA",
        "from":"DC",
        "price":"5.20 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://www.sakshi.com/sites/default/files/article_images/2021/04/ipl/DC/IshantSharma.png"
    },
    {
        "id":21,
        "playerName":"CHRIS WOAKES",
        "from":"DC",
        "price":"6.50 Cr",
        "isPlaying":true,
        "description":"All-Rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/967.png"
    },
    {
        "id":22,
        "playerName":"DAVID WARNER",
        "from":"SRH",
        "price":"11.00 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/170.png"
    },
    {
        "id":23,
        "playerName":"MANISH PANDEY",
        "from":"SRH",
        "price":"8.50 Cr",
        "isPlaying":false,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/123.png"
    },
    {
        "id":24,
        "playerName":"SANDEEP SHARMA",
        "from":"SRH",
        "price":"4.00 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://static.iplt20.com/players/210/1112.png"
    },
    {
        "id":25,
        "playerName":"VIJAY SHANKAR",
        "from":"SRH",
        "price":"11.50 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "playerPicUrl": "https://storage.googleapis.com/cricketimages/Players/9Q.png"
    },

    {
        "id":26,
        "playerName":"JOS BUTTLER",
        "from":"RR",
        "price":"11.25 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/509.png"
    },
    {
        "id":27,
        "playerName":"BEN STROKES",
        "from":"RR",
        "price":"14.25 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/1154.png"
    },
    {
        "id":28,
        "playerName":"RAHUL TEWATIA",
        "from":"RR",
        "price":"2.50 Cr",
        "isPlaying":true,
        "description":"Bowlwer",
        "playerPicUrl": "https://static.iplt20.com/players/210/1749.png"
    },
    {
        "id":29,
        "playerName":"KL RAHUL",
        "from":"KXIP",
        "price":"15.00 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/1125.png"
    },
    {
        "id":30,
        "playerName":"MAYANK AGARWAL",
        "from":"KXIP",
        "price":"7.50 Cr",
        "isPlaying":true,
        "description":"Batsman",
        "playerPicUrl": "https://static.iplt20.com/players/210/158.png"
    },
    {
        "id":31,
        "playerName":"DEEPAK HOODA",
        "from":"KXIP",
        "price":"8.20 Cr",
        "isPlaying":true,
        "description":"All-rounder",
        "playerPicUrl": "https://static.iplt20.com/players/210/1556.png"
    },
    {
        "id":32,
        "playerName":"RAVI BISHNOI",
        "from":"KXIP",
        "price":"8.20 Cr",
        "isPlaying":true,
        "description":"Bowler",
        "playerPicUrl": "https://storage.googleapis.com/cricketimages/Players/16E.png"
    },
    

]
localStorage.setItem("team",JSON.stringify(mObj));
localStorage.setItem("players",JSON.stringify(players))
var teamLogo = document.getElementsByClassName("team-logo")
var team = localStorage.getItem('team')==null?[]:JSON.parse(localStorage.getItem('team'))
var teamId = document.getElementsByClassName("team-id")