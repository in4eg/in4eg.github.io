var days = [
			"Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday", "Sunday"
		],
		daysShort = [
			"Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"
		],
		months = [
			"January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
		],
		monthsShort = [
			"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
		];

moment.updateLocale('en', {
	week: {
		dow: 1
	}
});

Vue.component('month', {
	data: function(){
		return {
			calendar: [],
			dayNames: days,
			monthNames: months,
			monthNamesShort: monthsShort,
			daysNamesShort: daysShort,
		}
	},
	methods: {
		isInMonth: function(day){
			return moment(day).isSame(this.month, 'month');
		},
		isDayIsStart: function(day){
			if (this.startDay && this.endDay){
				return day.clone().dayOfYear() === this.startDay.clone().add(1, 'day').dayOfYear();
			}
			return false;
		},
		isDayIsEnd: function(day){
			if (this.startDay && this.endDay){
				return day.clone().dayOfYear() === this.endDay.clone().subtract(1, 'day').dayOfYear();
			}
			return false;
		},
		isActiveDayOfWeek: function(dayIndex){
			dayIndex += 1;
			if (dayIndex > 6) dayIndex = 0;
			if (this.startDay && this.endDay){
				return (
					((this.month.month() === this.startDay.month()) && (this.startDay.day() === dayIndex)) ||
					((this.month.month() === this.endDay.month()) && (this.endDay.day() === dayIndex))
				);
			}
			return false;
		},
		activateDay: function(day){
			this.$emit('start', day);
		},
		isFirstOfMonth: function(day){
			return day.clone().format('D') === '1';
		},
		isLastOfMonth: function(day){
			return day.clone().date() == day.clone().endOf('month').date();
		}
	},
	props: ['month', 'startDay', 'endDay'],
	events: ['start', 'end', 'today'],
	created: function(){
		var startWeek = this.month.startOf('month').week();
		var endWeek = this.month.endOf('month').week();
		var calendar = [];
		var startDay = this.month.clone().startOf('month').startOf('week');
		var endDay = this.month.clone().endOf('month').endOf('week');
		var date = startDay.clone().subtract(1, 'day');
		var $this = this;
		while (date.isBefore(endDay, 'day')) {
			calendar.push({
				days: Array(7).fill(0).map(function(){
					var day = date.add(1, 'day').clone();
					if (day && day.isSame(moment(), 'day')){
						$this.$emit('today', day);
					}
					return day;
				})
			})
		}
		this.calendar = calendar;
	},
	beforeUpdate: function(data){

	},
	template: `
		<table>
			<caption><span class="month">{{monthNames[month.month()]}} </span> {{month.year()}}</caption>
			<thead>
				<th v-for="(day, dayIndex) in daysNamesShort" v-bind:class="{active: isActiveDayOfWeek(dayIndex)}">{{day}}</th>
			</thead>
			<tbody>
				<tr v-for="(week, weekIndex) in calendar">
					<td v-for="(day, dayIndex) in week.days"
						v-bind:class="{
							active: day === startDay || day === endDay,
							highlighted: day > startDay && day < endDay,
							start: (day === startDay && endDay) || (day > startDay && dayIndex === 0 && endDay),
							end: (day === endDay) || (day < endDay && dayIndex === 6),
							first: isFirstOfMonth(day),
							last: isLastOfMonth(day)
						}"
					>
						<span class="day" v-if="isInMonth(day, month)"
							v-on:click="activateDay(day)"
						>{{day.format('D')}}</span>
					</td>
				</tr>
			</tbody>
		</table>
	`
})

