import{a as I,b as M,c as g,d as h,e as y,f as S,g as F,h as G,i as j,j as w,k as N,l as O,m as x,n as z}from"./chunk-MDXGIDPX.js";import{a as v}from"./chunk-JKCGTHXR.js";import{La as n,Pa as d,Sa as u,jb as C,kb as m,s as l,t as i,tb as b,ub as P,v as f,y as t}from"./chunk-BYUBF2K6.js";import"./chunk-GAL4ENT6.js";var a=class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=t({type:o})}static{this.\u0275inj=i({imports:[n]})}};var s=class o{constructor(e){this.http=e;this.ruta=v.ruta}ObtenerPlandeIntervencionsCiclos(){return this.http.get(this.ruta+"api/PlandeIntervencionsCiclos/")}AgregarPlandeIntervencionsCiclos(e){return this.http.post(this.ruta+"api/PlandeIntervencionsCiclos/",e)}ModificarPlandeIntervencionsCiclos(e,r){return this.http.put(this.ruta+"api/PlandeIntervencionsCiclos/"+r,e)}SeleccionarPlandeIntervencionsCiclos(e){return this.http.get(this.ruta+"api/PlandeIntervencionsCiclos/"+e)}EliminarPlandeIntervencionsCiclos(e){return this.http.delete(this.ruta+"api/PlandeIntervencionsCiclos/"+e)}createFormGroupPlandeIntervencionsCiclos(){return new C({id:new m(0),id_plandeintervencion:new m(""),id_ciclo:new m(""),apuntes:new m("")})}static{this.\u0275fac=function(r){return new(r||o)(f(d))}}static{this.\u0275prov=l({token:o,factory:o.\u0275fac,providedIn:"root"})}};var c=class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=t({type:o})}static{this.\u0275inj=i({providers:[G,F,M,g,I,j,S,N,s,w,O,x],imports:[n]})}};var H=class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=t({type:o})}static{this.\u0275inj=i({imports:[n,b,P,z,u,h,a,c,y]})}};export{H as GestionesModule};
