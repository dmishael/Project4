(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(t,e,n){t.exports=n(83)},41:function(t,e,n){},60:function(t,e,n){},83:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(8),l=n.n(i),m=(n(41),n(3)),p=n(4),r=n(6),s=n(5),c=n(7),u=n(29),g=n(1),h=n.n(g),d=n(9),f=function(t){function e(){var t,n;Object(m.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(r.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={appointment:{date:n.props.appointment.date,time:n.props.appointment.time,area:n.props.appointment.area,fee:n.props.appointment.fee,name:n.props.appointment.name,eName:n.props.appointment.eName,clientAddress:n.props.appointment.clientAddress,appId:n.props.appointment.appId},comment:{appId:n.props.appointment.appId,comment:n.props.appointment.internalComments.comment,intComId:n.props.appointment.internalComments.intComId}},n.handleChange=function(t){t.preventDefault();var e=Object(d.a)({},n.state.comment);console.log("posts here",e),e[t.target.name]=t.target.value,n.setState({comment:e})},n.handleChangeAppointmentData=function(t){var e=Object(d.a)({},n.state.appointment);e[t.target.name]=t.target.value,n.setState({appointment:e}),console.log(n.state.appointment.date)},n.handleSubmitAppointmentDate=function(t){t.preventDefault();var e=n.state.appointment;h.a.post("api/v1/appointments/",e).then(function(t){n.props.getAllAppointments(),n.props.getAllComments()})},n.handleSubmit=function(t){t.preventDefault();var e=n.state.comment;console.log(e),h.a.post("/api/v1/internalComments/",e).then(function(){n.props.getAllAppointments(),n.props.getAllComments()})},n.handleEditComment=function(t){t.preventDefault(),console.log(n.props.intComId);var e=n.state.comment,a=n.props.intComId;console.log(e),h.a.patch("/api/v1/internalComments/".concat(a,"/"),e).then(function(){n.props.getAllAppointments(),n.props.getAllComments()})},n.handleEditDate=function(t){t.preventDefault(),console.log(n.props.appointmentDate);var e=n.state.appointment,a=n.state.appointment.appId;console.log(e),h.a.patch("/api/v1/appointments/".concat(a,"/"),e).then(function(){n.props.getAllAppointments(),n.props.getAllComments()})},n.deleteAppointmentData=function(t){t.preventDefault();var e=n.props.appointment.appId;h.a.delete("/api/v1/appointments/".concat(e,"/")).then(function(){n.props.getAllAppointments(),n.props.getAllComments()})},n.deleteComment=function(t){t.preventDefault();var e=n.props.intComId;h.a.delete("/api/v1/internalComments/".concat(e,"/")).then(function(){n.props.getAllAppointments(),n.props.getAllComments()})},n}return Object(c.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmitAppointmentDate},o.a.createElement("div",null,o.a.createElement("input",{type:"text",placeholder:"Appointment Date",name:"date",value:this.state.appointment.date,onChange:this.handleChangeAppointmentData}),o.a.createElement("input",{type:"text",placeholder:"Appointment Time",name:"time",value:this.state.appointment.time,onChange:this.handleChangeAppointmentData})),o.a.createElement("button",null,"Submit appointmentDate")),o.a.createElement("h1",null,"Appointment:"),o.a.createElement("ul",null,this.props.appointment.date),o.a.createElement("ul",null,this.props.appointment.time),o.a.createElement("h1",null,this.props.comment),o.a.createElement("button",{onClick:function(e){return t.deleteAppointmentData(e)}},"Delete"),o.a.createElement("form",{onSubmit:this.handleEditComment},o.a.createElement("input",{type:"text",name:"comment",placeholder:"Your comment",onChange:this.handleChange}),o.a.createElement("button",{onClick:this.handleEditComment},"Edit"),o.a.createElement("button",{onClick:function(e){return t.deleteComment(e)}},"Delete")),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",name:"comment",placeholder:"Your comment",onChange:this.handleChange}),o.a.createElement("button",{onClick:this.handleSubmit},"Submit")))}}]),e}(a.Component),v=function(t){function e(){return Object(m.a)(this,e),Object(r.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,this.props.appointments.map(function(e,n){return console.log(e),o.a.createElement(f,{key:n,intComId:e.internalComments.length>0?e.internalComments[0].intComId:null,appointment:e,comment:e.internalComments.length>0?e.internalComments[0].comment:null,getAllAppointments:t.props.getAllAppointments,getAllComments:t.props.getAllComments})}))}}]),e}(a.Component),C=(n(60),n(30)),A=n.n(C),b=function(t){var e=t.text;return o.a.createElement("div",null," ",e," ")},E=function(t){function e(){return Object(m.a)(this,e),Object(r.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{style:{height:"25vh",width:"100%"}},o.a.createElement(A.a,{apiKey:"AIzaSyCfevkfhxfo1nANCoe03dX3ENAxu2AASes",defaultCenter:this.props.center,defaultZoom:this.props.zoom},o.a.createElement(b,{lat:59.955413,lng:30.337844,text:"Kreyser"})))}}]),e}(a.Component);E.defaultProps={center:{lat:33.749,lng:-84.388},zoom:11};var y=E,j=function(t){function e(){var t,n;Object(m.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(r.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={image:{image:n.props.image.image}},n.handleChange=function(t){t.preventDefault();var e=Object(d.a)({},n.state.image);e[t.target.name]=t.target.value,console.log(n.state.image),n.setState({image:e})},n.handleSubmit=function(t){t.preventDefault();var e=n.state.image;h.a.post("api/v1/images/",e).then(console.log(e)).then(function(t){n.props.getAllImages()})},n.deleteComment=function(t){t.preventDefault(),h.a.delete("/api/v1/images/".concat(n.props.imgId,"/")).then(function(){n.props.getAllImages()})},n}return Object(c.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("img",{src:this.props.image,alt:"MEC"}),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",null,o.a.createElement("input",{type:"text",placeholder:"Image Url",name:"image",value:this.state.image.image,onChange:this.handleChange})),o.a.createElement("button",null,"Submit"),o.a.createElement("button",{onClick:function(e){return t.deleteComment(e)}},"Delete")))}}]),e}(a.Component);function O(){var t=Object(u.a)(['\ntext-align: "center";\nposition: absolute;\ntop: 10%;\nmargin-left: 20%;\nmargin-right: 15%;\nfont-weight: bold;\nfont-size: 16px;\nfont-family: Courier New;\n\n']);return O=function(){return t},t}var I=n(31).a.div(O()),D=function(t){function e(){var t,n;Object(m.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(r.a)(this,(t=Object(s.a)(e)).call.apply(t,[this].concat(o)))).state={appointments:[{appId:1,date:"February 10, 2019",time:"10:00 PM",area:"chin",fee:100,name:"Cindy",eName:"Ahoova",clientAddress:"string",internalComments:[{appId:1,intComId:1,comment:"string"}]}],image:[{image:"string"}]},n.getAllAppointments=function(){h.a.get("/api/v1/appointments/").then(function(t){console.log("get all appointments returns: "+t.data),n.setState({appointments:t.data}),console.log(n.state.appointments)})},n.getAllComments=function(){h.a.get("/api/v1/internalComments/").then(function(t){console.log("get all appointments returns: "+t.data),n.setState({internalComment:t.data}),console.log(n.state.internalComment)})},n.getAllImages=function(){h.a.get("/api/v1/images/").then(function(t){console.log("get all images returns: "+t.data),n.setState({image:t.data}),console.log(n.state.image)})},n}return Object(c.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){this.getAllAppointments(),console.log("running"),this.getAllComments(),this.getAllImages()}},{key:"render",value:function(){var t=this;return o.a.createElement(I,null,o.a.createElement("div",null,o.a.createElement(v,{appointments:this.state.appointments,getAllAppointments:this.getAllAppointments,getAllComments:this.getAllComments,updateComment:this.updateComment}),o.a.createElement(y,null),this.state.image.map(function(e,n){return o.a.createElement(j,{key:n,image:e.image,getAllImages:t.getAllImages,imgId:e.id})})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.80d53615.chunk.js.map