 const axios = require('axios');

const Prefixes = [
  'ai',''
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "Shïsûį",
    longDescription: "AI", 
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("Obito all");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `𝐒𝐎𝐍𝐈𝐂 🍀
✧════•❁❀❁•════✧        ${answer}
✧════•❁❀❁•════✧ 𝐒𝐔𝐏𝐄𝐑 𝐒𝐎𝐍𝐈𝐂🏂`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
  }
