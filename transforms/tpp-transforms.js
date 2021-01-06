var Twitch,TPP,__extends=this&&this.__extends||function(){var r=function(t,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)};return function(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}}();!function(t){var n;(n=t.Scale||(t.Scale={}))[n.Weeks=0]="Weeks",n[n.Days=1]="Days",n[n.Hours=2]="Hours",n[n.Minutes=3]="Minutes"}(TPP=TPP||{}),function(t){var n="l6ejgsj101ymei0f6v4a6nkjw9upml9",i=function(t,n,e,r){this.recorded_at=t,this.length=n,this.url=e,this.source=r,this.StartTime=new Date(t).valueOf()/1e3,this.EndTime=this.StartTime+n};function o(t){return $.get(t+(0<t.indexOf("?")?"&":"?")+"client_id="+n)}t.Video=i,t.GetVideos=function(t,n){void 0===n&&(n=!0);var e=[],r=function(t){return t.videos.length&&(e=e.concat.apply(e,t.videos.map(function(t){return new i(t.recorded_at,t.length,t.url,"Twitch")})),n&&t._total)?o(t._links.next).then(r):e};return $.when(o("https://api.twitch.tv/kraken/channels/"+t+"/videos?broadcasts=true&limit=100").then(r),o("https://api.twitch.tv/kraken/channels/"+t+"/videos?limit=100").then(r))}}(Twitch=Twitch||{}),function(t){var n,e,r;n=t.Transforms||(t.Transforms={}),e=n.Data||(n.Data={}),(r=e.Traversal||(e.Traversal={})).EventLevel=function(i,o){return void 0===o&&(o=!1),function n(t,e,r){if(t&&(!Array.isArray(t)||t.length)){if(Array.isArray(t))return t[0].Runs?t.map(function(t){return n(t)}):t[0].RunName?t.map(function(t){return n(t,e)}):o?t.filter(function(t){return i(t,r,e)}):t.map(function(t){return i(t,r,e)});if(t.Group)return o?t:i(t,r,e);t.Runs?t.Runs=n(t.Runs,t):t.Events=n(t.Events,e,t)}return t}},r.RunLevel=function(r,i){return void 0===i&&(i=!1),function t(n,e){if(n&&(!Array.isArray(n)||n.length)){if(Array.isArray(n))return n[0].Runs?n.map(t):i?n.filter(function(t){return r(t,e)}):n.map(function(t){return r(t,e)});if(n.RunName)return i?n:r(n);(e=n).Runs=i?e.Runs.filter(function(t){return r(t,e)}):e.Runs.map(function(t){return r(t,e)})}return n}},r.CollectionLevel=function(n,e){return void 0===e&&(e=!1),function(t){return!t||Array.isArray(t)&&!t.length?t:Array.isArray(t)?e?t.filter(function(t){return n(t)}):t.map(function(t){return n(t)}):e?t:n(t)}},r.MultiLevel=function(i,o,s){return void 0===o&&(o=function(t){return t}),void 0===s&&(s=function(t){return t}),function t(n,e,r){return!n||Array.isArray(n)&&!n.length?n:Array.isArray(n)?n.map(t,e):n.Group?s(n,r,e):n.RunName?((r=o(n,e)).Events=r.Events.map(function(t){return s(t,r,e)}),r):((e=i(n)).Runs=t(e.Runs,e),e)}}}(TPP=TPP||{}),function(t){var n,e;function r(n){var e={};return Object.keys(n).forEach(function(t){return e[t]=n[t]}),e}n=t.Transforms||(t.Transforms={}),(e=n.Data||(n.Data={})).Clone=e.Traversal.MultiLevel(r,r,r)}(TPP=TPP||{}),function(t){var n,e;n=t.Transforms||(t.Transforms={}),((e=n.Data||(n.Data={})).Filter||(e.Filter={})).RemoveFutureRuns=e.Traversal.RunLevel(function(t){return 1e3*t.StartTime<=Date.now()},!0)}(TPP=TPP||{}),function(t){var n,e;n=t.Transforms||(t.Transforms={}),((e=n.Data||(n.Data={})).Filter||(e.Filter={})).NoWifiTradePokemon=e.Traversal.EventLevel(function(t){return!t.Class||t.Class.indexOf("WifiTrade")<0},!0)}(TPP=TPP||{}),function(t){var n,e;n=t.Transforms||(t.Transforms={}),((e=n.Data||(n.Data={})).Filter||(e.Filter={})).RemoveEmpty=e.Traversal.CollectionLevel(function(t){return!!t.Runs.length},!0)}(TPP=TPP||{}),function(t){var n,e,r;function i(t){if(!t)return!1;if(Array.isArray(t)){if(!t.length)return!1;if(t[0].RunName)return 1==t.length;var n=r.RemoveEmpty(t);return 1==n.length&&1==n[0].Runs.length}return 1==t.Runs.length}n=t.Transforms||(t.Transforms={}),e=n.Data||(n.Data={}),(r=e.Filter||(e.Filter={})).HasOnlyOneRun=i,r.GetOnlyRun=function(t){return i(t)?Array.isArray(t)?t[0].RunName?t[0]:r.RemoveEmpty(t)[0].Runs[0]:t.Runs[0]:null}}(TPP=TPP||{}),function(t){var n,r,i,o;function s(t){return Array.isArray(t)||(t=t.split(",")),t.filter(function(t){return!!t}).map(function(t){return t.toLowerCase().trim()})}function u(t,n){var e=s(n);return t.filter(function(t){var n=t.Name.toLowerCase();return!!e.filter(function(t){return o(n,t)}).length})}function a(t,n){var e=s(n);return i.RemoveEmpty(t.map(function(t){var n=r.Clone(t);return n.Runs=n.Runs.filter(function(t){var n=t.RunName.toLowerCase();return!!e.filter(function(t){return o(n,t)}).length}),n}))}n=t.Transforms||(t.Transforms={}),r=n.Data||(n.Data={}),i=r.Filter||(r.Filter={}),o=function(t,n){return 0<=t.indexOf(n)},i.CollectionSearch=u,i.RunSearch=a,i.Search=function(t,n){var e=s(n),r=t.map(function(t){return t.Name.toLowerCase()}).filter(function(n){return!!e.filter(function(t){return o(n,t)}).length});r.length&&(t=u(t,r));var i=t.map(function(t){return t.Runs.map(function(t){return t.RunName.toLowerCase()})}).reduce(function(t,n){return t.concat(n)}).filter(function(n){return!!e.filter(function(t){return o(n,t)}).length});return i.length&&(t=a(t,i)),t}}(TPP=TPP||{}),function(m){var t,n;t=m.Transforms||(m.Transforms={}),((n=t.Data||(t.Data={})).Processing||(n.Processing={})).CatchReport=function(t,f,l){return void 0===f&&(f=0),n.Traversal.RunLevel(function(e,t){var r,i,o,s,n=(t=t||l).Scale||m.Scale.Days,u=m.Duration.parse((e.Events.filter(function(t){return"Hosts"==t.Group&&(!f||m.Duration.parse(t.Time,e.StartTime).TotalDays<f)}).sort(function(t,n){return m.Duration.parse(t.Time,e.StartTime).TotalSeconds-m.Duration.parse(n.Time,e.StartTime).TotalSeconds}).pop()||{Group:null,Name:null,Time:null}).Time||"2014-01-01T00:00:00Z",e.StartTime).TotalTime(n),a=(r=e,i=u,void 0===(o=f)&&(o=0),void 0===(s=n)&&(s=m.Scale.Days),r.Events.filter(function(t){var n=m.Duration.parse(t.Time,r.StartTime).TotalTime(s);return"Pokemon"==t.Group&&"Egg"!=t.Name&&(!o||n<o)&&i<=n})),c=f?a.filter(function(t){return m.Duration.parse(t.Time,e.StartTime).TotalTime(n)>=f-1}):a;return e.CatchReport="* "+(f?"On Day "+f:"Overall")+", "+e.HostName+" caught **"+c.length+'** Pokémon: " + '+c.map(function(t){return t.Name}).join(", "),e.Ongoing=!0,e.Events.push({Group:"Catch Report",Name:a.length.toFixed(0),Time:m.Duration.parse(e.Duration,e.StartTime).toString()}),e})(n.Traversal.RunLevel(function(t){return(!t.Revisit||t.CopyEvents)&&(!t.Unfinished||t.Ongoing)&&0<t.Events.filter(function(t){return"Pokemon"==t.Group}).length},!0)(n.Clone(t)))}}(TPP=TPP||{}),function(n){var t=(Object.defineProperty(s.prototype,"TotalSeconds",{get:function(){return this.seconds+60*this.minutes+60*this.hours*60+60*this.days*60*24},set:function(t){this.seconds=Math.floor(t%60),this.minutes=Math.floor(t/60)%60,this.hours=Math.floor(t/60/60)%24,this.days=Math.floor(t/60/60/24)},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"TotalHours",{get:function(){return this.TotalSeconds/60/60},set:function(t){this.TotalSeconds=60*t*60},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"TotalDays",{get:function(){return this.TotalHours/24},set:function(t){this.TotalHours=24*t},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"TotalWeeks",{get:function(){return this.TotalDays/7},set:function(t){this.TotalDays=7*t},enumerable:!1,configurable:!0}),s.prototype.AddDays=function(t){return this.TotalDays+=t,this},s.prototype.AddHours=function(t){return this.TotalHours+=t,this},s.prototype.AddMinutes=function(t){return this.TotalSeconds+=60*t,this},s.prototype.AddSeconds=function(t){return this.TotalSeconds+=t,this},s.prototype.MultiplyBy=function(t){return this.TotalSeconds*=t,this},s.prototype.TotalTime=function(t){switch(t){case n.Scale.Weeks:return this.TotalWeeks;case n.Scale.Hours:return this.TotalHours/4;case n.Scale.Minutes:return 6*this.TotalHours}return this.TotalDays},s.prototype.toString=function(t){return void 0===t&&(t=n.Scale.Days),(t==n.Scale.Minutes?60*(24*this.days+this.hours)+this.minutes:(t==n.Scale.Hours?24*this.days+this.hours:(t==n.Scale.Weeks?Math.floor(this.days/7)+"w "+this.days%7:this.days)+"d "+this.hours)+"h "+this.minutes)+"m"+(this.seconds?" "+this.seconds+"s":"")},s.parse=function(t,n){var e=new s(0,0,0,0);if(t){if(this.canParse(t))try{var r=this.parseReg.exec(t);return new s(parseInt(r[1])||0,parseInt(r[2])||0,parseInt(r[3])||0,parseInt(r[4])||0,parseInt(r[5])||0)}catch(t){}n&&(e.TotalSeconds=Date.parse(t)/1e3-n)}return e},s.canParse=function(t){return this.parseReg.test(t)},s.parseReg=/^\s*(?:(\d*)w)?\s*(?:(\d*)d)?\s*(?:(\d*)h)?\s*(?:(\d*)m)?\s*(?:(\d*)s)?\s*$/i,s);function s(t,n,e,r,i){var o;void 0===n&&(n=0),void 0===e&&(e=0),void 0===r&&(r=0),void 0===i&&(i=0),this.days=n,this.hours=e,this.minutes=r,this.seconds=i,"string"==typeof t?(o=s.parse(t),this.days=o.days,this.hours=o.hours,this.minutes=o.minutes,this.seconds=o.seconds):this.days+=7*t}n.Duration=t}(TPP=TPP||{}),function(n){var t,e;t=n.Transforms||(n.Transforms={}),((e=t.Data||(t.Data={})).Processing||(e.Processing={})).MarkOngoingRuns=e.Traversal.RunLevel(function(t){return t.Ongoing=1e3*t.StartTime<=Date.now()&&1e3*(n.Duration.parse(t.Duration,t.StartTime).TotalSeconds+t.StartTime)>Date.now(),t})}(TPP=TPP||{}),function(t){!function(t){function n(){this.OwnedDict={},this.HallOfFame=[]}t.RunSummaryBase=n;function e(){this.Summary=[],this.HallOfFame=[]}t.CollectionSummaryBase=e;var r,i,o=(Object.defineProperty(s.prototype,"DisplayName",{get:function(){return this.displayName||this.Pokemon},set:function(t){this.displayName=t},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"IsOwned",{get:function(){return this.Owners&&0<this.Owners.length},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"FirstOwnedRun",{get:function(){return this.IsOwned?this.Owners[0].Run:{}},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"FirstCaughtDate",{get:function(){return!!this.IsOwned&&this.Owners[0].CaughtOn},enumerable:!1,configurable:!0}),s.prototype.Clone=function(t){return void 0===t&&(t=new s),t.Number=this.Number,t.Pokemon=this.Pokemon,t.displayName=this.displayName,t.Owners=this.Owners.map(function(t){return{Run:t.Run,CaughtOn:t.CaughtOn}}),t.HallOfFame=JSON.parse(JSON.stringify(this.HallOfFame)),t},s);function s(){this.Owners=[],this.HallOfFame=[]}t.DexEntryBase=o,(i=r=t.DexSorting||(t.DexSorting={}))[i["Pokédex Number"]=0]="Pokédex Number",i[i.Alphabetical=1]="Alphabetical",i[i["First Owned"]=2]="First Owned";var u=(Object.defineProperty(a.prototype,"NoGlitchMon",{get:function(){var n=this;return this.Entries.filter(function(t){return!n.isGlitchMon(t)})},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"TotalOwned",{get:function(){return this.NoGlitchMon.filter(function(t){return t.IsOwned}).length},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"TotalInDex",{get:function(){return this.NoGlitchMon.length},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"OwnedPercentage",{get:function(){return this.TotalOwned/this.TotalInDex*100},enumerable:!1,configurable:!0}),a.prototype.TotalOwnedBy=function(n){return this.NoGlitchMon.filter(function(t){return 0<t.Owners.filter(function(t){return t.Run.RunName==n.RunName}).length}).length},Object.defineProperty(a.prototype,"Owned",{get:function(){return this.Entries.filter(function(t){return t.IsOwned})},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"Unowned",{get:function(){return this.Entries.filter(function(t){return!t.IsOwned})},enumerable:!1,configurable:!0}),a.prototype.SortDex=function(t){switch(void 0===t&&(t=0),t){case 0:case r[0]:default:this.Entries=this.Entries.sort(function(t,n){return t.Number-n.Number});break;case 1:case r[1]:this.Entries=this.Entries.sort(function(t,n){return t.Pokemon.localeCompare(n.Pokemon)});break;case 2:case r[2]:this.Entries=this.Entries.sort(function(t,n){return(t.FirstCaughtDate||Date.now()+t.Number)-(n.FirstCaughtDate||Date.now()+n.Number)})}},a.prototype.FilterGlitchMon=function(){this.Entries=this.NoGlitchMon},a.prototype.FilterUnownedGlitchMon=function(){var n=this;this.Entries=this.Entries.filter(function(t){return t.IsOwned||!n.isGlitchMon(t)})},a.prototype.FilterOwnedInDexToRuns=function(t){Array.isArray(t)||(t=t.split(","));var e=t.map(function(t){return"string"==typeof t?t.toLowerCase().trim():t});this.Entries.forEach(function(t){return t.Owners=0<t.Owners.filter(function(n){return 0<e.filter(function(t){return"string"==typeof t?0<=n.Run.RunName.toLowerCase().indexOf(t):n.Run.RunName==t.RunName}).length}).length?t.Owners:[]})},a.prototype.FilterDexToOwned=function(){this.Entries=this.Owned},a.prototype.FilterDexToUnowned=function(){this.Entries=this.Unowned},a.prototype.FilterDexPokemon=function(n){Array.isArray(n)||(n=n.split(",")),n=n.map(function(t){return t.toLowerCase().trim()}),this.Entries=this.Entries.filter(function(t){return 0<=n.indexOf(t.Pokemon.toLowerCase())||0<=n.indexOf(t.Number.toString())})},a.prototype.FilterDexToHallOfFame=function(){this.Entries=this.Entries.filter(function(t){return 0<t.HallOfFame.length})},a.prototype.Clone=function(t){return void 0===t&&(t=new a),t.Entries=this.Entries.map(function(t){return t.Clone()}),t},a);function a(){this.Entries=[],this.isGlitchMon=function(t){return 0==t.Number&&"MissingNo."==t.Pokemon}}t.GlobalDexBase=u}(t.Pokedex||(t.Pokedex={}))}(TPP=TPP||{}),function(o){var t,n,r,e;function i(t,n){var e=r.call(this)||this;return(e.Run=t).Events.filter(function(t){return"Pokemon"==t.Group&&(0<=n.indexOf(t.Name)||0<=n.indexOf(t.Class))}).length&&(e.FillOwnedDict(n),e.FillHallOfFame(n)),e}t=o.Transforms||(o.Transforms={}),n=t.Pokedex||(t.Pokedex={}),r=o.Pokedex.RunSummaryBase,__extends(i,r),i.prototype.FillOwnedDict=function(e){var r=this;this.InitOwnedDict(e),this.Run.Events.filter(function(t){return"Pokemon"==t.Group}).forEach(function(t){var n=o.Duration.parse(t.Time,r.Run.StartTime).TotalSeconds+r.Run.StartTime;r.AddOwnedPokemonIfRecognized(t.Name,n,e)||r.AddOwnedPokemonIfRecognized(t.Class,n,e)})},i.prototype.AddOwnedPokemonIfRecognized=function(t,n,e){return!(e.indexOf(t)<0||(this.OwnedDict[t]=this.OwnedDict[t]&&this.OwnedDict[t]<n?this.OwnedDict[t]:n,0))},i.prototype.InitOwnedDict=function(t){var n=this;this.OwnedDict={},t.forEach(function(t){return n.OwnedDict[t]=!1})},i.prototype.FillHallOfFame=function(r){var i=this;this.Run.Events.filter(function(t){return t.Party&&0<=o.Duration.parse(t.Time,i.Run.StartTime).TotalSeconds}).forEach(function(e){return e.Party.forEach(function(t){var n=0<=r.indexOf(t.Pokemon)?t.Pokemon:0<=r.indexOf(t.Class)?t.Class:null;n&&i.HallOfFame.push({Pokemon:n,Ribbon:e.Image,RunName:i.Run.RunName,HostName:i.Run.HostName,Nickname:(t.Nickname||t.Pokemon).replace(/π/g,"ᴾk").replace(/µ/g,"ᴹn"),UnmodifiedNick:t.Nickname,PreviousNick:t.PreviousNick,Time:o.Duration.parse(e.Time,i.Run.StartTime).TotalSeconds+i.Run.StartTime})})})},e=i,n.RunSummary=e}(TPP=TPP||{}),function(t){var n,i,o,e;function r(t,n){var e=o.call(this)||this,r=[];return t.forEach(function(t){return t.Runs.forEach(function(t){return r.push(new i.RunSummary(t,n))})}),e.Summary=r.sort(function(t,n){return t.Run.StartTime-n.Run.StartTime}),e.Summary.length&&e.FilterHoFToUniques(),e}n=t.Transforms||(t.Transforms={}),i=n.Pokedex||(n.Pokedex={}),o=t.Pokedex.CollectionSummaryBase,__extends(r,o),r.prototype.FilterHoFToUniques=function(){var t=this.Summary.map(function(t){return t.HallOfFame}).reduce(function(t,n){return t.concat(n)}).sort(function(t,n){return t.Time-n.Time});this.HallOfFame=t.filter(function(n){return t.filter(function(t){return t.HostName==n.HostName&&t.Pokemon==n.Pokemon&&(t.Nickname==n.Nickname||n.PreviousNick==t.UnmodifiedNick)}).shift()==n})},e=r,i.CollectionSummary=e}(TPP=TPP||{}),function(t){var n,e,o,r;function i(t,n,e,r){void 0===r&&(r=!1);var i=o.call(this)||this;return i.Number=n,(i.Pokemon=t)&&(r&&(i.DisplayName=t,i.Pokemon=t+"-"+n),i.GatherPokemonFromRuns(e),i.GatherHallOfFameEntries(e)),i}n=t.Transforms||(t.Transforms={}),e=n.Pokedex||(n.Pokedex={}),o=t.Pokedex.DexEntryBase,__extends(i,o),i.prototype.GatherPokemonFromRuns=function(t){var n=this;t.Summary.forEach(function(t){return t.OwnedDict[n.Pokemon]&&n.Owners.push({Run:t.Run,CaughtOn:t.OwnedDict[n.Pokemon]})}),this.Owners=this.Owners.sort(function(t,n){return t.CaughtOn-n.CaughtOn}),this.FilterRevisitsIfPreviouslyOwned()},i.prototype.FilterRevisitsIfPreviouslyOwned=function(){var t=this;this.Owners=this.Owners.filter(function(n){return!n.Run.Revisit||0==t.Owners.filter(function(t){return t.Run.RunName==n.Run.Revisit.Run}).length})},i.prototype.GatherHallOfFameEntries=function(t){var n=this;this.HallOfFame=t.HallOfFame.filter(function(t){return t.Pokemon==n.Pokemon}).sort(function(t,n){return t.Time-n.Time})},r=i,e.DexEntry=r}(TPP=TPP||{}),function(t){var n,e,r;n=t.Transforms||(t.Transforms={}),e=n.Pokedex||(n.Pokedex={}),r="undefined"!=typeof window&&((window||{}).Pokedex||{}).PokeList||[],e.DexMerge=function(t,n){return void 0===n&&(n=r),t?t.map(function(t){return"string"==typeof t?t:n[t]}):n},e.ClipNationalDex=function(t,n){return void 0===n&&(n=r),n.slice(0,(t||n.length)+1)}}(TPP=TPP||{}),function(t){var n,i,e,r;function o(r,t){var n=e.call(this)||this;return r instanceof i.CollectionSummary||(r=new i.CollectionSummary(r,t)),n.Entries=t.map(function(n,t,e){return new i.DexEntry(n,t,r,e.findIndex(function(t){return t==n})!=t)}).filter(function(t){return!!t.Pokemon}),n}n=t.Transforms||(t.Transforms={}),i=n.Pokedex||(n.Pokedex={}),e=t.Pokedex.GlobalDexBase,__extends(o,e),r=o,i.GlobalDex=r}(TPP=TPP||{});