(this["webpackJsonpvet-bcanales"]=this["webpackJsonpvet-bcanales"]||[]).push([[0],{17:function(e,t,a){},28:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(22),c=a.n(r),o=(a(28),a.p+"static/media/notFound.fae5b226.svg"),i=(a(17),a(0));var l=function(){return Object(i.jsx)(s.a.Fragment,{children:Object(i.jsx)("div",{className:"contNotFound",children:Object(i.jsx)("img",{className:"imagenNotFound",src:o,alt:"no encontrado"})})})},j=a(4),b=a(5),d=a(7),m=a(6),h=a(11),u=a.p+"static/media/dog-png.4854317c.webp",p=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(i.jsx)(s.a.Fragment,{children:Object(i.jsx)("div",{className:"contenedorPrincipal",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-6",children:[Object(i.jsx)("h1",{children:"Bienvenido!"}),Object(i.jsx)("div",{className:"botonPagina",children:Object(i.jsx)(h.b,{to:"/listado",className:"btn btn-primary",children:"Empecemos"})})]}),Object(i.jsx)("div",{className:"col-6",children:Object(i.jsx)("img",{className:"imagenInicio",src:u,alt:"Logo del avatar"})})]})})})}}]),a}(s.a.Component),O=(a(35),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"ListItem",children:[Object(i.jsx)("img",{className:"ListItem__avatar",src:this.props.badge.avatarUrl}),Object(i.jsxs)("div",{className:"datos",children:[Object(i.jsx)("strong",{children:"Nombre:"})," ",this.props.badge.nombre,Object(i.jsx)("br",{}),Object(i.jsx)("strong",{children:" Raza:"})," ",this.props.badge.raza,Object(i.jsx)("br",{}),Object(i.jsx)("strong",{children:"Nombre del due\xf1o:"})," ",this.props.badge.nombreDue,Object(i.jsx)("br",{}),Object(i.jsx)("strong",{children:"Telf. due\xf1o:"})," ",this.props.badge.telefono,Object(i.jsx)("br",{}),Object(i.jsx)("strong",{children:"Correo due\xf1o:"})," ",this.props.badge.email]})]})}}]),a}(s.a.Component)),x=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"List",children:Object(i.jsx)("ul",{className:"list-unstyled",children:this.props.badges.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(O,{badge:e})},e.id)}))})})}}]),a}(s.a.Component),f=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={data:[{id:"2de30c42-9deb-40fc-a41f-05e62b5939a7",nombre:"Koki",nombreDue:"Brayan Canales",raza:"zahuate",email:"bcanales@csye.com",telefono:"85516391",avatarUrl:"https://acortar.link/scSrs"},{id:"d00d3614-101a-44ca-b6c2-0be075aeed3d",nombre:"Major",nombreDue:"Luis Alvarez",raza:"Pastor alem\xe1n",email:"Ilene66@hotmail.com",telefono:"26662000",avatarUrl:"https://acortar.link/Yc7QE"},{id:"63c03386-33a2-4512-9ac1-354ad7bec5e9",nombre:"Daphney",nombreDue:"Ingrid Leiva",raza:"Husky",email:"Ron61@hotmail.com",telefono:"26887009",avatarUrl:"https://acortar.link/FyAvx"}]},e}return Object(b.a)(a,[{key:"render",value:function(){return Object(i.jsx)(s.a.Fragment,{children:Object(i.jsx)("div",{className:"contenedorPrincipalListado",children:Object(i.jsxs)("div",{className:"listContenedor",children:[Object(i.jsx)("div",{className:"botonListPagina",children:Object(i.jsx)(h.b,{to:"/nuevo",className:"btn btn-primary",children:"Nuevo"})}),Object(i.jsx)(x,{badges:this.state.data})]})})})}}]),a}(s.a.Component),v=a(14),g=a(20),N=(a.p,a(36),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"badge",children:[Object(i.jsx)("div",{className:"badge_header",children:"Nueva Mascota"}),Object(i.jsxs)("div",{className:"badge_section-name",children:[Object(i.jsx)("img",{className:"badge_avatarPrin",src:this.props.imagenPerfil,alt:"Logo del avatar"}),Object(i.jsxs)("div",{className:"datosMascota",children:[Object(i.jsxs)("span",{className:"formato",children:["Nombre: ",this.props.nombre]}),Object(i.jsxs)("span",{className:"formato",children:["Due\xf1o: ",this.props.nombreDue]}),Object(i.jsxs)("span",{className:"formato",children:["Tel\xe9fono: ",this.props.telefono]}),Object(i.jsxs)("span",{className:"formato",children:["Correo: ",this.props.correo]}),Object(i.jsxs)("span",{className:"formato",children:["Raza: ",this.props.raza]})]})]}),Object(i.jsx)("div",{className:"badge_footer",children:"Pr\xe1ctica react"})]})}}]),a}(s.a.Component)),y=a.p+"static/media/mascota.e392b6b6.png",C=(a(37),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(i.jsxs)(s.a.Fragment,{children:[Object(i.jsx)("h1",{children:"Datos de la mascota"}),Object(i.jsxs)("form",{children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Nombre"}),Object(i.jsx)("input",{name:"nombre",onChange:this.props.onChange,type:"text",className:"form-control-inputs",id:"nombre",value:this.props.formValues.nombre}),Object(i.jsx)("label",{children:"Raza"}),Object(i.jsx)("input",{name:"raza",onChange:this.props.onChange,type:"text",className:"form-control-inputs",id:"raza",value:this.props.formValues.raza}),Object(i.jsx)("label",{children:"Nombre del due\xf1o"}),Object(i.jsx)("input",{name:"nombreDue",onChange:this.props.onChange,type:"text",className:"form-control-inputs",id:"nombreDue",value:this.props.formValues.nombreDue}),Object(i.jsx)("label",{children:"Tel\xe9fono"}),Object(i.jsx)("input",{name:"telefono",onChange:this.props.onChange,type:"text",className:"form-control-inputs",id:"telefono",value:this.props.formValues.telefono}),Object(i.jsx)("label",{children:"Correo"}),Object(i.jsx)("input",{name:"correo",onChange:this.props.onChange,type:"email",className:"form-control-inputs",id:"correo",value:this.props.formValues.correo})]}),Object(i.jsx)(h.b,{to:"/listado",className:"btn btn-primary",children:"Guardar"})]})]})}}]),a}(s.a.Component)),z=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={form:{nombre:"",nombreDue:"",raza:"",telefono:"",correo:""}},e.valoresInputs=function(t){e.setState({form:Object(g.a)(Object(g.a)({},e.state.form),{},Object(v.a)({},t.target.name,t.target.value))})},e}return Object(b.a)(a,[{key:"render",value:function(){return Object(i.jsx)(s.a.Fragment,{children:Object(i.jsxs)("div",{className:"contenedorPrincipal",children:[Object(i.jsx)("div",{className:"contFondHeader"}),Object(i.jsx)("div",{className:"contenedor",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-6",children:Object(i.jsx)(N,{imagenPerfil:y,nombre:this.state.form.nombre,nombreDue:this.state.form.nombreDue,raza:this.state.form.raza,telefono:this.state.form.telefono,correo:this.state.form.correo})}),Object(i.jsx)("div",{className:"col-6",children:Object(i.jsx)(C,{onChange:this.valoresInputs,formValues:this.state.form})})]})})]})})}}]),a}(s.a.Component),k=a(2),D=a.p+"static/media/iconoHuella.2527b704.png",F=(a(38),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"navContenedor",children:Object(i.jsxs)(h.b,{className:"inicio",to:"/",children:[Object(i.jsx)("img",{className:"imgNav",src:D,alt:"Logo"}),Object(i.jsx)("span",{className:"navTitulo",children:"Inicio"})]})})}}]),a}(s.a.Component));var L=function(e){return Object(i.jsxs)(s.a.Fragment,{children:[Object(i.jsx)(F,{}),e.children]})};var P=function(){return Object(i.jsx)(h.a,{children:Object(i.jsx)(L,{children:Object(i.jsxs)(k.c,{children:[Object(i.jsx)(k.a,{exact:!0,path:"/",component:p}),Object(i.jsx)(k.a,{exact:!0,path:"/listado",component:f}),Object(i.jsx)(k.a,{exact:!0,path:"/nuevo",component:z}),Object(i.jsx)(k.a,{component:l})]})})})},I=(a(39),document.getElementById("app"));c.a.render(Object(i.jsx)(P,{}),I)}},[[40,1,2]]]);
//# sourceMappingURL=main.a6c05b6d.chunk.js.map