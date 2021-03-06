/*
 * jQuery Mobile Framework : plugin to provide a date and time picker.
 * Copyright (c) JTSage
 * CC 3.0 Attribution.  May be relicensed without permission/notifcation.
 * https://github.com/jtsage/jquery-mobile-datebox
 *
 * Translation by: Giannis Kosmas <kosmasgiannis@gmail.com>
 *
 */

jQuery.extend(jQuery.mobile.datebox.prototype.options.lang, {
	'el': {
		setDateButtonLabel: "&#922;&#945;&#952;&#959;&#961;&#953;&#963;&#956;&#972;&#962; &#919;&#956;&#949;&#961;&#959;&#956;&#951;&#957;&#943;&#945;&#962;",
		setTimeButtonLabel: "&#922;&#945;&#952;&#959;&#961;&#953;&#963;&#956;&#972;&#962; &#911;&#961;&#945;&#962;",
		setDurationButtonLabel: "&#922;&#945;&#952;&#959;&#961;&#953;&#963;&#956;&#972;&#962; &#916;&#953;&#940;&#961;&#954;&#949;&#953;&#945;&#962;",
		calTodayButtonLabel: "&#924;&#949;&#964;&#940;&#946;&#945;&#963;&#951; &#963;&#964;&#951; &#963;&#951;&#956;&#949;&#961;&#953;&#957;&#942;",
		titleDateDialogLabel: "&#917;&#960;&#953;&#955;&#941;&#958;&#964;&#949; &#951;&#956;&#949;&#961;&#959;&#956;&#951;&#957;&#943;&#945;",
		titleTimeDialogLabel: "&#917;&#960;&#953;&#955;&#941;&#958;&#964;&#949; &#964;&#951;&#957; &#974;&#961;&#945;",
		daysOfWeek: ["&#922;&#965;&#961;&#953;&#945;&#954;&#942;", "&#916;&#949;&#965;&#964;&#941;&#961;&#945;", "&#932;&#961;&#943;&#964;&#951;", "&#932;&#949;&#964;&#940;&#961;&#964;&#951;", "&#928;&#941;&#956;&#960;&#964;&#951;", "&#928;&#945;&#961;&#945;&#963;&#954;&#949;&#965;&#942;", "&#931;&#940;&#946;&#946;&#945;&#964;&#959;"],
		daysOfWeekShort: ["&#922;&#965;", "&#916;&#949;", "&#932;&#961;", "&#932;&#949;", "&#928;&#949;", "&#928;&#945;", "&#931;&#945;"],
		monthsOfYear: ["&#921;&#945;&#957;&#959;&#965;&#940;&#961;&#953;&#959;&#962;", "&#934;&#949;&#946;&#961;&#959;&#965;&#940;&#961;&#953;&#959;&#962;", "&#924;&#940;&#961;&#964;&#953;&#959;&#962;", "&#913;&#960;&#961;&#943;&#955;&#953;&#959;&#962;", "&#924;&#940;&#953;&#959;&#962;", "&#921;&#959;&#973;&#957;&#953;&#959;&#962;", "&#921;&#959;&#973;&#955;&#953;&#959;&#962;", "&#913;&#973;&#947;&#959;&#965;&#963;&#964;&#959;&#962;", "&#931;&#949;&#960;&#964;&#941;&#956;&#946;&#961;&#953;&#959;&#962;", "&#927;&#954;&#964;&#974;&#946;&#961;&#953;&#959;&#962;", "&#925;&#959;&#941;&#956;&#946;&#961;&#953;&#959;&#962;", "&#916;&#949;&#954;&#941;&#956;&#946;&#961;&#953;&#959;&#962;"],
		monthsOfYearShort: ["&#921;&#945;&#957;", "&#934;&#949;&#946;", "&#924;&#945;&#961;", "&#913;&#960;&#961;", "&#924;&#940;&#953;", "&#921;&#959;&#973;&#957;", "&#921;&#959;&#973;&#955;", "&#913;&#973;&#947;", "&#931;&#949;&#960;", "&#927;&#954;&#964;", "&#925;&#959;&#941;", "&#916;&#949;&#954;"],
		durationLabel: ["&#919;&#956;&#941;&#961;&#949;&#962;", "&#911;&#961;&#949;&#962;", "&#923;&#949;&#960;&#964;&#940;", "&#916;&#949;&#965;&#964;&#949;&#961;&#972;&#955;&#949;&#960;&#964;&#945;"],
		durationDays: ["&#919;&#956;&#941;&#961;&#945;", "&#919;&#956;&#941;&#961;&#949;&#962;"],
		tooltip: "&#902;&#957;&#959;&#953;&#947;&#956;&#945; &#949;&#960;&#953;&#955;&#959;&#947;&#942; &#951;&#956;&#949;&#961;&#959;&#956;&#951;&#957;&#943;&#945;&#962;",
		nextMonth: "&#917;&#960;&#972;&#956;&#949;&#957;&#959;&#962; &#956;&#942;&#957;&#945;&#962;",
		prevMonth: "&#928;&#961;&#959;&#951;&#947;&#959;&#973;&#956;&#949;&#957;&#959; &#956;&#942;&#957;&#945;",
		timeFormat: 24,
		headerFormat: '%A, %B %-d, %Y',
		dateFieldOrder: ['d','m','y'],
		timeFieldOrder: ['h', 'i', 'a'],
		slideFieldOrder: ['y', 'm', 'd'],
		dateFormat: "%d/%m/%Y",
		useArabicIndic: false,
		isRTL: false,
		calStartDay: 0,
		clearButton: "&#931;&#945;&#966;&#942;&#962;",
		durationOrder: ['d', 'h', 'i', 's'],
		meridiem: ["AM", "PM"],
		timeOutput: "%k:%M",
		durationFormat: "%Dd %DA, %Dl:%DM:%DS",
		calDateListLabel: "&#902;&#955;&#955;&#949;&#962; &#951;&#956;&#949;&#961;&#959;&#956;&#951;&#957;&#943;&#949;&#962;"
	}
});
jQuery.extend(jQuery.mobile.datebox.prototype.options, {
	useLang: 'el'
});

