if (breadCount < 2 || (hamCount == 0 && tunaCount == 0)) {
	displayThisText("I'd rather be fasting tonight.");
}
else {
	if (hamCount > 0 && tunaCount > 0) {
		displayThisText("I can make a royal sandwich!");
	}
	else {
		if (hamCount > 0 && tunaCount == 0) {
			displayThisText("I can make a ham sandwich!");
		}
		else {
			displayThisText("I can make a tuna sandwich!");
		}
	}
}