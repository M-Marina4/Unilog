class LanguageSelector {
	setLang(lang)
	{
		l = lang.toLowerCase();
		localStorage.setItem('lang', l);
		return true;
	}
	getLang()
	{
		let lang = localStorage.getItem('lang');
		if (lang != null) {
			return lang;
		} else {
			return 'en';
		}
	}
	removeLang()
	{
		localStorage.removeItem('lang');
		return true;
	}
	loadLang()
	{	
		let l = this.getLang();
		let strs = lang[l];
		return strs;
	}
	parse(language) {
		let lang = loadLang(language);
		Object.entries(lang).forEach(([key, value]) => {
			document.querySelectorAll(key).innerHTML = value;
		});
	}
	
}

export {LanguageSelector}
