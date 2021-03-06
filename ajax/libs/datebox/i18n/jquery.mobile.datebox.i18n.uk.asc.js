/*
 * jQuery Mobile Framework : plugin to provide a date and time picker.
 * Copyright (c) JTSage
 * CC 3.0 Attribution.  May be relicensed without permission/notifcation.
 * https://github.com/jtsage/jquery-mobile-datebox
 *
 * Translation by: Alexander Zolotko <azolotko@gmail.com>
 *
 */

jQuery.extend(jQuery.mobile.datebox.prototype.options.lang, {
	'uk': {
		setDateButtonLabel: "&#1042;&#1089;&#1090;&#1072;&#1085;&#1086;&#1074;&#1080;&#1090;&#1080; &#1044;&#1072;&#1090;&#1091;",
		setTimeButtonLabel: "&#1042;&#1089;&#1090;&#1072;&#1085;&#1086;&#1074;&#1080;&#1090;&#1080; &#1063;&#1072;&#1089;",
		setDurationButtonLabel: "&#1042;&#1089;&#1090;&#1072;&#1085;&#1086;&#1074;&#1080;&#1090;&#1080; &#1058;&#1088;&#1080;&#1074;&#1072;&#1083;&#1110;&#1089;&#1090;&#1100;",
		calTodayButtonLabel: "&#1057;&#1100;&#1086;&#1075;&#1086;&#1076;&#1085;&#1110;",
		titleDateDialogLabel: "&#1042;&#1080;&#1073;&#1088;&#1072;&#1090;&#1080; &#1076;&#1072;&#1090;&#1091;",
		titleTimeDialogLabel: "&#1042;&#1080;&#1073;&#1088;&#1072;&#1090;&#1080; &#1095;&#1072;&#1089;",
		daysOfWeek: ["&#1053;&#1077;&#1076;&#1110;&#1083;&#1103;", "&#1055;&#1086;&#1085;&#1077;&#1076;&#1110;&#1083;&#1086;&#1082;", "&#1042;&#1110;&#1074;&#1090;&#1086;&#1088;&#1086;&#1082;", "&#1057;&#1077;&#1088;&#1077;&#1076;&#1072;", "&#1063;&#1077;&#1090;&#1074;&#1077;&#1088;", "&#1055;\\'&#1103;&#1090;&#1085;&#1080;&#1094;&#1103;", "&#1057;&#1091;&#1073;&#1086;&#1090;&#1072;"],
		daysOfWeekShort: ["&#1053;&#1076;", "&#1055;&#1085;", "&#1042;&#1090;", "&#1057;&#1088;", "&#1063;&#1090;", "&#1055;&#1090;", "&#1057;&#1073;"],
		monthsOfYear: ["&#1057;&#1110;&#1095;&#1077;&#1085;&#1100;", "&#1051;&#1102;&#1090;&#1080;&#1081;", "&#1041;&#1077;&#1088;&#1077;&#1079;&#1077;&#1085;&#1100;", "&#1050;&#1074;&#1110;&#1090;&#1077;&#1085;&#1100;", "&#1058;&#1088;&#1072;&#1074;&#1077;&#1085;&#1100;", "&#1063;&#1077;&#1088;&#1074;&#1077;&#1085;&#1100;", "&#1051;&#1080;&#1087;&#1077;&#1085;&#1100;", "&#1057;&#1077;&#1088;&#1087;&#1077;&#1085;&#1100;", "&#1042;&#1077;&#1088;&#1077;&#1089;&#1077;&#1085;&#1100;", "&#1046;&#1086;&#1074;&#1090;&#1077;&#1085;&#1100;", "&#1051;&#1080;&#1089;&#1090;&#1086;&#1087;&#1072;&#1076;", "&#1043;&#1088;&#1091;&#1076;&#1077;&#1085;&#1100;"],
		monthsOfYearShort: ["&#1057;&#1110;&#1095;", "&#1051;&#1102;&#1090;", "&#1041;&#1077;&#1088;", "&#1050;&#1074;&#1110;", "&#1058;&#1088;&#1072;", "&#1063;&#1077;&#1088;", "&#1051;&#1080;&#1087;", "&#1057;&#1077;&#1088;", "&#1042;&#1077;&#1087;", "&#1046;&#1086;&#1074;", "&#1051;&#1080;&#1089;", "&#1043;&#1088;&#1091;"],
		durationLabel: ["&#1044;&#1085;&#1110;", "&#1043;&#1086;&#1076;&#1080;&#1085;&#1080;", "&#1061;&#1074;&#1080;&#1083;&#1080;&#1085;&#1080;", "&#1057;&#1077;&#1082;&#1091;&#1085;&#1076;&#1080;"],
		durationDays: ["&#1044;&#1077;&#1085;&#1100;", "&#1044;&#1085;&#1110;"],
		tooltip: "&#1042;&#1110;&#1076;&#1082;&#1088;&#1080;&#1090;&#1080; &#1077;&#1083;&#1077;&#1084;&#1077;&#1085;&#1090; &#1074;&#1080;&#1073;&#1086;&#1088;&#1091; &#1076;&#1072;&#1090;&#1080;",
		nextMonth: "&#1053;&#1072;&#1089;&#1090;&#1091;&#1087;&#1085;&#1086;&#1075;&#1086; &#1084;&#1110;&#1089;&#1103;&#1094;&#1103;",
		prevMonth: "&#1052;&#1080;&#1085;&#1091;&#1083;&#1080;&#1081; &#1084;&#1110;&#1089;&#1103;&#1094;&#1100;",
		timeFormat: 24,
		headerFormat: '%A, %B %-d, %Y',
		dateFieldOrder: ['d','m','y'],
		timeFieldOrder: ['h', 'i', 'a'],
		slideFieldOrder: ['y', 'm', 'd'],
		dateFormat: "%d.%m.%Y",
		useArabicIndic: false,
		isRTL: false,
		calStartDay: 0,
		clearButton: "&#1071;&#1089;&#1085;&#1086;",
		durationOrder: ['d', 'h', 'i', 's'],
		meridiem: ["AM", "PM"],
		timeOutput: "%k:%M",
		durationFormat: "%Dd %DA, %Dl:%DM:%DS",
		calDateListLabel: "&#1030;&#1085;&#1096;&#1110; &#1076;&#1072;&#1090;&#1080;"
	}
});
jQuery.extend(jQuery.mobile.datebox.prototype.options, {
	useLang: 'uk'
});

