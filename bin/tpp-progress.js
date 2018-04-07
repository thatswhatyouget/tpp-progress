function getLeft(t){return parseInt(t.style.left.replace("px",""))}function getWidth(t){return t.offsetWidth}function findImage(t){return $find([t],"img").pop().pop()||new Image}function marginTop(t){return parseInt((t.style.marginTop||"0").replace("/(px)|(em)/g",""))||0}function makeGrid(t){var e=document.createElement("canvas");e.height=1,e.width=t/2;var a=e.getContext("2d");return a.strokeStyle="darkgray",a.moveTo(t/2,-1),a.lineTo(t/2,2),a.stroke(),e.toDataURL()}function createCharts(t){QueryString.only&&(t=t.filter(function(t){return QueryString.only.split(",").filter(function(e){return t.Name.indexOf(e.trim())>=0}).length>0})),QueryString.run&&(t=t.map(function(t){return t.Runs=t.Runs.filter(function(t){return QueryString.run.split(",").filter(function(e){return t.RunName.indexOf(e.trim())>=0}).length>0}),t}).filter(function(t){return t.Runs.length>0})),pageData=t.filter(function(t){return t.Runs.filter(function(t){return t.StartTime<Date.now()/1e3}).length>0}),pageData.forEach(createChart),setTimeout(function(){return updatePage()},1)}function createChart(t){var e=document.createElement("div");e.className="progressChart",e.setAttribute("data-label",t.Name),setUniqueId(e,t.Name),e.setAttribute("data-scale",TPP.Scale[t.Scale]);var a=parseInt(QueryString.offset||"0")+(t.Offset||0);a&&e.setAttribute("data-offset",a.toString());var n=fakeQuery(".charts")[0]||document.body;setTimeout(function(){return n.appendChild(e)},1);var r=new Duration(0);t.Runs.filter(function(t){return t.StartTime<Date.now()/1e3}).forEach(function(a){Duration.parse(a.EndDate||a.Duration,a.StartTime).TotalSeconds>Date.now()/1e3-a.StartTime&&(a.Duration=(new Date).toISOString(),a.Ongoing=!0);var n=Duration.parse(a.EndDate||a.Duration,a.StartTime);r.TotalSeconds<n.TotalSeconds&&(r=n),e.appendChild(queueRun(a,t.Scale))});var i=document.createElement("div");i.className="ruler",e.insertBefore(i,e.firstChild);for(var o=r.TotalTime(t.Scale),s=0;s<=o+1;s++){var d=document.createElement("div");i.appendChild(d),d.className="stop",d.setAttribute("data-scale",TPP.Scale[t.Scale])}}function reprocessCharts(t){void 0===t&&(t=pageData),t.forEach(function(t){return t.Runs.filter(function(t){return t.StartTime<Date.now()/1e3}).forEach(function(t){return queueRun(t)})})}function queueRun(t,e){return void 0===e&&(e=TPP.Scale.Days),t.Element=t.Element||document.createElement("div"),t.Hidden=settings.hideUnfinished&&t.Unfinished&&!t.Ongoing,t.Hidden?t.Element.classList.add("hidden"):t.Element.hasAttribute("data-label")?t.Element.classList.remove("hidden"):t.Scraper?Scrape(t).then(function(a){return drawRun(a,t.Element,e)},console.error):setTimeout(function(){return drawRun(t,t.Element,e)},0),t.Element}function drawRun(t,e,a,n){void 0===a&&(a=TPP.Scale.Days),void 0===n&&(n=!0),e=e||document.createElement("div"),e.className="run",t.Ongoing&&(e.className+=" ongoing"),t.Class&&(e.className+=" "+t.Class),t.Region&&(e.className+=" "+cleanString(t.Region));var r=Duration.parse(t.Duration,t.StartTime);return t.Duration=r.toString(TPP.Scale.Weeks),e.setAttribute("data-duration",t.Duration),e.setAttribute("data-endtime",Duration.parse(t.EndDate||t.Duration,t.StartTime).toString(TPP.Scale.Weeks)),e.setAttribute("data-start",t.StartTime.toString()),e.setAttribute("data-label",t.RunName+": "+r.toString(a)),e.setAttribute("data-startDate",new Date(t.StartDate).toISOString().replace(/-/g,"/").replace(/T/," ").replace(/:\d+\.\d+/,"").replace(/Z/," UTC")),e.style.backgroundColor=t.ColorPrimary,e.style.backgroundImage=t.BackgroundImage,e.style.borderColor=e.style.color=t.ColorSecondary,setUniqueId(e,t.RunName),t.HostImage&&t.HostName&&e.appendChild(drawHost(t,a)),n&&(t.Events.filter(function(e){return Duration.parse(e.Time,t.StartTime).TotalSeconds>=0}).sort(function(e,a){return Duration.parse(e.Time,t.StartTime).TotalSeconds-Duration.parse(a.Time,t.StartTime).TotalSeconds}).forEach(function(n){return e.appendChild(drawEvent(n,t,a))}),t.Events.forEach(function(t){return delete t.New}),drawVideos(t,e,a),setTimeout(function(){return updateRun(t,e,a)},9e5),drawConcurrentRuns(t,e,a)),$(e).on("click",function(e){e.shiftKey?($(this).hide(),$(this).siblings(".run:visible").is("*")||$(this).parent().hide()):(e.ctrlKey||e.metaKey)&&console.log(JSON.stringify(t))}),setTimeout(function(){return scaleRun(e)},0),e}function updateRun(t,e,a){t.Scraper&&t.Ongoing&&(Scrape(t).then(function(n){var r=Duration.parse(t.Duration,t.StartTime).toString(a);console.log("Updating "+t.RunName+" to "+r),e.setAttribute("data-duration",r),e.setAttribute("data-endtime",Duration.parse(t.EndDate||t.Duration,t.StartTime).toString(TPP.Scale.Weeks)),e.setAttribute("data-label",t.RunName+": "+Duration.parse(t.Duration,t.StartTime).toString(a)),t.Events.filter(function(t){return t.New}).forEach(function(n){return e.appendChild(drawEvent(n,t,a))}),scaleRun(e),$(e).find(".videos a").is("*")&&drawVideos(t,e,a,Twitch.GetVideos("twitchplayspokemon",!1))}),setTimeout(function(){return updateRun(t,e,a)},9e5))}function setUniqueId(t,e){for(var a=e=cleanString(e),n=1;document.getElementById(e);e=a+n++);t.setAttribute("id",e),t.classList.add(a)}function drawHost(t,e){var a=drawEvent({Group:"Hosts",Name:t.HostName,Image:t.HostImage,ImageSource:t.HostImageSource,Time:""},t,e);return a.style.left="0",a}function drawConcurrentRuns(t,e,a){if(t.ContainsRunsFrom&&t.ContainsRunsFrom.length){var n=Duration.parse(t.Duration),r=t.StartTime+n.TotalSeconds,i=new Array;tppData.filter(function(e){return t.ContainsRunsFrom.indexOf(e.Name)>=0}).map(function(e){return e.Runs.filter(function(e){return t!=e&&t.StartTime<=e.StartTime&&r>e.StartTime}).forEach(function(r){var o=document.createElement("div"),s=Duration.parse(r.StartDate,t.StartTime),d=Duration.parse(r.Duration,r.StartTime);o.setAttribute("data-time",s.toString(TPP.Scale.Weeks)),i.push({time:s.TotalSeconds,div:o}),drawRun(r,o,a,!1),d.TotalSeconds+s.TotalSeconds>=n.TotalSeconds&&(d.TotalSeconds=n.TotalSeconds-s.TotalSeconds,o.setAttribute("data-duration",d.toString(TPP.Scale.Weeks)),o.setAttribute("data-endtime",d.toString(TPP.Scale.Weeks))),d.TotalSeconds+=s.TotalSeconds,o.classList.add("inner"+cleanString(r.RunName)),o.setAttribute("data-label",(e.SingularName||e.Name)+"\n"+r.RunName+"\nStarted: "+s.toString(a)+(r.Ongoing?"":"\nEnded: "+d.toString(a)))})}),i.sort(function(t,e){return t.time-e.time}).forEach(function(t){return e.appendChild(t.div)})}}function drawEvent(t,e,a){delete t.New;var n=t.Group.replace(/[^A-Z0-9-]/gi,"").toLowerCase(),r=document.createElement("div"),i=document.createElement("img");r.classList.add("event"),t.Class&&t.Class.split(" ").forEach(function(t){return r.classList.add(t.replace(/[^A-Z0-9-]/gi,"").toLowerCase())}),"pokemon"!=t.Group.toLowerCase()||t.Image||r.classList.add("pokesprite"),r.classList.contains("pokesprite")&&r.classList.add(t.Name.replace(/[^A-Z0-9-]/gi,"").toLowerCase()||"missingno");var o=t.Image||"img/missingno.png";if(t.ImageSource){var s=document.createElement("a");r.appendChild(s),s.appendChild(i),s.setAttribute("href",t.ImageSource),s.setAttribute("target","_blank")}else r.appendChild(i);r.classList.add(n);var d=Duration.parse(t.Time,e.StartTime),u=t.Name;if(t.Time&&(u+="\n"+d.toString(a)),t.Estimate&&(u+="\n(estimated)"),t.Attempts&&(u+="\n("+t.Attempts+" Attempt"+(t.Attempts>1?"s":"")+")"),i.src=o,i.alt=u,r.setAttribute("data-label",u),r.setAttribute("data-time",d.toString(TPP.Scale.Weeks)),showGroups[n]===!1&&r.classList.add("hidden"),groups[n]=t.Group,t.Party){var l=drawHallOfFame(t,e,a);l.classList.add("extra"),r.appendChild(l)}return r}function drawHallOfFame(t,e,a){void 0===a&&(a=TPP.Scale.Days);var n=$("<div class='hallOfFameDisplay'>");n.addClass(cleanString(e.RunName)+" "+(e.Class||"")+" "+(e.BaseGame||"")),n.css("background-color",e.ColorPrimary),n.css("border-color",e.ColorSecondary);var r=new Date(1e3*(Duration.parse(t.Time,e.StartTime).TotalSeconds+e.StartTime));n.append($("<h3>").text(t.Name+" - "+r.toLocaleDateString())),n.append($("<h4>").text(Duration.parse(t.Time,e.StartTime).toString(a))),t.Attempts&&n.append($("<h5>").text(t.Attempts+" Attempts")),n.append($("<img>").attr("src",t.Image));var i=$("<tr>").appendTo($("<table>").appendTo(n)),o=$("<div class='entry host'>").appendTo($("<td>").appendTo(i)),s=$("<img>").attr("src",e.HostImage).attr("alt",e.HostName).attr("title",e.HostName);e.HostImageSource&&(s=$("<a>").attr("href",e.HostImageSource).append(s)),o.append(s);var d=$('<div class="info">').append($('<div class="name">').text(e.HostName)).appendTo(o);t.IDNo&&d.append($('<div data-entry="IDNo">').text(t.IDNo)),t.Party.forEach(function(t){var e=(t.Nickname||t.Pokemon).replace(/\s/g,"&nbsp;"),a=$("<div class='entry'>").addClass((t.Gender||"").toLowerCase());a.append($("<span class='level'>").text(t.Level)),a.append($("<div class='pokesprite'><img src='img/missingno.png'/></div>").addClass(cleanString(t.Pokemon)).addClass(t.Shiny?"shiny":"").addClass((t.Gender||"").toLowerCase()).addClass(t.Class).addClass(cleanString(t.Form||"")).attr("title",t.Pokemon));var n=$("<div class='info'>").append($("<div class='name'>").html(e)).appendTo(a);if(t.Number){var r=t.Number.toString(),o=("000"+r).substring(r.length);n.append($("<div data-entry='"+o+"'>").text(t.Pokemon))}t.Met&&n.append($("<div data-entry='Met'>").text(t.Met)),t.Type1&&n.append($("<div data-entry='Type 1'>").text(t.Type1)),t.Type2&&n.append($("<div data-entry='Type 2'>").text(t.Type2)),t.OT&&n.append($("<div data-entry='OT'>").text(t.OT)),t.IDNo&&n.append($("<div data-entry='IDNo'>").text(t.IDNo)),i.append($("<td>").append(a))});for(var u=t.Party.length;u<6;u++)$("<div class='entry'>").appendTo($("<td>").appendTo(i));return n.get(0)}function applyScale(t){globalPpd=t=Math.pow(2,Math.floor(Math.log(t||globalPpd||64)/Math.log(2))),fakeQuery(".progressChart").forEach(function(e){e.style.backgroundImage='url("'+makeGrid(t)+'")',$(e).find(".run:not(.hidden)").is("*")?e.classList.remove("hidden"):e.classList.add("hidden")}),$find(fakeQuery(".progressChart .ruler"),".stop").forEach(function(e){return e.forEach(function(e,a){var n=parseFloat($(e).parents(".progressChart").data("offset")||"0");e.style.left=(a+n)*t+"px"})}),fakeQuery(".progressChart > .run").forEach(function(e){return scaleRun(e,t)})}function scaleRun(t,e){if(!$(t).is(".hidden")){$(t).parents(".hidden").removeClass("hidden"),e=e||globalPpd;var a=TPP.Scale[t.parentElement.getAttribute("data-scale")]||TPP.Scale[t.parentElement.parentElement.getAttribute("data-scale")]||0,n=settings.postgame?"data-endtime":"data-duration",r=Duration.parse(t.getAttribute(n));t.getAttribute(n)&&(t.style.width=r.TotalTime(a)*e+"px");var i=$find([t],".run").pop(),o=$find([t],".event").pop().filter(function(e){return!e.classList.contains("hidden")&&e.parentElement==t}),s=$find([t],".videos a").pop();[].concat(o).concat(i).concat(s).forEach(function(t){if(t.getAttribute("data-time")){var i=Duration.parse(t.getAttribute("data-time"));t.style.left=i.TotalTime(a)*e+"px",t.style.display=!settings.postgame&&!$(t).parents(".run").is(".ongoing")&&i.TotalSeconds>r.TotalSeconds?"none":"block"}t.getAttribute(n)&&(t.style.width=Duration.parse(t.getAttribute(n)).TotalTime(a)*e+"px");var o=findImage(t);o&&(o.style.marginTop=t.style.marginTop="0")}),staggerStackedRuns(i,t.offsetHeight),settings.explode&&staggerStackedEvents(o.filter(function(t){return"none"!=t.style.display}),t.offsetHeight);var d=parseFloat($(t).parents(".progressChart").data("offset")||"0");t.style.marginLeft=d*e+"px",$(t).find(".hosts").first().css("margin-left",-d*e+"px")}}function staggerStackedRuns(t,e){var a=-(e/2-2);t.forEach(function(e,n){function r(t){var a=Duration.parse(t.getAttribute("data-time")).TotalSeconds,n=a+Duration.parse(t.getAttribute("data-duration")).TotalSeconds;(o<=a&&s>a||o<n&&s>=n)&&(i>0&&(t.style.marginTop=i+"px"),i<0&&(e.style.marginTop=-i+"px"),t.style.height=e.style.height=Math.abs(i)+"px")}var i=a*=-1,o=Duration.parse(e.getAttribute("data-time")).TotalSeconds,s=o+Duration.parse(e.getAttribute("data-duration")).TotalSeconds;t[n-1]&&r(t[n-1]),t[n+1]&&r(t[n+1])})}function staggerStackedEvents(t,e){var a=.1;[t.filter(function(t){return t.className.indexOf("pokemon")<0&&t.className.indexOf("halloffame")<0}),t.filter(function(t){return t.className.indexOf("pokemon")>=0})].forEach(function(t){var n=function(t,a){return a?25:getWidth(t)||e};t.forEach(function(e,r){function i(t){var e=findImage(t),a=n(e,s),r=getLeft(t)-a/2;r+a>l&&r<l+u&&(e.style.marginTop=marginTop(e)-(r+a-l)*o+"px",d.style.marginTop=marginTop(d)+(r+a-l)*o+"px",d.style.zIndex=o>0?"1":"0")}var o=a*=-1;if(0!=r){var s=e.className.indexOf("pokemon")>=0,d=findImage(e),u=n(d,s),l=getLeft(e)-u/2;r>1&&t[r-1]&&i(t[r-1]),t[r+1]&&i(t[r+1])}})}),findImage(t[0]).style.marginTop="0",$(t[0]).parents(".run").is(".ongoing")||(findImage(t[t.length-1]).style.marginTop="0")}function updatePage(t){void 0===t&&(t=globalPpd),pageUpdateTimeout&&clearTimeout(pageUpdateTimeout),pageUpdateTimeout=setTimeout(function(){setTimeout(function(){return applyScale(t)},0);var e=fakeQuery(".groups input").map(function(t){return t.id.split("-").pop()})||[],a=fakeQuery(".groups ul").pop();Object.keys(groups).filter(function(t){return e.indexOf(t)<0}).forEach(function(t){var e=document.createElement("li"),n=document.createElement("input"),r=document.createElement("label");e.appendChild(n),e.appendChild(r),a.appendChild(e),n.type="checkbox",r.htmlFor=n.id="group-"+t,n.checked=showGroups[t]!==!1,r.innerText=groups[t],n.onchange=function(){return toggleGroup(n)}})},0)}function drawVideos(t,e,a,n){void 0===n&&(n=videos);var r=$('<div class="videos">').appendTo(e);n.then(function(n){return n.filter(function(e){return e.StartTime<t.StartTime+new Duration(t.Duration).TotalSeconds&&e.EndTime>t.StartTime}).forEach(function(n){var i=n.StartTime-t.StartTime,o=0,s=n.length,d=new Duration(0),u=new Duration(0),l=t.StartTime+new Duration(t.Duration).TotalSeconds;n.StartTime<t.StartTime&&(i=0,s-=o=t.StartTime-n.StartTime),n.EndTime>l&&!t.Ongoing&&(s-=n.EndTime-l),d.TotalSeconds=i,u.TotalSeconds=s;var c=$(e).find('.videos a[href="'+n.url+'"]');c.is("*")||(c=$("<a target='_blank'>").addClass(n.source.toLowerCase()).attr("href",n.url).appendTo(r).mousemove(function(t){var e=new Duration(0),r=new Duration(0),i=Math.abs(t.pageX-$(this).offset().left)/$(this).width(),s=Duration.parse($(this).data("time")).TotalSeconds,d=Duration.parse($(this).data("duration")).TotalSeconds;e.TotalSeconds=i*d+o,r.TotalSeconds=i*d+s,$(this).attr("href",n.url+"?t="+e.toString(TPP.Scale.Hours).replace(/\s/g,"")),$(this).find(".playhead").css("left",i*$(this).width()).attr("data-label",r.toString(a))}).click(function(t){return t.stopPropagation()}).append($("<div class='playhead'>"))),c.attr("data-time",d.toString()).attr("data-duration",u.toString()),$(e).addClass("hasVideos"),$("#group-videos").is("*")||$("<li>").append($('<input type="checkbox" id="group-videos" checked>').change(function(){$("div.videos").toggleClass("hidden",$(this).val())})).append($('<label for="group-videos">').text("Videos")).appendTo($("li.groups ul"))})}).then(function(){return setTimeout(function(){return scaleRun(e)},0)})}function drawRedditLive(t,e,a){$('<div class="videos">').appendTo(e),new Duration(t.Duration).TotalSeconds}function toggleSetting(t){var e=t.id;settings[e]=t.checked,localStorage.setItem("settings",JSON.stringify(settings)),"hideUnfinished"==e&&reprocessCharts(),updatePage()}function toggleGroup(t){var e=t.id.split("-").pop(),a=t.checked;showGroups[e]=a,localStorage.setItem("showGroups",JSON.stringify(showGroups)),$("."+e.replace(/[^A-Z0-9-]/gi,"")).toggleClass("hidden",!a),updatePage()}var pageData,fakeQuery=function(t){return Array.prototype.slice.call(document.querySelectorAll(t))},$find=function(t,e){return t.map(function(t){return t?Array.prototype.slice.call(t.querySelectorAll(e)):[]})},globalPpd=64,groups={},vidWait=$.Deferred(),videos=vidWait.promise(),getTwitchVideos=function(){var t=$(".controls .fa-twitch").removeClass("fa-twitch").addClass("fa-pulse fa-spinner").removeAttr("onclick").attr("title","Loading...").parent();Twitch.GetVideos("twitchplayspokemon").then(vidWait.resolve,vidWait.reject).then(function(){return t.fadeOut()})},cleanString=function(t){return t.replace(/[^A-Z0-9-]/gi,"").toLowerCase()},pageUpdateTimeout=null,HeatMap=function(){function t(t,e){this.Color=function(a){var n=(a-t)/(e-t)*Math.PI;return"rgb("+Math.sin(n).toFixed(0)+",0,"+Math.cos(n).toFixed(0)+")"}}return t}(),zoomIn=function(){return applyScale(2*globalPpd)},zoomOut=function(){return applyScale(globalPpd/2)},defaultSettings={explode:!0,hideUnfinished:!0},settings=JSON.parse(localStorage.getItem("settings")||"{}");Object.keys(defaultSettings).forEach(function(t){return settings[t]="boolean"==typeof settings[t]?settings[t]:defaultSettings[t]});var showGroups=JSON.parse(localStorage.getItem("showGroups")||"{}");window.addEventListener("load",function(){fakeQuery(".settings input").forEach(function(t){return t.checked=settings[t.id]}),fakeQuery(".groups input").forEach(function(t){return t.checked=showGroups[t.id.split("-").pop()]!==!1}),updatePage()});