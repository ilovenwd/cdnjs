/*
 * jQuery Mobile Framework : plugin to provide a date and time picker.
 * Copyright (c) JTSage
 * CC 3.0 Attribution.  May be relicensed without permission/notifcation.
 * https://github.com/jtsage/jquery-mobile-datebox
 *
 * Translation by: tiratat.patana-anake <tiratat.patana-anake@accenture.com>
 *
 */

jQuery.extend(jQuery.mobile.datebox.prototype.options.lang, {
	'th': {
		setDateButtonLabel: "เลือกวัน",
		setTimeButtonLabel: "เลือกเวลา",
		setDurationButtonLabel: "เลือกระยะเวลา",
		calTodayButtonLabel: "กลับไปวันนี้",
		titleDateDialogLabel: "เลือกวัน",
		titleTimeDialogLabel: "เลือกเวลา",
		daysOfWeek: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์"],
		daysOfWeekShort: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
		monthsOfYear: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
		monthsOfYearShort: ["ม.ค.", "ก.พ.", "มี.ค.", "ม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
		durationLabel: ["วัน", "ชั่วโมง", "นาที", "วินาที"],
		durationDays: ["วัน", "วัน"],
		tooltip: "เปิดตัวเลือกวัน",
		nextMonth: "เดือนต่อไป",
		prevMonth: "เดือนก่อน",
		timeFormat: 24,
		headerFormat: 'วัน%Aที่ %-d %B %Y',
		dateFieldOrder: ['d','m','y'],
		timeFieldOrder: ['h', 'i', 'a'],
		slideFieldOrder: ['y', 'm', 'd'],
		dateFormat: "%d/%m/%Y",
		useArabicIndic: false,
		isRTL: false,
		calStartDay: 0,
		clearButton: "ลบ",
		durationOrder: ['d', 'h', 'i', 's'],
		meridiem: ["AM", "PM"],
		timeOutput: "%k:%M",
		durationFormat: "%Dd %DA, %Dl:%DM:%DS",
		calDateListLabel: "วันอื่น ๆ"
	}
});
jQuery.extend(jQuery.mobile.datebox.prototype.options, {
	useLang: 'th'
});

