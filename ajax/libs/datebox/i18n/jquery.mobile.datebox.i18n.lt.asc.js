/*
 * jQuery Mobile Framework : plugin to provide a date and time picker.
 * Copyright (c) JTSage
 * CC 3.0 Attribution.  May be relicensed without permission/notifcation.
 * https://github.com/jtsage/jquery-mobile-datebox
 *
 * Translation by: Tadas Subonis <tadas.subonis@affecto.com>
 *
 */

jQuery.extend(jQuery.mobile.datebox.prototype.options.lang, {
	'lt': {
		setDateButtonLabel: "Data",
		setTimeButtonLabel: "Laikas",
		setDurationButtonLabel: "Trukm&#279;",
		calTodayButtonLabel: "&#352;iandiena",
		titleDateDialogLabel: "Pasirinkti dat&#261;",
		titleTimeDialogLabel: "Pasirinkite laiko",
		daysOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Tre&#269;iadienis", "Ketvirtadienis", "Penktadienis", "&#352;e&#353;tadienis"],
		daysOfWeekShort: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "Ss"],
		monthsOfYear: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegu&#382;&#279;", "Bir&#382;elis", "Liepa", "Rugpj&#363;tis", "Rugs&#279;jis", "Spalis", "Lapkritis", "Gruodis"],
		monthsOfYearShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rug", "Rgs", "Spa", "Lap", "Gru"],
		durationLabel: ["Dienos", "Valandos", "Minut&#279;s", "Sekunde&#279;s"],
		durationDays: ["Diena", "Dienos"],
		tooltip: "Atidaryti datos parinkiklis",
		nextMonth: "Atgal",
		prevMonth: "Pirmyn",
		timeFormat: 24,
		headerFormat: '%A, %B %-d, %Y',
		dateFieldOrder: ['y', 'm', 'd'],
		timeFieldOrder: ['h', 'i', 'a'],
		slideFieldOrder: ['y', 'm', 'd'],
		dateFormat: "%Y-%m-%d",
		useArabicIndic: false,
		isRTL: false,
		calStartDay: 0,
		clearButton: "Ai&#353;kus",
		durationOrder: ['d', 'h', 'i', 's'],
		meridiem: ["AM", "PM"],
		timeOutput: "%k:%M",
		durationFormat: "%Dd %DA, %Dl:%DM:%DS",
		calDateListLabel: "Kitas datas"
	}
});
jQuery.extend(jQuery.mobile.datebox.prototype.options, {
	useLang: 'lt'
});

