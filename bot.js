const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$' ; 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'خالد') {
    msg.reply('لبية امرني :kissing_heart: ');
  }
});



//////////// الرد التلقائي /////////////

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply(' *وعليكم السلام ورحمة الله وبركاتة* ');
  }
});
 
 client.on('message', msg => {
  if (msg.content === 'الو') {
    msg.reply(' *يا هلا ومــــــــــرحـــــــباء مليون* ');
  }
});


client.on('message', msg => {
  if (msg.content === 'باك ') {
    msg.reply(' *أحلاء ولكم لأطلق شنب* ');
  }
});



client.on('message', msg => {
  if (msg.content === ' الوو ') {
    msg.reply(' مرحباء مليون ');
  }
});

lient.on('message', msg => {
  if (msg.content === ' back ') {
    msg.reply(' *Welcome* ');
  }
});



lient.on('message', msg => {
  if (msg.content === ' @khalid ') {
    msg.reply(' يا ابن الحلا لا تمنشن ما يحتاج ');
  }
});



lient.on('message', msg => {
  if (msg.content === ' يا ورع ') {
    msg.reply(' لا تسوب ');
  }
});




lient.on('message', msg => {
  if (msg.content === ' يهوه ') {
    msg.reply(' يا واد ');
  }
});



lient.on('message', msg => {
  if (msg.content === ' يا حلو ') {
    msg.reply(' يا قمر أنت ');
  }
});


 //////////////////////////ارسال رسالة في الشات بانبد  وردون /////////////////////////////////////////




var Prefix = "$";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "say2") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});




 //////////////////////يثبت البوت داخل روم/////////////////////////////////////


client.on('ready', () => {
var x = client.channels.get("502797689474383872");
if (x) x.join();
});



	///////////////////////////////كلمات ممنوعة ////////////////////////////////////
	  
client.on('message', msg => {
  if (msg.content === 'كل زق') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});




/////////////////////////////////كود حالة البةت/////////////////////////////////



client.on('ready', function(){    
    var ms = 40000 ;    
    var setGame = ['  لا إله إلا الله','  و محمد رسول الله  '];    
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);    
}, ms);    
    
});


////////////////////////////يعرض عدد اعضاء السيرفر///////////////////////////////////////
	  

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='اعضاء')
      var SaifDz = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(SaifDz);
    });
    
    /////////////////////////////يرسل رابط لدعودة البوت بالخاص/////////////////////////////////////

  
	  client.on('message', message => {
  if (true) {
if (message.content === 'po') {
      message.author.send('  https://goo.gl/eNPKRy  |  تفضل ربط البوت  AsH_DisMTA   ').catch(e => console.log(e.stack));
 
    }
   }
  });
 
 
client.on('message', message => {
     if (message.content === ".invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص AsH_DisMTA")
     
     
     
  message.channel.sendEmbed(embed);
    }
});


//////////////////////////كود عرض البنق/////////////////////////////////////////
	  

client.on('message', message => {
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});



////////////////////////////////كود لون متغير//////////////////////////////////



client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "VIP", // اسم الرتبة
      guildid: "511837858785525770", // اي دي السيرفر
      sec: 0.5 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});
/////////////////////////////////////////////////////////////





client.login(process.env.BOT_TOKEN);
