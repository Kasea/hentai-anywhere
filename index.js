const site = {
	"hh": "https://hentaihaven.org",
	"hm": "http://hentaimama.com/",
	"ph": "https://pornhub.com"
};

const defaultSite = "hh";

const Command = require('command');

module.exports = function hentaiAnywhere(dispatch) {
	const command = Command(dispatch);
	
	command.add(["lewd", "hentai", "porn"], (key)=>{
		if(key == undefined)
			key = defaultSite;
		
		dispatch.toClient("S_SHOW_AWESOMIUMWEB_SHOP", {
			unk: 104,
			url: site[key]
		});
	});
	
}