var __extends=this&&this.__extends||function(n,t){function e(){this.constructor=n}for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)},TPP;!function(n){var t;!function(n){n[n.Weeks=0]="Weeks",n[n.Days=1]="Days",n[n.Hours=2]="Hours",n[n.Minutes=3]="Minutes"}(t=n.Scale||(n.Scale={}))}(TPP||(TPP={}));var Twitch;!function(n){function t(n,t){void 0===t&&(t=!0);var r=[],o=function(n){return n.videos.length&&(r=r.concat.apply(r,n.videos.map(function(n){return new i(n.recorded_at,n.length,n.url,"Twitch")})),t&&n._total)?e(n._links.next).then(o):r};return $.when(e("https://api.twitch.tv/kraken/channels/"+n+"/videos?broadcasts=true&limit=100").then(o),e("https://api.twitch.tv/kraken/channels/"+n+"/videos?limit=100").then(o))}function e(n){return $.get(n+(n.indexOf("?")>0?"&":"?")+"client_id="+r)}var r="l6ejgsj101ymei0f6v4a6nkjw9upml9",i=function(){function n(n,t,e,r){this.recorded_at=n,this.length=t,this.url=e,this.source=r,this.StartTime=new Date(n).valueOf()/1e3,this.EndTime=this.StartTime+t}return n}();n.Video=i,n.GetVideos=t}(Twitch||(Twitch={}));var TPP;!function(n){var t;!function(n){var t;!function(n){var t;!function(n){function t(n,t){function e(r,i,o){if(r&&(!Array.isArray(r)||r.length)){if(Array.isArray(r))return r[0].Runs?r.map(function(n){return e(n)}):r[0].RunName?r.map(function(n){return e(n,i)}):t?r.filter(function(t){return n(t,o,i)}):r.map(function(t){return n(t,o,i)});if(r.Group)return t?r:n(r,o,i);var u=r;if(u.Runs)u.Runs=e(u.Runs,u);else{var a=r;a.Events=e(a.Events,i,a)}}return r}return void 0===t&&(t=!1),e}function e(n,t){function e(r,i){if(r&&(!Array.isArray(r)||r.length)){if(Array.isArray(r))return r[0].Runs?r.map(e):t?r.filter(function(t){return n(t,i)}):r.map(function(t){return n(t,i)});if(r.RunName)return t?r:n(r);i=r,t?i.Runs=i.Runs.filter(function(t){return n(t,i)}):i.Runs=i.Runs.map(function(t){return n(t,i)})}return r}return void 0===t&&(t=!1),e}function r(n,t){function e(e){return!e||Array.isArray(e)&&!e.length?e:Array.isArray(e)?t?e.filter(function(t){return n(t)}):e.map(function(t){return n(t)}):t?e:n(e)}return void 0===t&&(t=!1),e}function i(n,t,e){function r(i,o,u){return!i||Array.isArray(i)&&!i.length?i:Array.isArray(i)?i.map(r,o):i.Group?e(i,u,o):i.RunName?(u=t(i,o),u.Events=u.Events.map(function(n){return e(n,u,o)}),u):(o=n(i),o.Runs=r(o.Runs,o),o)}return void 0===t&&(t=function(n){return n}),void 0===e&&(e=function(n){return n}),r}n.EventLevel=t,n.RunLevel=e,n.CollectionLevel=r,n.MultiLevel=i}(t=n.Traversal||(n.Traversal={}))}(t=n.Data||(n.Data={}))}(t=n.Transforms||(n.Transforms={}))}(TPP||(TPP={}));var TPP;!function(n){var t;!function(n){var t;!function(n){function t(n){var t={};return Object.keys(n).forEach(function(e){return t[e]=n[e]}),t}n.Clone=n.Traversal.MultiLevel(t,t,t)}(t=n.Data||(n.Data={}))}(t=n.Transforms||(n.Transforms={}))}(TPP||(TPP={}));var TPP;!function(n){var t;!function(n){var t;!function(n){var t;!function(t){t.RemoveFutureRuns=n.Traversal.RunLevel(function(n){return 1e3*n.StartTime<=Date.now()},!0)}(t=n.Filter||(n.Filter={}))}(t=n.Data||(n.Data={}))}(t=n.Transforms||(n.Transforms={}))}(TPP||(TPP={}));var TPP;!function(n){var t;!function(n){var t;!function(n){var t;!function(t){t.NoWifiTradePokemon=n.Traversal.EventLevel(function(n){return!n.Class||n.Class.indexOf("WifiTrade")<0},!0)}(t=n.Filter||(n.Filter={}))}(t=n.Data||(n.Data={}))}(t=n.Transforms||(n.Transforms={}))}(TPP||(TPP={}));var TPP;!function(n){var t;!function(n){var t;!function(n){var t;!function(t){t.RemoveEmpty=n.Traversal.CollectionLevel(function(n){return!!n.Runs.length},!0)}(t=n.Filter||(n.Filter={}))}(t=n.Data||(n.Data={}))}(t=n.Transforms||(n.Transforms={}))}(TPP||(TPP={}));var TPP;!function(n){var t;!function(n){var t;!function(n){var t;!function(n){function t(t){if(!t)return!1;if(Array.isArray(t)){if(!t.length)return!1;if(t[0].RunName)return 1==t.length;var e=n.RemoveEmpty(t);return 1==e.length&&1==e[0].Runs.length}return 1==t.Runs.length}function e(e){return t(e)?Array.isArray(e)?e[0].RunName?e[0]:n.RemoveEmpty(e)[0].Runs[0]:e.Runs[0]:null}n.HasOnlyOneRun=t,n.GetOnlyRun=e}(t=n.Filter||(n.Filter={}))}(t=n.Data||(n.Data={}))}(t=n.Transforms||(n.Transforms={}))}(TPP||(TPP={}));var TPP;!function(n){var t;!function(n){var t;!function(n){var t;!function(t){function e(n){return Array.isArray(n)||(n=n.split(",")),n.filter(function(n){return!!n}).map(function(n){return n.toLowerCase().trim()})}function r(n,t){var r=e(t);return n.filter(function(n){var t=n.Name.toLowerCase();return!!r.filter(function(n){return u(t,n)}).length})}function i(r,i){var o=e(i);return t.RemoveEmpty(r.map(function(t){var e=n.Clone(t);return e.Runs=e.Runs.filter(function(n){var t=n.RunName.toLowerCase();return!!o.filter(function(n){return u(t,n)}).length}),e}))}function o(n,t){var o=e(t),c=a(n).filter(function(n){return!!o.filter(function(t){return u(n,t)}).length});c.length&&(n=r(n,c));var f=s(n).filter(function(n){return!!o.filter(function(t){return u(n,t)}).length});return f.length&&(n=i(n,f)),n}var u=function(n,t){return n.indexOf(t)>=0},a=function(n){return n.map(function(n){return n.Name.toLowerCase()})},s=function(n){return n.map(function(n){return n.Runs.map(function(n){return n.RunName.toLowerCase()})}).reduce(function(n,t){return n.concat(t)})};t.CollectionSearch=r,t.RunSearch=i,t.Search=o}(t=n.Filter||(n.Filter={}))}(t=n.Data||(n.Data={}))}(t=n.Transforms||(n.Transforms={}))}(TPP||(TPP={}));var TPP;!function(n){var t;!function(t){var e;!function(t){var e;!function(e){function r(t,e,r,i){return void 0===r&&(r=0),void 0===i&&(i=n.Scale.Days),t.Events.filter(function(o){var u=n.Duration.parse(o.Time,t.StartTime).TotalTime(i);return"Pokemon"==o.Group&&"Egg"!=o.Name&&(!r||u<r)&&u>=e})}function i(e,i,o){void 0===i&&(i=0);var u=t.Traversal.RunLevel(function(t,e){e=e||o;var u=e.Scale||n.Scale.Days,a=n.Duration.parse((t.Events.filter(function(e){return"Hosts"==e.Group&&(!i||n.Duration.parse(e.Time,t.StartTime).TotalDays<i)}).sort(function(e,r){return n.Duration.parse(e.Time,t.StartTime).TotalSeconds-n.Duration.parse(r.Time,t.StartTime).TotalSeconds}).pop()||{Group:null,Name:null,Time:null}).Time||"2014-01-01T00:00:00Z",t.StartTime).TotalTime(u),s=r(t,a,i,u),c=i?s.filter(function(e){return n.Duration.parse(e.Time,t.StartTime).TotalTime(u)>=i-1}):s;return t.CatchReport="* "+(i?"On Day "+i:"Overall")+(", "+t.HostName+" caught **"+c.length+'** Pokémon: " + '+c.map(function(n){return n.Name}).join(", ")),t.Ongoing=!0,t.Events.push({Group:"Catch Report",Name:s.length.toFixed(0),Time:n.Duration.parse(t.Duration,t.StartTime).toString()}),t}),a=t.Traversal.RunLevel(function(n){return(!n.Revisit||n.CopyEvents)&&(!n.Unfinished||n.Ongoing)&&n.Events.filter(function(n){return"Pokemon"==n.Group}).length>0},!0),s=t.Clone(e);return u(a(s))}e.CatchReport=i}(e=t.Processing||(t.Processing={}))}(e=t.Data||(t.Data={}))}(t=n.Transforms||(n.Transforms={}))}(TPP||(TPP={}));var TPP;!function(n){var t=function(){function t(n,e,r,i,o){if(void 0===e&&(e=0),void 0===r&&(r=0),void 0===i&&(i=0),void 0===o&&(o=0),this.days=e,this.hours=r,this.minutes=i,this.seconds=o,"string"==typeof n){var u=t.parse(n);this.days=u.days,this.hours=u.hours,this.minutes=u.minutes,this.seconds=u.seconds}else this.days+=7*n}return Object.defineProperty(t.prototype,"TotalSeconds",{get:function(){return this.seconds+60*this.minutes+60*this.hours*60+60*this.days*60*24},set:function(n){this.seconds=Math.floor(n%60),this.minutes=Math.floor(n/60)%60,this.hours=Math.floor(n/60/60)%24,this.days=Math.floor(n/60/60/24)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"TotalHours",{get:function(){return this.TotalSeconds/60/60},set:function(n){this.TotalSeconds=60*n*60},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"TotalDays",{get:function(){return this.TotalHours/24},set:function(n){this.TotalHours=24*n},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"TotalWeeks",{get:function(){return this.TotalDays/7},set:function(n){this.TotalDays=7*n},enumerable:!0,configurable:!0}),t.prototype.TotalTime=function(t){switch(t){case n.Scale.Weeks:return this.TotalWeeks;case n.Scale.Hours:return this.TotalHours/4;case n.Scale.Minutes:return 6*this.TotalHours}return this.TotalDays},t.prototype.toString=function(t){return void 0===t&&(t=n.Scale.Days),(t==n.Scale.Minutes?60*(24*this.days+this.hours)+this.minutes:(t==n.Scale.Hours?24*this.days+this.hours:(t==n.Scale.Weeks?Math.floor(this.days/7)+"w "+this.days%7:this.days)+"d "+this.hours)+"h "+this.minutes)+"m"+(this.seconds?" "+this.seconds+"s":"")},t.parse=function(n,e){var r=new t(0,0,0,0);if(n){if(this.canParse(n))try{var i=this.parseReg.exec(n);return new t(parseInt(i[1])||0,parseInt(i[2])||0,parseInt(i[3])||0,parseInt(i[4])||0,parseInt(i[5])||0)}catch(n){}e&&(r.TotalSeconds=Date.parse(n)/1e3-e)}return r},t.canParse=function(n){return this.parseReg.test(n)},t}();t.parseReg=/^\s*(?:(\d*)w)?\s*(?:(\d*)d)?\s*(?:(\d*)h)?\s*(?:(\d*)m)?\s*(?:(\d*)s)?\s*$/i,n.Duration=t}(TPP||(TPP={}));var TPP;!function(n){var t;!function(t){var e;!function(t){var e;!function(e){e.MarkOngoingRuns=t.Traversal.RunLevel(function(t){return t.Ongoing=1e3*t.StartTime<=Date.now()&&1e3*(n.Duration.parse(t.Duration,t.StartTime).TotalSeconds+t.StartTime)>Date.now(),t})}(e=t.Processing||(t.Processing={}))}(e=t.Data||(t.Data={}))}(t=n.Transforms||(n.Transforms={}))}(TPP||(TPP={}));var TPP;!function(n){var t;!function(n){var t=function(){function n(){this.OwnedDict={},this.HallOfFame=[]}return n}();n.RunSummaryBase=t;var e=function(){function n(){this.Summary=[],this.HallOfFame=[]}return n}();n.CollectionSummaryBase=e;var r=function(){function n(){this.Owners=[],this.HallOfFame=[]}return Object.defineProperty(n.prototype,"DisplayName",{get:function(){return this.displayName||this.Pokemon},set:function(n){this.displayName=n},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"IsOwned",{get:function(){return this.Owners&&this.Owners.length>0},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"FirstOwnedRun",{get:function(){return this.IsOwned?this.Owners[0].Run:{}},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"FirstCaughtDate",{get:function(){return!!this.IsOwned&&this.Owners[0].CaughtOn},enumerable:!0,configurable:!0}),n}();n.DexEntryBase=r;var i;!function(n){n[n["Pokédex Number"]=0]="Pokédex Number",n[n.Alphabetical=1]="Alphabetical",n[n["First Owned"]=2]="First Owned"}(i=n.DexSorting||(n.DexSorting={}));var o=function(){function n(){this.Entries=[],this.isGlitchMon=function(n){return 0==n.Number&&"MissingNo."==n.Pokemon}}return Object.defineProperty(n.prototype,"NoGlitchMon",{get:function(){var n=this;return this.Entries.filter(function(t){return!n.isGlitchMon(t)})},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"TotalOwned",{get:function(){return this.NoGlitchMon.filter(function(n){return n.IsOwned}).length},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"TotalInDex",{get:function(){return this.NoGlitchMon.length},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"OwnedPercentage",{get:function(){return this.TotalOwned/this.TotalInDex*100},enumerable:!0,configurable:!0}),n.prototype.TotalOwnedBy=function(n){return this.NoGlitchMon.filter(function(t){return t.Owners.filter(function(t){return t.Run.RunName==n.RunName}).length>0}).length},Object.defineProperty(n.prototype,"Owned",{get:function(){return this.Entries.filter(function(n){return n.IsOwned})},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"Unowned",{get:function(){return this.Entries.filter(function(n){return!n.IsOwned})},enumerable:!0,configurable:!0}),n.prototype.SortDex=function(n){switch(void 0===n&&(n=0),n){case 0:case i[0]:default:this.Entries=this.Entries.sort(function(n,t){return n.Number-t.Number});break;case 1:case i[1]:this.Entries=this.Entries.sort(function(n,t){return n.Pokemon.localeCompare(t.Pokemon)});break;case 2:case i[2]:this.Entries=this.Entries.sort(function(n,t){return(n.FirstCaughtDate||Date.now()+n.Number)-(t.FirstCaughtDate||Date.now()+t.Number)})}},n.prototype.FilterGlitchMon=function(){this.Entries=this.NoGlitchMon},n.prototype.FilterUnownedGlitchMon=function(){var n=this;this.Entries=this.Entries.filter(function(t){return t.IsOwned||!n.isGlitchMon(t)})},n.prototype.FilterOwnedInDexToRuns=function(n){Array.isArray(n)||(n=n.split(","));var t=n.map(function(n){return"string"==typeof n?n.toLowerCase().trim():n}),e=function(n){return n.Owners.filter(function(n){return t.filter(function(t){return"string"==typeof t?n.Run.RunName.toLowerCase().indexOf(t)>=0:n.Run.RunName==t.RunName}).length>0}).length>0};this.Entries.forEach(function(n){return n.Owners=e(n)?n.Owners:[]})},n.prototype.FilterDexToOwned=function(){this.Entries=this.Owned},n.prototype.FilterDexToUnowned=function(){this.Entries=this.Unowned},n.prototype.FilterDexPokemon=function(n){Array.isArray(n)||(n=n.split(",")),n=n.map(function(n){return n.toLowerCase().trim()}),this.Entries=this.Entries.filter(function(t){return n.indexOf(t.Pokemon.toLowerCase())>=0||n.indexOf(t.Number.toString())>=0})},n.prototype.FilterDexToHallOfFame=function(){this.Entries=this.Entries.filter(function(n){return n.HallOfFame.length>0})},n}();n.GlobalDexBase=o}(t=n.Pokedex||(n.Pokedex={}))}(TPP||(TPP={}));var TPP;!function(n){var t;!function(t){var e;!function(t){var e=function(t){function e(n,e){var r=t.call(this)||this;return r.Run=n,n.Events.filter(function(n){return"Pokemon"==n.Group&&(e.indexOf(n.Name)>=0||e.indexOf(n.Class)>=0)}).length&&(r.FillOwnedDict(e),r.FillHallOfFame(e)),r}return __extends(e,t),e.prototype.FillOwnedDict=function(t){var e=this;this.InitOwnedDict(t),this.Run.Events.filter(function(n){return"Pokemon"==n.Group}).forEach(function(r){var i=n.Duration.parse(r.Time,e.Run.StartTime).TotalSeconds+e.Run.StartTime;e.AddOwnedPokemonIfRecognized(r.Name,i,t)||e.AddOwnedPokemonIfRecognized(r.Class,i,t)})},e.prototype.AddOwnedPokemonIfRecognized=function(n,t,e){return!(e.indexOf(n)<0)&&(this.OwnedDict[n]=this.OwnedDict[n]&&this.OwnedDict[n]<t?this.OwnedDict[n]:t,!0)},e.prototype.InitOwnedDict=function(n){var t=this;this.OwnedDict={},n.forEach(function(n){return t.OwnedDict[n]=!1})},e.prototype.FillHallOfFame=function(t){var e=this;this.Run.Events.filter(function(t){return t.Party&&n.Duration.parse(t.Time,e.Run.StartTime).TotalSeconds>=0}).forEach(function(r){return r.Party.forEach(function(i){var o=t.indexOf(i.Pokemon)>=0?i.Pokemon:t.indexOf(i.Class)>=0?i.Class:null;o&&e.HallOfFame.push({Pokemon:o,Ribbon:r.Image,RunName:e.Run.RunName,HostName:e.Run.HostName,Nickname:(i.Nickname||i.Pokemon).replace(/π/g,"ᴾk").replace(/µ/g,"ᴹn"),UnmodifiedNick:i.Nickname,PreviousNick:i.PreviousNick,Time:n.Duration.parse(r.Time,e.Run.StartTime).TotalSeconds+e.Run.StartTime})})})},e}(n.Pokedex.RunSummaryBase);t.RunSummary=e}(e=t.Pokedex||(t.Pokedex={}))}(t=n.Transforms||(n.Transforms={}))}(TPP||(TPP={}));var TPP;!function(n){var t;!function(t){var e;!function(t){var e=function(n){function e(e,r){var i=n.call(this)||this,o=[];return e.forEach(function(n){return n.Runs.forEach(function(n){return o.push(new t.RunSummary(n,r))})}),i.Summary=o.sort(function(n,t){return n.Run.StartTime-t.Run.StartTime}),i.Summary.length&&i.FilterHoFToUniques(),i}return __extends(e,n),e.prototype.FilterHoFToUniques=function(){var n=this.Summary.map(function(n){return n.HallOfFame}).reduce(function(n,t){return n.concat(t)}).sort(function(n,t){return n.Time-t.Time});this.HallOfFame=n.filter(function(t){return n.filter(function(n){return n.HostName==t.HostName&&n.Pokemon==t.Pokemon&&(n.Nickname==t.Nickname||t.PreviousNick==n.UnmodifiedNick)}).shift()==t})},e}(n.Pokedex.CollectionSummaryBase);t.CollectionSummary=e}(e=t.Pokedex||(t.Pokedex={}))}(t=n.Transforms||(n.Transforms={}))}(TPP||(TPP={}));var TPP;!function(n){var t;!function(t){var e;!function(t){var e=function(n){function t(t,e,r){var i=n.call(this)||this;return i.Number=e,i.Pokemon=t,t&&(i.GatherPokemonFromRuns(r),i.GatherHallOfFameEntries(r)),i}return __extends(t,n),t.prototype.GatherPokemonFromRuns=function(n){var t=this;n.Summary.forEach(function(n){return n.OwnedDict[t.Pokemon]&&t.Owners.push({Run:n.Run,CaughtOn:n.OwnedDict[t.Pokemon]})}),this.Owners=this.Owners.sort(function(n,t){return n.CaughtOn-t.CaughtOn}),this.FilterRevisitsIfPreviouslyOwned()},t.prototype.FilterRevisitsIfPreviouslyOwned=function(){var n=this;this.Owners=this.Owners.filter(function(t){return!t.Run.Revisit||0==n.Owners.filter(function(n){return n.Run.RunName==t.Run.Revisit.Run}).length})},t.prototype.GatherHallOfFameEntries=function(n){var t=this;this.HallOfFame=n.HallOfFame.filter(function(n){return n.Pokemon==t.Pokemon}).sort(function(n,t){return n.Time-t.Time})},t}(n.Pokedex.DexEntryBase);t.DexEntry=e}(e=t.Pokedex||(t.Pokedex={}))}(t=n.Transforms||(n.Transforms={}))}(TPP||(TPP={}));var TPP;!function(n){var t;!function(n){var t;!function(n){function t(n,t){return void 0===t&&(t=r),n?n.map(function(n){return"string"==typeof n?n:t[n]}):t}function e(n,t){return void 0===t&&(t=r),t.slice(0,(n||t.length)+1)}var r="undefined"!=typeof window?((window||{}).Pokedex||{}).PokeList||[]:[];n.DexMerge=t,n.ClipNationalDex=e}(t=n.Pokedex||(n.Pokedex={}))}(t=n.Transforms||(n.Transforms={}))}(TPP||(TPP={}));var TPP;!function(n){var t;!function(t){var e;!function(t){var e=function(n){function e(e,r){var i=n.call(this)||this;return e instanceof t.CollectionSummary||(e=new t.CollectionSummary(e,r)),i.Entries=r.map(function(n,r){return new t.DexEntry(n,r,e)}).filter(function(n){return!!n.Pokemon}),i}return __extends(e,n),e}(n.Pokedex.GlobalDexBase);t.GlobalDex=e}(e=t.Pokedex||(t.Pokedex={}))}(t=n.Transforms||(n.Transforms={}))}(TPP||(TPP={}));