Vue.component('calendar', {
	data: function(){
		return {
			isActive: false,
			months: [],
			activeMonth: 0,
			monthsRange: [0,1],
			date: moment(),
			today: null,
			dayNames: days,
			monthNames: months,
			monthNamesShort: monthsShort,
			startDay: null,
			endDay: null,
			scrolled: null,
			monthsExpanded: false
		}
	},
	props: ['model', 'output', 'single', 'header'],
	events: ['change'],
	methods: {
		setMonth: function(index){
			this.activeMonth = index;
			if (index % 2 === 0) {
				this.monthsRange.splice(0, 1, index);
				this.monthsRange.splice(1, 1, index+1);
			} else {
				this.monthsRange.splice(0, 1, index-1);
				this.monthsRange.splice(1, 1, index);
			}
			if (this.scrolled){
				this.scrolled.animate({
					scrollTop: $('.months > li').eq(this.activeMonth).position().top + this.scrolled.scrollTop() - 30
				}, 300);
			}
			this.hideMonths();
		},
		setDay: function(day){
			if (this.single){
				this.startDay = day;
				this.$emit('change', {
					start: day,
					end: null
				})
				// console.log(day)
				$('#'+this.model).val(day.format('MMM DD'));
				$('#'+this.output).text(day.format('MMM DD'));
				return;
			}
			// console.log(day);
			if (this.startDay && this.endDay){
				this.startDay = null;
				this.endDay = null;
			}
			if (!this.startDay){
				this.startDay = day;
			} else if (!this.endDay){
				this.endDay = day;
			}
			// reverse if needed
			if (this.startDay && this.endDay && this.startDay > this.endDay){
				var temp = this.startDay,
						temp2 = this.endDay;
				this.startDay = temp2;
				this.endDay = temp;
			}
			// this.startDay && this.endDay
			if (this.startDay){
				this.$emit('change', {
					start: this.startDay,
					end: this.endDay
				})
				// console.log(this.model)
				$('#'+this.model).val(this.startDay.format('MMM DD')+" ― "+(this.endDay ? this.endDay.format('MMM DD') : '')).trigger('change').trigger('input');
				$('#'+this.output).text(this.startDay.format('MMM DD')+" ― "+(this.endDay ? this.endDay.format('MMM DD') : ''));
				// var $this = this;
				// setTimeout(function(){
				// 	$this.hide();
				// }, 500);
				// this.date = event.start.format('MMM DD')+" ― "+event.end.format('MMM DD');
			}
		},
		clear: function(){
			this.startDay = null;
			this.endDay = null;
			this.$emit('change', {
				start: this.startDay,
				end: this.endDay
			})
		},
		show: function(){
			this.isActive = true;
		},
		hide: function(){
			this.isActive = false;
		},
		showMonths: function(){
			this.monthsExpanded = true;
		},
		hideMonths: function(){
			this.monthsExpanded = false;
		},
		toggleMonths: function(){
			this.monthsExpanded = !this.monthsExpanded;
		},
		setupToday: function(day){
			this.today = day;
		},
		setToday: function(){
			this.setDay(this.today);
			// console.log(this.months[0])
		}
	},
	created: function(){
		// this.
		for (var i = 0; i < 12; i++){
			this.months.push(moment().add(i, 'months'));
		}
	},
	mounted: function(){
		this.scrolled = $(this.$el).find('.scrolled');
		if ($(document).width() > 768){
			this.scrolled.perfectScrollbar();
		}
		$this = this;
		$('body').on('click', function(e){
			// console.log(e.target)
			if ($(e.target).closest('#date-range-parent, .calendar').length === 0){
				$this.hide();
			}
		})
		$('#'+this.model).focus(function(){
			$this.show();
		})
	},
	template: `
		<div class="calendar" v-bind:class="{active: isActive}">
			<div class="header" v-if="header">
				<div class="date" v-bind:class="{active: startDay}">
					<i class="icon icon-fly-up"></i>Outbound 
					{{startDay ? startDay.format('MMMM DD, ddd') : '-'}}
				</div>
				<div class="divider" v-bind:class="{active: startDay && endDay}">
					<div class="circle"></div>
					<div class="line"></div>
					<div class="circle"></div>
				</div>
				<div class="date" v-bind:class="{active: endDay}">
					<i class="icon icon-fly-return"></i>Return 
					{{endDay ? endDay.format('MMMM DD, ddd') : '-'}}
				</div>
			</div>
			<div class="sidebar">
				<div class="sm-hide">
					<button class="btn btn-block" type="button" v-on:click="toggleMonths()"  v-bind:class="{active: monthsExpanded}">
						{{monthNames[months[monthsRange[0]].month()]}} {{months[monthsRange[0]].year()}}
					</button>
				</div>
				<div class="months-wrapper" v-bind:class="{open: monthsExpanded}">
					<ul class="clear months-list">
						<li v-for="(month, index) in months" v-on:click="setMonth(index)"
							v-bind:class="{active: index === monthsRange[0] || index === monthsRange[1]}"
						>
							<span class="month">{{monthNames[month.month()]}}</span> <span class="sm-hide">{{month.year()}}</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="body" v-bind:class="{collapsed: !header}">
				<div class="scrolled">
					<ul class="clear months">
						<li v-for="(month, index) in months" v-on:click="setMonth(index)"
							v-bind:class="{active: index === monthsRange[0] || index === monthsRange[1]}"
						>
							<month
								v-bind:month="month.clone()"
								v-bind:startDay="startDay"
								v-bind:endDay="endDay"
								v-on:start="setDay($event)"
								v-on:today="setupToday($event)"
							></month>
						</li>
					</ul>
				</div>
			</div>
		</div>
	`
})