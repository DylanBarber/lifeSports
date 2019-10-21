(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(32),i=a.n(s),l=(a(72),a(17)),c=a(24);var o=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(l.b,{to:"/",className:"navbar-brand"},"LifeSports"),r.a.createElement("div",{className:"collpase navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(l.b,{to:"/",className:"nav-link"},"Exercises")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(l.b,{to:"/create",className:"nav-link"},"Post New Workout")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(l.b,{to:"/user",className:"nav-link"},"Create User")))))},u=a(19),m=a(20),d=a(23),h=a(21),b=a(5),p=a(22),E=a(10),g=a.n(E),v=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.exercise.username),r.a.createElement("td",null,e.exercise.description),r.a.createElement("td",null,e.exercise.duration),r.a.createElement("td",null,e.exercise.date.substring(0,10)),r.a.createElement("td",null,r.a.createElement(l.b,{to:"/edit/"+e.exercise._id},"edit")," | ",r.a.createElement("a",{href:"#",onClick:function(){e.deleteExercise(e.exercise._id)}},"delete")))},f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).deleteExercise=a.deleteExercise.bind(Object(b.a)(a)),a.state={exercises:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/exercises/").then(function(t){e.setState({exercises:t.data})}).catch(function(e){console.log(e)})}},{key:"deleteExercise",value:function(e){g.a.delete("/exercises/"+e).then(function(e){console.log(e.data)}),this.setState({exercises:this.state.exercises.filter(function(t){return t._id!==e})})}},{key:"exerciseList",value:function(){var e=this;return this.state.exercises.map(function(t){return r.a.createElement(v,{exercise:t,deleteExercise:e.deleteExercise,key:t._id})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Logged Exercises"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Duration"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.exerciseList())))}}]),t}(n.Component),C=a(33),D=a.n(C),x=(a(63),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).onChangeUsername=a.onChangeUsername.bind(Object(b.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(b.a)(a)),a.onChangeDuration=a.onChangeDuration.bind(Object(b.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.state={username:"",description:"",duration:0,date:new Date,users:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/exercises/"+this.props.match.params.id).then(function(t){e.setState({username:t.data.username,description:t.data.description,duration:t.data.duration,date:new Date(t.data.date)})}).catch(function(e){console.log(e)}),g.a.get("/users/").then(function(t){t.data.length>0&&e.setState({users:t.data.map(function(e){return e.username})})}).catch(function(e){console.log(e)})}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),g.a.post("/exercises/update/"+this.props.match.params.id,t).then(function(e){return console.log(e.data)}),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit Exercise Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes): "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",null,r.a.createElement(D.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Edit Exercise Log",className:"btn btn-primary"}))))}}]),t}(n.Component)),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).onChangeUsername=a.onChangeUsername.bind(Object(b.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(b.a)(a)),a.onChangeDuration=a.onChangeDuration.bind(Object(b.a)(a)),a.onChangeDate=a.onChangeDate.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.state={username:"",description:"",duration:0,date:new Date,users:[]},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/users/").then(function(t){t.data.length>0&&e.setState({users:t.data.map(function(e){return e.username}),username:t.data[0].username})}).catch(function(e){console.log(e)})}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),g.a.post("/exercises/add",t).then(function(e){return console.log(e.data)}),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New Exercise Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes): "),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date: "),r.a.createElement("div",null,r.a.createElement(D.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create Exercise Log",className:"btn btn-primary"}))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).onChangeUsername=a.onChangeUsername.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a.state={username:""},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};console.log(t),g.a.post("/users/add",t).then(function(e){return console.log(e.data)}),this.setState({username:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New User"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username: "),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create User",className:"btn btn-primary"}))))}}]),t}(n.Component);var j=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(o,null),r.a.createElement("br",null),r.a.createElement(c.a,{path:"/",exact:!0,component:f}),r.a.createElement(c.a,{path:"/edit/:id",component:x}),r.a.createElement(c.a,{path:"/create",component:N}),r.a.createElement(c.a,{path:"/user",component:y})))};i.a.render(r.a.createElement(j,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(138)}},[[67,1,2]]]);
//# sourceMappingURL=main.736108c6.chunk.js.map